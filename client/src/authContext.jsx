import { createContext, useContext, useEffect, useState } from 'react';
import { checkAuth } from './backendCommunicationFunctions';

const AuthContext = createContext({
  auth: null,
  setAuth: () => {}
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
 

  useEffect(() => {
    const isAuth = async () => {
      checkAuth(setAuth)
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;