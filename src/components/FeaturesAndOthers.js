import { Grid } from '@mui/material';
import Characteristic from '../components/Characteristic';

const FeaturesAndOthers = ({product}) => {

    const { features, others } = product;

    let characteristics;
    let secundaryInfo;

    if(typeof features === 'string') {
        characteristics = features.split('-');
    }

    if(typeof others === 'string') {
        secundaryInfo = others.split('-');
    }

    return (
        <Grid item sm={12} md={7.5} paddingLeft="20px">
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <h3 className='title-features'>Características</h3>
                    {characteristics?.map(characteristic =>(
                        <Characteristic 
                            key={characteristic}
                            characteristic={characteristic}
                        />
                    ))}
                </Grid>
                    <Grid item md={4} xs={12}>
                    <h3 className='title-others'>Otros</h3>
                    {secundaryInfo?.map(secundary =>(
                        <Characteristic 
                            key={secundary}
                            characteristic={secundary}
                        />
                    ))}
                </Grid>
            </Grid> 
        </Grid>
  )
}

export default FeaturesAndOthers