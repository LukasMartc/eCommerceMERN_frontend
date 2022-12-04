import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import clientAxios from '../config/clientAxios';
import Alerts from '../components/Alerts';
import Link from '@mui/material/Link';


const ConfirmAccount = () => {
  const [alert, setAlert] = useState({});
  const [confirmedAccount, setconfirmedAccount] = useState(false);

  const params = useParams();
  const { id } = params;
 
  useEffect(() => {
    document.title = 'Itech | Confirma tu cuenta';
    const confirmAccount = async () => {
      try {
        const url = `/users/confirmed/${id}`;
        const { data } = await clientAxios(url);

        setAlert({
          msg: data.msg,
          error: false
        })
        setconfirmedAccount(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        }) 
      }
    }
    confirmAccount();
  }, [])

  const { msg } = alert;

  return (
    <main className='main-new-password'>
      <div className='container-new-password'>
          <h2>Confirma tu cuenta y compra tus productos <br /> tecnológicos favoritos</h2>
          
          <div className='alert-confirm-account'>
            {msg && <Alerts alert={alert} />}
          </div>
          <div className='link-change-login'>
            {confirmedAccount && (
                <Link fontSize="18px" href="/login" underline="none">
                  {'Inicia sesión'}
                </Link>
              )}
          </div>
      </div>
    </main>
  )
}

export default ConfirmAccount