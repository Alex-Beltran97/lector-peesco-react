import { InputLabel, Stack } from "@mui/material";
import { Field } from "formik";

const InputFields = ({ type, name, label }) => {
  return (<>
    <Stack spacing={ 1 }>
      <InputLabel htmlFor={ name }>{ label }:</InputLabel>
      <Field type={ type } name={ name } />
    </Stack>    
  </>)
};

export default InputFields;