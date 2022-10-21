import { QrReader } from "react-qr-reader";
import { useLogin } from "../../context/LoginContext";
import { preparateString } from "../../utils/PreparateString";

const QRScanner = () => {

  const { loginFn } = useLogin();

  return (<>
    <QrReader
      onResult={ (result,error) =>{
      
      if (!!result) {
        const { text } = result;
        preparateString(text);
      };

      }}

      style={{ width: '100%' }}
    />  
  </>)
};

export default QRScanner;