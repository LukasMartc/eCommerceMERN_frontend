import { Stack, TextField, Button, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import Alerts from '../components/Alerts';
import useAuth from '../hooks/useAuth';

const RegisterAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { showAlert, alert, signUpAdmin } = useAuth();

  useEffect(() => {
    document.title = 'Itech | Mi perfil - Registrar admin';
  },[])

  const handleSubmit = async e => {
    e.preventDefault();

    if([name, email, password, confirmPassword].includes('')) {
      showAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    if(password !== confirmPassword) {
      showAlert({
          msg: 'Las contraseñas no coinciden',
          error: true
      })
      setPassword('');
      setConfirmPassword('');
      return;
    }

    if(password.length < 8) {
      showAlert({
          msg: 'La contraseña es muy corta, agrega mínimo 8 caracteres',
          error: true
      })
      setPassword('');
      setConfirmPassword('');
      return;
    }

    await signUpAdmin({name, email, password});

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const { msg } = alert; 

  return (
    <div className="container-register-admin">
      <Stack margin="50px 70px">
        <Stack 
          fontWeight="600" 
          fontSize="20px"
          alignItems="flex-start"
        >
          <h3 className='title-register-admin'>Registra un admin</h3>
        </Stack>
        <Divider />
        <Stack margin="30px 50px" alignItems="center" justifyContent="center">
          {msg && <Alerts alert={alert} />}
          <form 
            className='form-register'
            onSubmit={handleSubmit}
          >
            <TextField 
              type="text" 
              id="name" 
              label="Nombre" 
              variant="outlined"
              value={name}
              onChange={e => setName(e.target.value)} 
            />
            <TextField 
              type="email" 
              id="email" 
              label="Correo" 
              variant="outlined" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              type="password" 
              id="password" 
              label="Contraseña" 
              variant="outlined"
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
            <TextField
              type="password"
              id="confirmPassword" 
              label="Confirmar contraseña" 
              variant="outlined"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)} 
            />
            <Button  
              type='submit'
              color="warning" 
              variant="outlined"
            >
              Registrar Admin
            </Button>
          </form>
        </Stack>
      </Stack>
    </div>
  )
}

export default RegisterAdmin