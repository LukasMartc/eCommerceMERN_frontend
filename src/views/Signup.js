import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alerts from '../components/Alerts';
import clientAxios from '../config/clientAxios';

const Signup = () => {   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState({});

    useEffect(() => {
        document.title = 'Itech | Registrarse';
      },[])

    const handleSubmit = async e => {
        e.preventDefault();

        if([name, email, password, confirmPassword].includes('')) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }

        if(password !== confirmPassword) {
            setAlert({
                msg: 'Las contraseñas no coinciden',
                error: true
            })
            setPassword('');
            setConfirmPassword('');
            return;
        }

        if(password.length < 8) {
            setAlert({
                msg: 'La contraseña es muy corta, agrega mínimo 8 caracteres',
                error: true
            })
            setPassword('');
            setConfirmPassword('');
            return;
        }
        
        setAlert({})

        // Crear el usuario en la API
        try {
            const { data } = await clientAxios.post('/users', { name, email, password });
            setAlert({
                msg: data.msg,
                error: false
            })

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
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
            <Grid item sm={12} md={6}>
                <div className='container-change-signin'>
                    <h2>Bienvenido de nuevo</h2>
                    <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                    <Button  
                        href='/login'
                        color="warning" 
                        variant="contained"
                    >
                        Iniciar Sesión
                    </Button>
                </div>
            </Grid>
            <Grid item sm={12} md={6} width="100%">
                <div className='container-register'>
                    <h2>Registrate aquí</h2>
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
                            onChange={e => setConfirmPassword(e.target.value)} />
                        <Button  
                            type='submit'
                            color="warning" 
                            variant="outlined"
                        >
                            Registrarse
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Signup