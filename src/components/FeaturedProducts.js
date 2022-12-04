import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Products from './Products';
import useProducts from '../hooks/useProducts';

const FeaturedProducts = () => {

  const { products } = useProducts();

  let featuredProducts = [];
  
  products.forEach(product => {
    if(product.inStock > 7) {
      featuredProducts.push(product)
    }
  });

  featuredProducts = featuredProducts.slice(0, 4);

  return (
    <Stack>
        <Stack
        padding="70px 32px"
        margin="0 68px" 
        alignItems="center"
        fontSize="20px">
          <h2>PRODUCTOS DESTACADOS</h2>
          <Grid container spacing={2} margin='20px 0'>
           {featuredProducts.map(product => (
              <Grid item xs={12} sm={6} md={3} width="100%" key={product.name}>
                <Products 
                  key={product._id}
                  product={product}
                />
              </Grid>
              ))
            }


            {/* <Grid item xs={12} sm={6} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Product />
            </Grid> */}
          </Grid>
          <Stack margin="40px 0 0 ">
            <Button variant="outlined" color="warning" size="large" href="/products">
              VER TODO
            </Button>
          </Stack>
        </Stack>
    </Stack>
  )
}

export default FeaturedProducts