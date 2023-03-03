import { AxiosError } from "axios";
import { get } from "lodash";
import { ERRORS_BY_HTTP_CODE } from "~/constants/errorMessagesByHttpCodes";


const UNKNOWN_ERROR = "Unknown error";

const getNotifyErrorMessage = (
  responseError: AxiosError,
  provided: string,
  overrides: any = {}
): string => {
  if (provided) return provided;

  if (responseError?.response?.status) {
    return get(
      { ...ERRORS_BY_HTTP_CODE, ...overrides },
      responseError?.response?.status,
      UNKNOWN_ERROR
    );
  }
  return UNKNOWN_ERROR;
};

export default getNotifyErrorMessage;
