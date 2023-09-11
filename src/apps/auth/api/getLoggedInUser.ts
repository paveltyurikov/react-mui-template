import { axios } from "~/lib/axios";
import { AUTH_ENDPOINTS } from "../urls/api";


const getLoggedInUser = async () => {
  const response = await axios.get(AUTH_ENDPOINTS.USER_LOGGED_IN);
  return response.data;
};

export default getLoggedInUser;
