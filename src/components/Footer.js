import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Paypal from '../images/footer/paypal.png';
import Webpay from '../images/footer/webpay.png';

const Footer = () => {
  return (
    <footer>
        <Grid 
        container 
        margin="0"
        padding="70px 0"
        rowSpacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Stack alignItems="center" justifyContent="center">
                    <h2 className='logo-footer'>Itech</h2>
                    <p className='slogan-footer'>Tecnología avanzada para tus necesidades</p>
                    <Stack spacing={2} direction="row" margin="5px">
                        <Link to="#" className='icon-footer'>
                            <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        </Link>
                        <Link to="#" className='icon-footer'>
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </Link>   
                        <Link to="#" className='icon-footer'>
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </Link>
                        <Link to="#" className='icon-footer'>
                            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Stack alignItems="center" justifyContent="center">
                    <h3 className='title-links'>Ayuda</h3>
                    <Stack spacing={2} alignItems="center" justifyContent="center">
                        <Link to="#" className='links-footer'>Centro de ayuda</Link>
                        <Link to="#" className='links-footer'>Seguimiento de mi compra</Link>
                        <Link to="#" className='links-footer'>Formulario de contacto</Link>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Stack alignItems="center" justifyContent="center">
                    <h3 className='title-links'>Nosotros</h3>
                    <Stack spacing={2} alignItems="center" justifyContent="center">
                        <Link to="#" className='links-footer'>Quiénes somos</Link>
                        <Link to="#" className='links-footer'>Preguntas Frecuentes</Link>
                        <Link to="#" className='links-footer'>Términos y condiciones</Link>
                        <Link to="#" className='links-footer'>Políticas de privacidad</Link>
                    </Stack>
                </Stack>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
                <Stack alignItems="center" justifyContent="center">
                    <h3 className='title-links'>Medios de pago</h3>
                        <Stack spacing={2} alignItems="center" justifyContent="center">
                            <img src={Webpay} alt='webpay' width='167px' height='75px' />
                            <img src={Paypal} alt='paypal' width='167px' height='75px' />
                        </Stack>
                </Stack>
            </Grid>
        </Grid>
    </footer>
  )
}

export default Footer