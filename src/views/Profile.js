import { Outlet, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import useAuth from '../hooks/useAuth';
import Sidebar from '../components/Sidebar';
import Grid from '@mui/material/Grid'

const Profile = () => {
    const { auth, charging } = useAuth();

    if(charging) return 'Cargando...'
    return (
        <Fragment>
            {auth._id ? (
                <div className='container-profile'>
                    <main className='container-main'>
                        <Grid container>
                            <Grid item sm={12} md={2}>
                                <Sidebar />
                            </Grid>
                            <Grid item sm={12} md={10}>
                                <Outlet /> 
                            </Grid>
                        </Grid>
                    </main>  
                </div>
            ) : <Navigate to='/' /> }
        </Fragment>
    )
}

export default Profile