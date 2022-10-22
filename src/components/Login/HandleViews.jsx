import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const HandleViews = ({ onChange, options }) => {
  return (<>
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        defaultValue="qrcode"
        onChange={ onChange }
      >
        { options.map(item=>(
          <FormControlLabel key={ item.id } value={ item.value } control={ <Radio /> } label={ item.label } />
        )) }
      </RadioGroup>
    </FormControl>
  </>)
};

export default HandleViews;