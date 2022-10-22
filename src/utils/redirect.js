import { ID_OP } from "../constants/constants";

const pesajePath = () =>{
  window.open("https://script.google.com/macros/s/AKfycbxeN1mwlhWjFf7AuMAZbAAtWCR4foCFKrt-SdVhJuNMllqQ1jYpZBTXrq0YGCdXT8I/exec"+`?id=${ ID_OP() }`,"_blank");
  window.open("https://docs.google.com/spreadsheets/d/1eTdWqVmHT1WtCQ1esZ5-2APP3BokrIqFTmoQghHVAqo/edit#gid=0","_blank");
  sessionStorage.clear();
};

const ppPath = () =>{
  window.open("https://script.google.com/macros/s/AKfycbx8Kczy5n8rAT97tSv2ZV4ulU4fL3DYbOX0zAXbpFQJl92eEa76fbssJduxDYWaRuUc/exec"+`?id=${ ID_OP() }`,"_blank");
  window.open("https://docs.google.com/spreadsheets/d/1GkHlu6h272ORLCump5BFrCxQKqkMv1Z72ZV5gureo3I/edit#gid=0","_blank");
  sessionStorage.clear();
};

const pickingPath = () =>{
  window.open("https://script.google.com/macros/s/AKfycbwnhLAxVSjRpvxr-SnlVFnmwSV5rk-XMxdTvCUSjWWsy4freemD7-735ZfvUq25WIRV/exec"+`?id=${ ID_OP() }`,"_blank");
  window.open("https://docs.google.com/spreadsheets/d/1WF6BubKPGjsogbFGCEfVHjgOGD_VQDqkFhY0Rwn9fVM/edit#gid=0","_blank");
  sessionStorage.clear();
};

export { pesajePath, ppPath, pickingPath };