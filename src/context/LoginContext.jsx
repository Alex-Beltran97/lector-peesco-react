import { createContext, useContext } from "react";
import { login } from "../action/login.action";

const LoginContext = createContext();

export const useLogin = () =>{
  const context = useContext(LoginContext);
  if(context) return context;
};

export const LoginProvider = ({ children }) =>{
  
  const loginFn = async (payload)=>{
    try{
      const data = await login(payload);
      console.log(data);
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

