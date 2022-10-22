import { LOGGED } from "../constants/constants";

export const noLogged = (navigation)=>{ if(LOGGED()===null) navigation("/login") };

export const loggedFn = (navigation, { data }, handleOpen)=>{
  sessionStorage.setItem("user",JSON.stringify(data));

  setTimeout(()=>{
    navigation("/view-picker");
    handleOpen();
  },3000);
};

