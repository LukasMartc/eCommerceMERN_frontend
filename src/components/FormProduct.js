import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Stack,
  TextField, 
  Button,  
  InputLabel, 
  OutlinedInput, 
  InputAdornment, 
  FormControl, 
  IconButton  
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import useProducts from '../hooks/useProducts';
import Alerts from '../components/Alerts';

const FormProduct = () => {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [inStock, setInStock] = useState('');
    const [features, setFeatures] = useState('');
    const [others, setOthers] = useState('');
    

    const params = useParams();
    const { showAlert, alert, submitProduct, product } = useProducts();


    useEffect(() => {
        if(params.id) {
            setImage(product.image) 
            setId(product._id);
            setName(product.name);
            setPrice(product.price);
            setBrand(product.brand);
            setColor(product.color);
            setInStock(product.inStock);
            setFeatures(product.features);
            setOthers(product.others);
        } 
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault();

        if([name, image, price, brand, color, inStock, features, others].includes('')) {
        showAlert({
            msg: 'Todos los campos son obligatorios',
            error: true
        })
        return;
        }

        // Pasar los datos hacia el provider
        await submitProduct({id, name, image, price, brand, color, inStock, features, others});

        setName('');
        setImage('');
        setPrice('');
        setBrand('');
        setColor('');
        setInStock('');
        setFeatures('');
        setOthers('');
    }

    const { msg } = alert;

    return (
        <Stack margin="30px 50px" alignItems="center" justifyContent="center">
          
            {msg && <Alerts alert={alert} />}

            <form 
                className='form-register'
                onSubmit={handleSubmit}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <FormControl sx={{ width: '84%' }}>
                        <TextField 
                            type="text" 
                            id="name" 
                            label="Nombre" 
                            variant="outlined"
                            value={name} 
                            onChange={e => setName(e.target.value)} 
                        />
                    </FormControl>
                    <div className='attach-image'>
                        <p>Aduntar Imagen</p>
                        <IconButton color="warning" aria-label="upload picture" component="label">
                            <input
                                name="image"
                               /*  hidden  */
                                accept="image/*" 
                                type="file"
                                onChange={e => setImage(e.target.files[0])}  
                            />
                            <PhotoCamera />
                        </IconButton>
                    </div>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <FormControl sx={{ width: '49%' }}>
                        <InputLabel htmlFor="price">Precio</InputLabel>
                        <OutlinedInput
                            id="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Precio"
                            type='number'
                        />
                    </FormControl>
                    <FormControl sx={{ width: '49%' }}>
                        <TextField
                            type="text" 
                            id="brand" 
                            label="Marca" 
                            variant="outlined"
                            value={brand}
                            onChange={e => setBrand(e.target.value)} 
                        />
                    </FormControl>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <FormControl sx={{ width: '49%' }}>
                        <TextField
                            type="text"
                            id="color" 
                            label="Color" 
                            variant="outlined"
                            value={color}
                            onChange={e => setColor(e.target.value)} 
                        />
                    </FormControl>
                    <FormControl sx={{ width: '49%' }}>
                        <TextField
                            type="number"
                            id="Stock" 
                            label="Stock" 
                            variant="outlined"
                            value={inStock}
                            onChange={e => setInStock(e.target.value)} 
                        />
                    </FormControl>
                </Stack >
                <Stack direction="row" justifyContent="space-between">
                    <FormControl sx={{ width: '49%' }}>
                        <TextField
                            type="text"
                            id="features"
                            label="Características"
                            multiline
                            maxRows={5}
                            value={features}
                            onChange={e => setFeatures(e.target.value)}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '49%' }}>
                        <TextField
                            type="text"
                            id="others"
                            label="Otros"
                            multiline
                            maxRows={5}
                            value={others}
                            onChange={e => setOthers(e.target.value)}
                        />
                    </FormControl>
                </Stack>
                    
                <Button  
                    type='submit'
                    color="warning" 
                    variant="outlined"
                >
                    {id ? 'Actualizar Producto' : 'Crear Producto'}
                </Button>
            </form>
        </Stack>
    )
}

export default FormProduct