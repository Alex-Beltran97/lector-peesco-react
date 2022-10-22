import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleViews from "../components/generals/HandleViews";
import { LOGGED, optionsViews } from "../constants/constants";
import { noLogged } from "../utils/authService";
import { pesajePath, pickingPath, ppPath } from "../utils/redirect";

const ViewPicker = () => {
  const [view, setView] = useState(optionsViews[0].value);

  const navigation = useNavigate();

  const handleChange = (e) =>{
    setView(e.target.value);
  };

  const openPage = () =>{
    switch(view){
      case "reception":
        pesajePath();
      break;
      case "preparate":
        ppPath();
      break;
      case "realize":
        pickingPath();
      break;
    };

    navigation("/login");
  };

  useEffect(() => {
    noLogged(navigation);
  }, [LOGGED()]);

  return (<>
    <Typography variant="h5">View Picker</Typography>
    <HandleViews
      onChange={ handleChange }
      options={ optionsViews }
    />
    <Button variant="contained" onClick={ openPage }>Redirect</Button>
  </>)
};

export default ViewPicker;