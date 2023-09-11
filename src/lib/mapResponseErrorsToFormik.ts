import { AxiosError } from "axios";
import { FormikErrors, FormikHelpers } from "formik";
import { get, isEmpty } from "lodash";


export type ResponseErrorStatusCodes = "409" | "403" | "400";

const ERROR_RESPONSE_CODES: ResponseErrorStatusCodes[] = ["409", "403", "400"];


const mapResponseErrorsToFormik = <T>(
  error: AxiosError<any>,
  actions: FormikHelpers<T>,
  errorsDict = {} as any,
) => {
  if (error && error.response) {
    const { status, data } = error.response;
    if (
      ERROR_RESPONSE_CODES.includes(String(status) as ResponseErrorStatusCodes)
    ) {
      if (data?.code) {
        const message: FormikErrors<any> = get(
          errorsDict,
          data.code as string,
          false,
        );
        if (message) {
          actions.setErrors(message);
        } else if (data.messages) {
          const [fieldName, errorText] = data.messages
          actions.setFieldError(fieldName, errorText);
        }
      } else {
        if (!isEmpty(data)) {
          actions.setErrors(data);
        }
      }
    }
  }
};

export default mapResponseErrorsToFormik;
