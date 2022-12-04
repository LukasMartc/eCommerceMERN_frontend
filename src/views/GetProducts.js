import { Grid } from '@mui/material/';
import useProducts from "../hooks/useProducts";
import Products from '../components/Products';
import { useEffect } from 'react';

const GetProducts = () => {

  const { products } = useProducts();

  useEffect(() => {
    document.title = 'Itech | Catálogo';
  },[])

  return (
    <div className='main-products'>
      <h2>PRODUCTOS</h2>
      {products.length ? (
        <Grid container rowSpacing={4} columnSpacing={2} margin="20px 0">
          {products.map(product => (
            <Grid item xs={12} sm={6} md={3} width="100%" key={product.name}>
              <Products 
                key={product._id}
                product={product}
              />
            </Grid>
            ))
          }
        </Grid>
      ) : (
        <p>No hay ningún producto en Stock.</p>
      )}
    </div>
  )
}

export default GetProducts