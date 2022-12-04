import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import useAuth from '../hooks/useAuth';

const Sidebar = () => {
  const { auth } = useAuth();
  
  return (
    <div className="sidebar-profile">
      <h2>Itech</h2>
      <Divider variant="middle" />
      <ul>
        <Link className='nav-links-profile' to="/profile">
          <li>
            <AccountCircleIcon /> 
            <span>Mi Cuenta</span>
          </li>
        </Link>
        <Link  className='nav-links-profile'>
          <li>
            <LocalShippingIcon /> 
            <span>Mis Pedidos</span>
          </li>
        </Link>
        <Link className='nav-links-profile'>
          <li>
            <FavoriteIcon /> 
            <span>Mis Favoritos</span>
          </li>
        </Link>
        <Link className='nav-links-profile'>
          <li>
            <ChangeCircleIcon /> 
            <span>Cambios y devoluciones</span>
          </li>
        </Link>
        <Link className='nav-links-profile'>
          <li>
            <InfoIcon /> 
            <span>Mi Información</span>
          </li>
        </Link>
        <Link className='nav-links-profile'>
          <li>
            <HomeIcon />
            <span>Mis direcciones</span>
          </li>
        </Link>
        <Link className='nav-links-profile'>
          <li>
            <EmailIcon /> 
            <span>Newsletter</span>
          </li>
        </Link>
        {auth.admin && (
          <Fragment>
            <Link className='nav-links-profile' to="/profile/create-product">
              <li>
                <InventoryIcon />
                <span>Crear Nuevo Producto</span>
              </li>
            </Link>
            <Link className='nav-links-profile' to="/profile/register-admin">
              <li>
                <PersonAddIcon /> 
                <span>Registrar Admin</span>
              </li>
            </Link>
          </Fragment>
        )}
      </ul>
    </div>
  )
}

export default Sidebar