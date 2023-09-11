import { useMutation } from "react-query";
import obtainTokens from "../api/obtainTokens";
import { ILogin } from "../types";


export const KEY = "USER/OBTAIN_TOKENS";

const useObtainTokens = (options = {}) => {
  return useMutation(KEY, (data: ILogin) => obtainTokens(data), {
    ...options,
  });
};

export default useObtainTokens;
