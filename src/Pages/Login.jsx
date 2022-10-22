import { Box, Typography } from "@mui/material";
import { useState } from "react";
import FormContainer from "../components/Login/FormLogin/FormContainer";
import HandleViews from "../components/Login/HandleViews";
import QRScanner from "../components/Login/QRScanner";

const Login = () => {
  const [view, setView] = useState("qrcode");

  const handleChange = (e) =>{
    setView(e.target.value);
  };

  return (<>
    <Typography variant="h4">Login</Typography>
    <Typography>Seleccione una opcion de inicio de sesion</Typography>
    <HandleViews 
      onChange={ handleChange }
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