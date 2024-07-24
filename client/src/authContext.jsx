import { createContext, useContext, useEffect, useState } from 'react';
import { checkAuth } from './backendCommunicationFunctions';

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user:null,
  setUser:()=>{}
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user,setUser]=useState(null)

  useEffect(() => {
    const isAuth = async () => {
      checkAuth(setAuth,setUser)
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth ,user}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;