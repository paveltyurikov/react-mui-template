import { axios } from "~/lib/axios";
import { AUTH_ENDPOINTS } from "../urls/api";


type RefreshTokenRequestPayload = {
  refresh: string;
};

const refreshTokens = async (data: RefreshTokenRequestPayload) => {
  const response = await axios.post(AUTH_ENDPOINTS.TOKENS_REFRESH, data);
  return response.data;
};

export default refreshTokens;
