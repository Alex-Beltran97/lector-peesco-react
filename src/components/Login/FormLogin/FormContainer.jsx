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
            <Stack spacing={ 2 } marginTop={ 8 } paddingBottom={ 4 } paddingX={ 2 }>
              <InputFields
                type="number"
                label="Cedula"
                name='cedula'
              />
              <InputFields 
                type="password"
                label="Contraseña"
                name='password'
              />
              <Button variant="contained" type="submit" style={{ backgroundColor:"#34809f" }}>Iniciar Sesion</Button>
            </Stack>
          </Form>
        ) }
      </Formik>
  </>)
};

export default FormContainer;