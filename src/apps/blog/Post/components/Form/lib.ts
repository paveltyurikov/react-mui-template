import { FormikHelpers } from "formik";
import { IPost, IPostCreate } from "~/apps/blog/Post/types";


export const processResponseErrors = (
  errors: any,
  actions: FormikHelpers<IPostCreate> | FormikHelpers<IPost>
) => actions.setErrors(errors?.response?.data?.errors);
