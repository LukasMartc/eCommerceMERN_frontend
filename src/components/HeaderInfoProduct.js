import { Grid, Divider, Button,Stack } from '@mui/material';
import { Fragment } from 'react';
import useAuth from '../hooks/useAuth';
import useProducts from '../hooks/useProducts';
import Alerts from './Alerts';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const HeaderInfoProduct = ({product}) => {
    const {  _id, name } = product;

    const { auth } = useAuth();
    const { deleteProduct, alert } = useProducts();

    const handleClick = () => {
        toast((t) => (
            <div>
                <p>¿Deseas eliminar este producto?</p>
                <Stack direction="row" justifyContent="space-between">
                    <Button 
                        variant="text" 
                        color='error' 
                        onClick={() => deleteProduct(_id)}>Eliminar</Button>
                    <Button variant="text" onClick={() => toast.dismiss(t.id)} >Cancelar</Button>
                </Stack>
            </div>
        ))
    }

    const { msg } = alert;

    return (
        <Fragment>
            <Grid container>
                <Grid item md={9} sm={12} marginTop="22.5px">
                    <div className='box-title-product'>
                        <h2 className='title-product'>{name}</h2>
                    </div>
                </Grid>
                {auth.admin && (
                    <Grid item md={3} sm={12} marginTop="47px">
                        <div className='box-btns-admins'>
                            <Button 
                                variant="text" 
                                size='small' 
                                color='primary'
                                href={`/profile/edit/${_id}`}
                            >
                                Editar
                            </Button>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <Button 
                                variant="text" 
                                size='small' 
                                color='error'
                                onClick={handleClick}
                            >
                                Eliminar
                            </Button>
                        </div>
                    </Grid>
                )} 
            </Grid>   
            <Divider variant="middle" width="100%" />   
            {msg && <Alerts alert={alert} />}  
        </Fragment>
    )
    }

export default HeaderInfoProduct