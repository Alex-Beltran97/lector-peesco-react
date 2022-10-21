import axios from 'axios';

const instance = () =>axios.create({
  baseURL:process.env.REACT_APP_SERVER
});

const http_service = {
  get:(path)=>instance().get(path),
  post:(path,data)=>instance().post(path,data)
};

export default http_service;



