import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAuth from '../hooks/useAuth';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { auth, signOffAuth } = useAuth();

  const navigate = useNavigate();

  const handleSignOff = () => {
    signOffAuth();
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <nav className='navbar'>
      <h3 className='logo'>Itech</h3>
      <ul 
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link to='/' className='home'>
          <li>Inicio</li>
        </Link>
        <Link to='/products' className='catalog'>
          <li>Catálogo</li>
        </Link>

        {Object.entries(auth).length === 0 ? (
          <Fragment>
            <Link to='/login' className='signin'>
              <li>Iniciar Sesión</li>
            </Link>
            <Link to='/register' className='signup'>
              <li>Registrarse</li>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link to='/profile' 
              className='signin'
            >
              <li>
                <PersonIcon />
              </li>
            </Link>
            <Link to='#' className='signin'>
              <li>
                <ShoppingCartIcon />
              </li>
            </Link>
            <Link className='signup' onClick={handleSignOff}>
              <li>Cerrar Sesión</li>
            </Link>
          </Fragment>
        )}

        
      </ul>
      <button 
        className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}  
      >
        {isMobile ? (
          <CloseRoundedIcon /> 
        ) : (
          <MenuRoundedIcon />
        )}
      </button>
    </nav>
  )
}

export default NavBar