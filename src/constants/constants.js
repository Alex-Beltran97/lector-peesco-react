export const LOGGED = ()=>sessionStorage.getItem("user");

export const ID_OP = ()=>{
  const { idOperativo } = JSON.parse(LOGGED());
  return idOperativo
};

export const optionsLogin = [
  { id:1 ,value:"qrcode", label:"Scanner QR" },
  { id:2 ,value:"form", label:"Formulario" }
];

export const optionsViews = [
  { id:1, value:"reception", label:"Recepción de crudos" },
  { id:2, value:"preparate", label:"Preparar Picking" },
  { id:3, value:"realize", label:"Realizar Picking" }
];