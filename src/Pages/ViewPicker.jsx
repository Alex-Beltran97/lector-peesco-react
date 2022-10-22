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
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        defaultValue="qrcode"
        onChange={ onChange }
      >
        <FormControlLabel value="qrcode" control={ <Radio /> } label=" Scanner QR " />
        <FormControlLabel value="form" control={ <Radio /> } label=" Formulario " />
      </RadioGroup>
    </FormControl>
  </>)
};

export default ViewPicker;