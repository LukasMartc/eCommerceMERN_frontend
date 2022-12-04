import { useEffect } from 'react';
import { Stack, Divider } from '@mui/material';
import FormProduct from '../components/FormProduct';

const CreateProduct = () => {
  
  useEffect(() => {
    document.title = 'Itech | Mi perfil - Crear producto';
},[])

  return (
    <div className="container-register-admin">
      <Stack margin="50px 70px">
        <Stack 
          fontWeight="600" 
          fontSize="20px"
          alignItems="flex-start"
        >
          <h3 className='title-register-admin'>Crea un Producto Nuevo</h3>
        </Stack>
        <Divider />

        <FormProduct />
        
      </Stack>
    </div>
  )
}

export default CreateProduct