import { axios } from "~/lib/axios";
import { ILogin } from "../types";
import { AUTH_ENDPOINTS } from "../urls/api";


const obtainTokens = async (data: ILogin) => {
  const response = await axios.post(AUTH_ENDPOINTS.TOKENS_OBTAIN, data);
  return response.data;
};

export default obtainTokens;
