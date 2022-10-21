import http_service from "../Service/http_service";

const path = "/auth/login";

export const login = async (data)=>
  await http_service.post(path,data);

