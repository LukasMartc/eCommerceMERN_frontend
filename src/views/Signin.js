import { useState, useEffect } from 'react';
import clientAxios from '../config/clientAxios';
import Alerts from '../components/Alerts';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});

    const { setAuth } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Itech | Inicia sesión';
      },[])

    const handleSubmit = async e => {
        e.preventDefault();
        
        if([email, password].includes('')) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }

        try {
            const { data } = await clientAxios.post('/users/login/', { email, password }); 
            setAlert({});
            localStorage.setItem('token', data.token);
            setAuth(data);
            navigate('/')
            window.location.reload();
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alert;

  return (
    <div className='container-grid'>     
        <Grid container>
            <Grid item sm={12} md={6} >
                <div className='container-change-signup'>
                    <h2>Bienvenido</h2>
                    <p>Ingrese sus datos y sumerjase en la tecnología con nosotros</p>
                    <Button  
                        href='/register'
                        color="warning" 
                        variant="contained"
                    >
                        Registrarse
                    </Button>
                </div>
            </Grid>
            <Grid item sm={12} md={6} width="100%">
                <div className='container-register'>
                    <h2>Inicia sesión aquí</h2>

                    {msg && <Alerts alert={alert} />}

                    <form 
                        className='form-login'
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
                        <TextField 
                            type="password" 
                            id="password" 
                            label="Contraseña" 
                            variant="outlined" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Link href="/forget-password" underline="none">
                            {'Olvide mi password'}
                        </Link>
                        <Button  
                            type='submit'
                            color="warning" 
                            variant="outlined"
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Signin