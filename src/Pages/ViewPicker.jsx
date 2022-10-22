import { Typography } from "@mui/material";
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
    
  </>)
};

export default ViewPicker;