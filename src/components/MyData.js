import { Stack, Button, Divider } from '@mui/material';
import useAuth from '../hooks/useAuth';

const MyData = () => {
    const { auth } = useAuth();

    return (
        <Stack>
            <Stack 
                fontWeight="600" 
                fontSize="20px"
                justifyContent="space-between"
                alignItems="center"
                direction="row"
            >
                <h3 className='title-mydata'>Mis Datos</h3>
                <Stack direction="row">
                    <Button variant="text" size='small' color='warning'>Cambiar contraseña</Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button variant="text" size='small' color='warning'>Editar</Button>
                </Stack>
            </Stack>
            <Divider />
            <Stack margin="10px 0" fontWeight="500" justifyContent="center" alignItems="flex-start">
                <p className='data-name'>{auth.name}</p>
                <p className='data-email'>{auth.email}</p>
            </Stack>
        </Stack>
  )
}

export default MyData