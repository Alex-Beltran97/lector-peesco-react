import { LOGGED } from "../constants/constants";

export const noLogged = (navigation)=>{ if(LOGGED()===null) navigation("/login") };

export const loggedFn = (navigation, { data })=>{
  sessionStorage.setItem("user",JSON.stringify(data));

  setTimeout(()=>{
    navigation("/view-picker");
  },3000);
};

