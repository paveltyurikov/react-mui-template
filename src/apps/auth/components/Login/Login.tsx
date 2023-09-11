import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import { useAuthContext } from "../../context";
import { LOGIN_DIALOG } from "../../text/dialog";
import { ILogin } from "../../types";
import {
  LOGIN_INITIAL_VALUES,
  LOGIN_VALIDATION_SCHEMA,
  processResponseErrors,
} from "../Form/config";
import RenderLoginForm from "../Form/RenderLoginForm";


const LoginFormContainer = () => {
  const { obtainTokens } = useAuthContext();
  const handleLogin = React.useCallback(
    (formData: ILogin, actions: FormikHelpers<ILogin>) => {
      obtainTokens(formData, {
        onSuccess: () => {
          actions.setSubmitting(false);
        },
        onError: (error: any) => {
          processResponseErrors(error, actions);
          actions.setSubmitting(false);
        },
      });
    },
    [obtainTokens],
  );

  return (
    <Formik
      onSubmit={handleLogin}
      initialValues={LOGIN_INITIAL_VALUES}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      <Dialog open={true}>
        <DialogTitle>{LOGIN_DIALOG.title}</DialogTitle>
        <DialogContent>
          <RenderLoginForm />
        </DialogContent>
      </Dialog>
    </Formik>
  );
};

export default LoginFormContainer;
