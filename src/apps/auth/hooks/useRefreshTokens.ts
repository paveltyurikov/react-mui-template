import { useMutation } from "react-query";
import refreshTokens from "../api/refreshTokens";
import { Token } from "../context";


export const KEY = "USER/REFRESH_TOKENS";

const useRefreshTokens = (options = {}) => {
  return useMutation(
    KEY,
    (refreshToken: Token["refresh"]) =>
      refreshTokens({ refresh: refreshToken }),
    {
      ...options,
    }
  );
};

export default useRefreshTokens;
