import { Grid, Stack, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../hooks/useAuth';
import { Toaster, toast } from 'react-hot-toast';
import { PayPalButtons } from "@paypal/react-paypal-js";

const ProductInfoCard = ({product}) => {

    const { auth } = useAuth();

    const { image, brand, price, color, inStock } = product;

    const notify = () => toast.error('No puedes comprar, debes iniciar sesión o registrarte');
    
    return (
        <Grid item sm={12} md={4.5}>
            <div>
                <img src={image?.url} alt={image?.public_id} width="100%" height="250px"/>
            </div>
            <div>
                <Grid container>
                <Grid item md={6} xs={12}>
                    <p className='brand'><strong>Marca:</strong> {brand}</p>
                </Grid>
                <Grid item md={6} xs={12} textAlign="start">
                    <div className='container-helper-price'>
                    <p className='price'><strong>Precio:</strong> ${price}</p>
                    </div>
                </Grid>
                </Grid>
                <Grid container>
                <Grid item md={6} xs={12}>
                    <p className='color'><strong>Color:</strong> {color}</p>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div className='container-helper-stock'>
                    <p className='stock'><strong>Stock:</strong> {inStock}</p>
                    </div>
                </Grid>
                </Grid>
            </div>
            <Stack marginY="20px">
                {Object.entries(auth).length ? (
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "1.99",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                const name = details.payer.name.given_name;
                                toast.success(`Transacción completada por ${name}`)
                            });
                        }}
                    />
                ) : (
                    <Button 
                        variant="contained" 
                        color="warning" 
                        endIcon={<AddShoppingCartIcon />}
                        onClick={notify}
                    >
                        Comprar
                    </Button>
                )}
                <Toaster />
            
                
            </Stack>
        </Grid>
  )
}

export default ProductInfoCard