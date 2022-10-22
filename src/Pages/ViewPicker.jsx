import { Button, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleViews from "../components/generals/HandleViews";
import { LOGGED, optionsViews } from "../constants/constants";
import { noLogged } from "../utils/authService";
import { pesajePath, pickingPath, ppPath } from "../utils/redirect";
import { IoExitOutline } from "react-icons/io5";
import { useLogin } from "../context/LoginContext";

const ViewPicker = () => {
  const [view, setView] = useState(optionsViews[0].value);

  const navigation = useNavigate();

  const handleChange = (e) =>{
    setView(e.target.value);
  };

  const { sm } = useLogin();

  const openPage = () =>{
    switch(view){
      case "reception":
        pesajePath();
      break;
      case "preparate":
        ppPath();
      break;
      case "realize":
        pickingPath();
      break;
    };

    navigation("/login");
  };

  const logout = () =>{
    sessionStorage.clear();
    navigation("/login");
  };


  useEffect(() => {
    noLogged(navigation);
  }, [LOGGED()]);

  return (<>
    <Tooltip title="Cerrar Sesion" style={{ position:"absolute", top:"1rem", right:"4rem" }}>
      <IconButton onClick={ logout }>
        <IoExitOutline style={{ fontSize:"3rem", color:"#34809f" }} />
      </IconButton>
    </Tooltip>
    <center>
      <Paper style={{ width:sm?"56%":"96%", maxHeight:"40rem", borderRadius:"2rem", overflow:"hidden", border:"2px solid #f6b100", marginTop:"8rem" }}>
        <Stack justifyContent="space-between" spacing={ 4 }>
          <Typography variant="h5" textAlign="center" bgcolor="#f6b100" paddingY={ 2 } color="#fff">View Picker</Typography>
          <center>
            <HandleViews
              onChange={ handleChange }
              options={ optionsViews }
            />
          </center>
          <Button variant="contained" onClick={ openPage } style={{ alignSelf:"center", backgroundColor:"#34809f" }}>Redirect</Button>
        </Stack>
      </Paper>
    </center>
  </>)
};

export default ViewPicker;