import { CircularProgress, Modal, Paper, Stack, Typography, Button } from "@mui/material";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { useLogin } from "../../context/LoginContext";

const AlertModal = ({ open, error }) => (
  <Modal
    open={ open }
    onClose={ ()=>{} }
  >
    <Paper style={ style }>
      <Stack alignItems="center" spacing={ 2 } >
        <Typography variant="h5" textAlign="center">Alerta de Inicio de Sesion</Typography>
        { error ?
          <ErrorComponent msg={ error } />
          :
          <SuccessComponent />
        }          
      </Stack>
    </Paper>
  </Modal>
);

const SuccessComponent = () =>(<>
  <IoCheckmarkCircleOutline style={{ fontSize:"8rem" }} />
  <Typography variant="subtitle1" textAlign="center">Inicio de sesion exitoso! Por favor espere un momento.</Typography>
  <CircularProgress />
</>)

const ErrorComponent = ({ msg }) =>{

  const { handleOpen } = useLogin();

  return (<>
    <IoCloseCircleOutline style={{ fontSize:"8rem" }} />
    <Typography variant="subtitle1" textAlign="center">{ msg }</Typography>
    <Button variant="contained" onClick={ handleOpen }>Cerrar</Button>
  </>)
};

const style = { 
  position:"absolute",
  width:"36%",
  top:"16%",
  left:"32%",
  padding:"1.5rem"
};

export default AlertModal