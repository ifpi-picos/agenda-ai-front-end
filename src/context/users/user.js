import { createContext, useContext, useState } from "react";

const AuthUserContext = createContext({
    nomeUsuario: '',
    email: '',
    password: '',
    handleNomeUsuarioChange: () => {},
    handleEmailChange: () => {},
    handlePasswordChange: () => {},
  });
  
  const AuthUserProvider = ({ children }) => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNomeUsuarioChange = (nomeUsuario) => {
      setNomeUsuario(nomeUsuario);
    };
  
    const handleEmailChange = (email) => {
      setEmail(email);
    };
  
    const handlePasswordChange = (password) => {
      setPassword(password);
    };
  
    return (
      <AuthUserContext.Provider value={{
        nomeUsuario,
        email,
        password,
        handleNomeUsuarioChange,
        handleEmailChange,
        handlePasswordChange,
      }}>
        {children}
      </AuthUserContext.Provider>
    );
  };
  
  const useAuthUserContext = () => useContext(AuthUserContext);
  
  export { AuthUserContext, AuthUserProvider, useAuthUserContext };
  