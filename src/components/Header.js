import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductHeader from './ProductHeader';
import Phone from '../images/header/iPhone14.png';
import SmartWatch from '../images/header/GearS3.png';
import Laptop from '../images/header/AsusRogZephyrusDuo16.png';

const Header = () => {
  return (
    <main className='main-header'>
        <Grid
            container 
            color="white"
            direction="row"
            justifyContent="space-between"
        >
            <Grid
                sm={12}
                lg={4}
                fontSize="30px"
                fontWeight="900"
                margin="0 0 30px"
            >
                <div className='title-header'>
                    <h1>Lo último en tecnología <br /> directo a tu hogar</h1>
                    <Button
                        variant="contained"
                        href="/products"
                        endIcon={<LocalMallIcon />}
                        color="warning"
                    >
                        Compra Ahora!
                    </Button>
                </div>
            </Grid>
            <Grid
                xs={12}
                lg={6}
                md={3.5}
                margin="0 0 30px"
            >
                <ProductHeader 
                    title="Celulares" 
                    paragraph="El teléfono que siempre deseaste"
                    img={Phone}
                    width="233px"
                    height="400px"
                />
            </Grid>
            <Divider orientation="vertical" flexItem margin="0" />
            <Grid
                xs={12}
                lg={6}
                md={4}
                spacing={2}
                margin="0 0 30px"
            >
                <ProductHeader
                    title="Laptops"
                    paragraph="Una computadora portatil en la que puedes confiar"
                    img={Laptop}
                    width="254px"
                    height="200" 
                />
                <Divider orientation="horizontal" flexItem margin="0" />
                <ProductHeader
                    title="Smartwatches"
                    paragraph="Diseño inteligente y duradero"
                    img={SmartWatch}
                    width="198"
                    height="200" 
                />
            </Grid>
        </Grid>
    </main>
  )
}

export default Header