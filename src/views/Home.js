import { Fragment, useEffect } from "react"
import Header from "../components/Header"
import FeaturedProducts from "../components/FeaturedProducts"
import Newsletter from "../components/Newsletter"


const Home = () => {

  useEffect(() => {
    document.title = 'Itech | eCommerce de productos tecnológicos';
  },[])

  return (
    <Fragment>
      <Header />
      <FeaturedProducts />
      <Newsletter />
    </Fragment>
  )
}

export default Home