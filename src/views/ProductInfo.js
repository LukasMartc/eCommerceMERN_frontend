import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import useProducts from '../hooks/useProducts';
import HeaderInfoProduct from '../components/HeaderInfoProduct';
import ProductInfoCard from '../components/ProductInfoCard';
import FeaturesAndOthers from '../components/FeaturesAndOthers';
import { Toaster } from 'react-hot-toast';

const ProductInfo = () => {
  const params = useParams();
  const { id } = params;

  const { getProduct, product, charging } = useProducts();
  
  useEffect(() => {
    getProduct(id);
  }, [])
  
  const { name } = product;

  document.title = `Itech | ${name}`;

  if(charging) return 'Cargando...'

  return (
    <main className='main-info-producto'>
      <HeaderInfoProduct product={product} />
      <Toaster />
      <Grid container spacing={2} marginTop="3px">
        <ProductInfoCard product={product} />
        <FeaturesAndOthers product={product} />
      </Grid>
    </main>
  )
}

export default ProductInfo