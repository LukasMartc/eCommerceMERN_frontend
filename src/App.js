import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import Signup from './views/Signup';
import Signin from './views/Signin';
import ForgetPassword from './views/ForgetPassword';
import NewPassword from './views/NewPassword';
import ConfirmAccount from './views/ConfirmAccount';
import Profile from './views/Profile';
import ProductInfo from './views/ProductInfo';
import MyAccount from './views/MyAccount';
import RegisterAdmin from './views/RegisterAdmin';
import { AuthProvider } from './context/AuthProvider';
import { ProductsProvider } from './context/ProductsProvider';
import GetProducts from './views/GetProducts';
import EditProduct from './views/EditProduct';
import CreateProduct from './views/CreateProduct';

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/forget-password/:token' element={<NewPassword />} />
          <Route path='/confirmed/:id' element={<ConfirmAccount />} />
          <Route path='/product/:id' element={<ProductInfo />} />
          <Route path='/products' element={<GetProducts />} />
          <Route path='/profile' element={<Profile />}>
            <Route index element={<MyAccount />} />
            <Route path='register-admin' element={<RegisterAdmin />} />
            <Route path='create-product' element={<CreateProduct />} />
            <Route path='edit/:id' element={<EditProduct />}  />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
