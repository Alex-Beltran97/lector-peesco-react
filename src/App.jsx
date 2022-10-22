import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import ViewPicker from "./Pages/ViewPicker";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {

  return (<>
    <Container style={{ marginTop:"2rem" }}>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <PrivateRoutes /> }>
          <Route path="view-picker" element={ <ViewPicker /> } />        
        </Route>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </Container>
  </>)
};

export default App;