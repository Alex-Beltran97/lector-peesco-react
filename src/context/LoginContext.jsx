import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../action/login.action";
import { loggedFn } from "../utils/authService";

const LoginContext = createContext();

export const useLogin = () =>{
  const context = useContext(LoginContext);
  if(context) return context;
};

export const LoginProvider = ({ children }) =>{
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = ()=>{
    setError("");
    setOpen(e=>!e);
  };

  const navigation = useNavigate();

  const loginFn = async (payload)=>{
    try{
      handleOpen();
      const data = await login(payload);

      loggedFn(navigation, data, handleOpen);
    }catch(error){
      setError("Usuario y/o contraseña incorrectos");
      console.log(error);
    };
  };



  return(<>
    <LoginContext.Provider value={{
      loginFn,
      error,
      open,
      handleOpen
    }}>
      { children }
    </LoginContext.Provider>
  </>);
};

