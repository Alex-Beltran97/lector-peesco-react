import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGGED } from "../constants/constants";
import { noLogged } from "../utils/authService";

const ViewPicker = () => {
  const navigation = useNavigate();

  useEffect(() => {
    noLogged(navigation);
  }, [LOGGED()]);

  return (<>
    <Typography variant="h5">View Picker</Typography>
    <FormGroup onChange={}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Recepción de crudos" />
      <FormControlLabel control={<Checkbox />} label="Preparar Picking" />
      <FormControlLabel control={<Checkbox />} label="Realizar Picking" />
    </FormGroup>
  </>)
};

export default ViewPicker;