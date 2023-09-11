import { AxiosError } from "axios";
import { get } from "lodash";


export const isInvalidTokenError = (error: AxiosError) => {
  return get(error, "response.data.code", null) === "token_not_valid";
};

export const AUTH_LOCAL_STORAGE_NAME = "__REACT_DEMO_APP_AUTH_STORAGE_KEY";