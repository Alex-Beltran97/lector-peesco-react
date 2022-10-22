import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FormContainer from "../components/Login/FormLogin/FormContainer";
import HandleViews from "../components/generals/HandleViews";
import QRScanner from "../components/Login/QRScanner";
import { optionsLogin } from "../constants/constants";
import AlertModal from "../components/generals/AlertModal";
import { useLogin } from "../context/LoginContext";

const Login = () => {
  const [view, setView] = useState(optionsLogin[0].value);

  const { open, error } = useLogin();

  const handleChange = (e) =>{
    setView(e.target.value);
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (<>
    <Typography variant="h4">Login</Typography>
    <Typography>Seleccione una opcion de inicio de sesion</Typography>
    <HandleViews 
      onChange={ handleChange }
      options={ optionsLogin }
    />
    <Box style={{ width:"32rem", height:"32rem" }}>
    { view === "qrcode" ?
      <QRScanner />
      :
      <FormContainer />
    }
    </Box>
    <AlertModal
      open={ open }
      error={ error }
    />
  </>)
};

export default Login;