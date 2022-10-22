import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FormContainer from "../components/Login/FormLogin/FormContainer";
import HandleViews from "../components/generals/HandleViews";
import QRScanner from "../components/Login/QRScanner";
import { optionsLogin } from "../constants/constants";

const Login = () => {
  const [view, setView] = useState(optionsLogin[0].value);

  const handleChange = (e) =>{
    setView(e.target.value);
  };

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
  </>)
};

export default Login;