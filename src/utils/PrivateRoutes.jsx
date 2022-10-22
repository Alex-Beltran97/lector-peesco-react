import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LOGGED } from "../constants/constants";
import { noLogged } from "./authService";

const PrivateRoutes = () => {
  const navigation = useNavigate();  
  
  useEffect(() => {
    noLogged(navigation);
  }, [LOGGED()]);

  return (<Outlet />)
};

export default PrivateRoutes;