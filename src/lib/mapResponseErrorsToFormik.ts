import { FormikErrors, FormikHelpers } from "formik";
import isEmpty from "lodash/isEmpty";
import { ResponseError } from "~/types";

const ERROR_RESPONSE_CODES = ["409", "403", "400"];

type ResponseErrorBase<DTO> = {
  code: string;
  messages: Record<keyof DTO, string>;
};

const mapErrorsAsObject = <DTO>(
  messages: Record<keyof DTO, string>,
  setFieldError: FormikHelpers<DTO>["setFieldError"],
) => {
  for (const key in messages) {
    setFieldError(key, messages[key]);
  }
};

const mapResponseErrorsToFormik = <DTO>(
  error: ResponseError<ResponseErrorBase<DTO>>,
  actions: FormikHelpers<DTO>,
  errorsDict?: any,
) => {
  if (error && error.response) {
    const { status, data } = error.response;
    if (ERROR_RESPONSE_CODES.includes(String(status))) {
      if (data?.code && errorsDict) {
        const message = errorsDict[data.code];
        if (message) {
          actions.setErrors(message);
        } else if (data.messages) {
          mapErrorsAsObject(data.messages, actions.setFieldError);
        }
      } else {
        if (!isEmpty(data)) {
          actions.setErrors(data as FormikErrors<DTO>);
        }
      }
    }
  }
};

export default mapResponseErrorsToFormik;
