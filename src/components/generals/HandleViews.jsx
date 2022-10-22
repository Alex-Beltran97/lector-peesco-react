import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const HandleViews = ({ onChange, options }) => {
  return (<>
    <FormControl>
      <RadioGroup
        defaultValue={ options[0].value }
        onChange={ onChange }
      >
        { options.map(item=>(
          <FormControlLabel 
            key={ item.id }
            value={ item.value }
            control={ <Radio style={{ color:"#f6b100" }} /> }
            label={ item.label } 
          />
        )) }
      </RadioGroup>
    </FormControl>
  </>)
};

export default HandleViews;