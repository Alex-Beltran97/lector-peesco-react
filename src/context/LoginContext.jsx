import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../action/login.action";
import { loggedFn } from "../utils/authService";

const LoginContext = createContext();

export const useLogin = () =>{
  const context = useContext(LoginContext);
  if(context) return context;
};

export const LoginProvider = ({ children }) =>{

  const navigation = useNavigate();

  const loginFn = async (payload)=>{
    try{
      const data = await login(payload);

      if(data.status!==200){
        alert("Usuario y/0 contraseña incorrectos");
        return
      };

      loggedFn(navigation, data);
    }catch(error){
      console.log(error);
    };
  };



  return(<>
    <LoginContext.Provider value={{
      loginFn
    }}>
      { children }
    </LoginContext.Provider>
  </>);
};

