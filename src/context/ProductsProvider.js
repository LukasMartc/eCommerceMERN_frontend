import { useState, useEffect, createContext } from "react";
import clientAxios from '../config/clientAxios';
import { useNavigate } from 'react-router-dom';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [alert, setAlert] = useState({});
    const [charging, setCharging] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await clientAxios('/products');
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])
    

    const showAlert = alert => {
        setAlert(alert);

        setTimeout(() => {
            setAlert({});
        }, 5000)
    }

    const submitProduct = async product => {
        if(product.id) {
            editProduct(product);
        } else {
            newProduct(product);
        }
    }

    const editProduct = async product => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios.put(`/products/${product.id}`, product, config);
        
        } catch (error) {
            console.log(error)
        }
    }

    const newProduct = async product => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios.post('/products', product, config);

            setProducts([...products, data]);

            setAlert({
                msg: 'Producto creado correctamente',
                error: false
            })

            setTimeout(() => {
                setAlert({});
                navigate('/products');
                window.location.reload();
            }, 3000)
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const getProduct = async id => {
        setCharging(true);
        try {
            const { data } = await clientAxios(`/products/${id}`);
            setProduct(data);
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
        setCharging(false);
    }

    const deleteProduct = async id => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientAxios.delete(`/products/${id}`, config);
            
            const updateProducts = products.filter(productState => productState._id !== id);
            setProducts(updateProducts);

            setAlert({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlert({});
                navigate('/products')
            }, 3000)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                showAlert,
                alert,
                submitProduct,
                getProduct,
                product,
                deleteProduct,
                charging
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsProvider };
export default ProductsContext;