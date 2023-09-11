import { axios } from "~/lib/axios";
import { AUTH_ENDPOINTS } from "../urls/api";


const logout = async () => {
  const response = await axios.post(AUTH_ENDPOINTS.AUTH_LOGOUT);
  return response.data;
};

export default logout;
