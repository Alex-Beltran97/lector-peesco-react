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
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  </>)
};

export default ViewPicker;