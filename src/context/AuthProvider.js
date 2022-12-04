import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/clientAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({});
  const [charging, setCharging] = useState(true);

  const [alert, setAlert] = useState({});

  const showAlert = alert => {
    setAlert(alert);

    setTimeout(() => {
        setAlert({});
    }, 5000)
  }

  const signUpAdmin = async infoAdmin => {
    try {
        const token = localStorage.getItem('token');
        if(!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await clientAxios.post('/users/profile', infoAdmin, config);
        
        setAlert({
            msg: 'Admin creado correctamente, recuerde confirmar su cuenta',
            error: false
        })

        setTimeout(() => {
          setAlert({});
      }, 5000)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem('token');
      if(!token) {
        setCharging(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }

      try {
        const { data } = await clientAxios('/users/profile', config);
        setAuth(data);
      } catch (error) {
        setAuth({})
      } 

      setCharging(false);

    }
    authenticateUser();
  }, [])

  const signOffAuth = () => {
    setAuth({});
  }

  return (
    <AuthContext.Provider
        value={{
          auth,  
          setAuth,
          charging,
          showAlert,
          alert,
          signUpAdmin,
          signOffAuth
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider };
export default AuthContext;