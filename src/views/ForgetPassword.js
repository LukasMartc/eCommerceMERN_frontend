import { useState, useEffect } from 'react';
import clientAxios from '../config/clientAxios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Alerts from '../components/Alerts';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({});

  useEffect(() => {
    document.title = 'Itech | Recupera tu contraseña';
  },[])

  const handleSubmit = async e => {
    e.preventDefault();

    if(email === '' || email.length < 6) {
      setAlert({
        msg: 'El email es obligatorio',
        error: true
      })
      return;
    }
    try {
      const { data } = await clientAxios.post('/users/forget-password', { email });
      setAlert({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alert;

  return (
    <main className='main-forget-password'>
      <div className='container-forget-password'>
        <h2>Recupera tu acceso y no pierdas tus productos</h2>

        {msg && <Alerts alert={alert} />}

        <form 
          className='form-forget-password'
          onSubmit={handleSubmit}
        >
          <TextField 
            type="email" 
            id="email" 
            label="Correo" 
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <Button  
            color="warning" 
            variant="outlined"
            type="submit"
          >
            Enviar instrucciones
          </Button>
        </form>
        <Grid container rowSpacing={2} marginTop="1px">
          <Grid item md={6} xs={12} textAlign="center">
            <Link fontSize="13px" href="/login" underline="none">
              {'¿Ya tienes cuenta? Inicia sesión'}
            </Link>
          </Grid>
          <Grid item md={6} xs={12} textAlign="center">
            <Link fontSize="13px" href="/register" underline="none">
              {'¿No tienes cuenta? Regístrate'}
            </Link>
          </Grid>
        </Grid>
      </div>
    </main>
  )
}

export default ForgetPassword