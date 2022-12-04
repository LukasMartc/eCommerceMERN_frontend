import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alerts from '../components/Alerts';
import clientAxios from '../config/clientAxios';

const NewPassword = () => {
    const [validToken, setValidToken] = useState(false);
    const [alert, setAlert] = useState({});
    const [password, setPassword] = useState('');
    const [changedPassword, setChangedPassword] = useState(false);

    const params = useParams();
    const { token } = params;

    useEffect(() => {
        document.title = 'Itech | Nueva contraseña';
        const confirmToken = async () => {
            try {
                const url = `/users/forget-password/${token}`;
                await clientAxios(url);
                setValidToken(true);
            } catch (error) {
                setAlert({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        confirmToken(); 
    }, [])
    
    const { msg } = alert;
    
    const handleSubmit = async e => {
        e.preventDefault();
        if(password.length < 8) {
            setAlert({
                msg: 'La contraseña debe tener mínimo 8 caracteres',
                error: true
            })
            return;
        }

        try {
            const url = `/users/forget-password/${token}`;
            const { data } = await clientAxios.post(url, { password });
            setAlert({
                msg: data.msg,
                error:false
            })
            setChangedPassword(true);
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            }) 
        }
    }

    return (
        <main className='main-new-password'>
            <div className='container-new-password'>
                <h2>Restablece tu contraseña y no pierdas acceso <br/> a lo último en tecnología</h2>
                
                {msg && <Alerts alert={alert} />}
                
                {validToken && (
                    <form 
                        className='form-new-password'
                        onSubmit={handleSubmit}
                    >
                        <TextField 
                            type="password" 
                            id="password" 
                            label="Nueva contraseña"
                            variant="outlined"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"  
                            color="warning" 
                            variant="outlined"
                        >
                            Guardar 
                        </Button>
                    </form>
                )}

                {changedPassword && (
                    <Link fontSize="18px" href="/login" underline="none">
                        {'Inicia sesión'}
                    </Link>        
                )}

            </div>
        </main>
  )
}

export default NewPassword