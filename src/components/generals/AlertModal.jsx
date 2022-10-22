import { CircularProgress, Modal, Paper, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { useLogin } from "../../context/LoginContext";

const AlertModal = ({ open, error, width, left }) => {
  
  const smh = useMediaQuery('(min-height:490px)');

  return (
    <Modal
      open={ open }
      onClose={ ()=>{} }
    >
      <Paper style={{ ...style, width:width, left:left, }}>
        <Stack alignItems="center" spacing={ 2 } >
          <Typography variant={smh?"h5":"subtitle2"} textAlign="center">Alerta de Inicio de Sesion</Typography>
          { error ?
            <ErrorComponent msg={ error } />
            :
            <SuccessComponent />
          }          
        </Stack>
      </Paper>
    </Modal>
  );
};

const SuccessComponent = () =>{

  const smh = useMediaQuery('(min-height:490px)');

  return (<>
    <IoCheckmarkCircleOutline style={{ fontSize:smh?"8rem":"4rem", color:"#f6b100" }} />
    <Typography variant="subtitle1" textAlign="center">Inicio de sesion exitoso! Por favor espere un momento.</Typography>
    <CircularProgress style={{ color:"#f6b100" }} />
  </>)
};

const ErrorComponent = ({ msg }) =>{

  const { handleOpen } = useLogin();

  const smh = useMediaQuery('(min-height:490px)');

  return (<>
    <IoCloseCircleOutline style={{ fontSize:smh?"8rem":"4rem", color:"#f6b100" }} />
    <Typography variant="subtitle1" textAlign="center" color="red">{ msg }</Typography>
    <Button variant="contained" onClick={ handleOpen } style={{ backgroundColor:"#34809f" }}>Cerrar</Button>
  </>)
};

const style = { 
  position:"absolute",
  top:"16%",
  padding:"1.5rem"
};

export default AlertModal