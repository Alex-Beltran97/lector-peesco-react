import { Box } from "@mui/material";
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
    <h1>Login</h1>
    <p>Seleccione una opcion de inicio de sesion</p>
    <HandleViews 
      onChange={ handleChange }
    />
    <Box style={{ width:"32rem", height:"32rem" }}>
    { view==="qrcode"?
      <QRScanner />
      :
      <FormContainer />
    }
    </Box>
  </>)
};

export default Login;