import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FormContainer from "../components/Login/FormLogin/FormContainer";
import HandleViews from "../components/generals/HandleViews";
import QRScanner from "../components/Login/QRScanner";
import { optionsLogin } from "../constants/constants";
import AlertModal from "../components/generals/AlertModal";
import { useLogin } from "../context/LoginContext";

const widthScanner = (md, sm, xs, xxs) =>{
  if(md) return "32rem";
  if(sm) return "24rem";
  if(xs) return "16rem";
  if(xxs) return "8rem";

  return "40rem"
}

const widthPaper = (sm) =>{
  if(sm) return "95%";
  

  return "56%"
}

const Login = () => {
  const [view, setView] = useState(optionsLogin[0].value);

  const { open, error, lg, md, sm, xs, xxs } = useLogin();

  

  const handleChange = (e) =>{
    setView(e.target.value);
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (<>
    <center>
      <Paper style={{ width:!lg?"96%":"56%", maxHeight:"40rem", borderRadius:"2rem", overflow:"hidden", border:"2px solid #f6b100" }}>
        <Typography variant="h4" bgcolor="#f6b100" padding={2} color="#fff">Login</Typography>
        <Typography>Seleccione una opcion de inicio de sesion</Typography>
        <HandleViews 
          onChange={ handleChange }
          options={ optionsLogin }
        />
        <Box style={{ width:widthScanner(md, sm, xs, xxs) }}>
        { view === "qrcode" ?
          <QRScanner />
          :
          <FormContainer />
        }
        </Box>
        <AlertModal
          left={ !sm?"8%":"32%" }
          width={ !sm?"72%":"32%" }
          open={ open }
          error={ error }
        />
      </Paper>
    </center>
  </>)
};

export default Login;