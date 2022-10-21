import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";

const HandleViews = ({ onChange }) => {
  return (<>
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        defaultValue="qrcode"
        onChange={ onChange }
      >
        <FormControlLabel value="qrcode" control={ <Radio /> } label="Scanner QR " />
        <FormControlLabel value="form" control={ <Radio /> } label="Formulario" />
      </RadioGroup>
    </FormControl>
  </>)
};

export default HandleViews;