import { FormikHelpers } from "formik";
import * as Yup from "yup";
import mapResponseErrorsToForm from "~/lib/mapResponseErrorsToFormik";
import { ILogin } from "../../types";


export const LOGIN_INITIAL_VALUES: ILogin = {
  email: "",
  password: "",
} as const;

export const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().required("Enter email").email("Enter valid email"),
  password: Yup.string().required("Enter password"),
});

export const ERROR_MESSAGES_BY_CODE = {};

export const processResponseErrors = <T>(
  error: any,
  actions: FormikHelpers<T>
) => {
  mapResponseErrorsToForm(error, actions, ERROR_MESSAGES_BY_CODE);
};
