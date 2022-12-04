import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import FormProduct from '../components/FormProduct';
import { Stack, Divider } from '@mui/material';

const EditProduct = () => {
  const params = useParams();
  const { id } = params;

  const { getProduct, product, charging } = useProducts();
  
  useEffect(() => {
    getProduct(id);
  }, [])
  
  const {name} = product

  if(charging) return 'Cargando...'

  return (
    <div className="container-register-admin">
      <Stack margin="50px 70px">
        <Stack 
          fontWeight="600" 
          fontSize="20px"
          alignItems="flex-start"
        >
          <h3 className='title-register-admin'>Editando Producto {name}</h3>
        </Stack>
        <Divider />

        <FormProduct />
        
      </Stack>
    </div>
  )
}

export default EditProduct