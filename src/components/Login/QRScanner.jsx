import { QrReader } from "react-qr-reader";
import { useLogin } from "../../context/LoginContext";
import { useEffect, useState } from "react";

const QRScanner = () => {

  const [scanStr, setScanStr] = useState("");

  const { loginFn } = useLogin();

  const destructure = (data) =>{
    let first = data.replaceAll("{",""),
      second = first.replaceAll("cedula",""),
      third = second.replaceAll(":",""),
      fourth = third.replaceAll("password",""),
      fifth = fourth.replaceAll("}","");

      const info = fifth.split(",").map(item=>item.replaceAll('"',""));

      const payload = {
        cedula:+info[0],
        password:info[1].trim()
      };

      loginFn(payload);

  };

  useEffect(() => {
    if(scanStr){
      destructure(scanStr);
    };
  }, [scanStr]);

  return (<>
    <QrReader
      onResult={ (result,error) =>{
      
        const text = result?.text;
        setScanStr(text);

      }}

      style={{ width: '100%' }}
    />  
  </>)
};

export default QRScanner;