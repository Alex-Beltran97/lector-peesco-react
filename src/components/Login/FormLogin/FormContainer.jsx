import { Button, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import { login } from "../../../action/login.action";
import { useLogin } from "../../../context/LoginContext";
import InputFields from "./InputFields";

const FormContainer = () => {

  const { loginFn } = useLogin();

  return (<>
    <Formik
        initialValues={{
          cedula:0,
          password:""
        }}

        onSubmit={(values)=>{
          loginFn(values);
        }}
      >
        { ()=>(
          <Form>
            <Stack spacing={ 2 }>
              <InputFields
                type="number"
                label="Cedula"
                name='cedula'
              />
              <InputFields 
                type="password"
                label="Password"
                name='password'
              />
              <Button variant="contained" type="submit">Send</Button>
            </Stack>
          </Form>
        ) }
      </Formik>
  </>)
};

export default FormContainer;