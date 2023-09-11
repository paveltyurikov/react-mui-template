import React from "react";
import LockOpenSharpIcon from "@mui/icons-material/LockOpenSharp";
import { Field, Form } from "formik";
import { TextField } from "formik-mui";
import { FormCol, FormContainer, FormRow } from "~/components/Form/Layout";
import SubmitButton from "~/components/Form/SubmitButton";
import { LOGIN_DIALOG } from "../../text/dialog";


export const RenderLoginForm = () => {
  return (
    <Form>
      <FormContainer>
        <FormRow>
          <FormCol xs>
            <Field
              data-testid="form-field-obtainTokens"
              label="email"
              name="email"
              component={TextField}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol xs>
            <Field
              data-testid="form-field-password"
              label="password"
              name="password"
              type="password"
              required
              component={TextField}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol xs>
            <SubmitButton startIcon={<LockOpenSharpIcon />}>
              {LOGIN_DIALOG.buttons.submit}
            </SubmitButton>
          </FormCol>
        </FormRow>
      </FormContainer>
    </Form>
  );
};

export default RenderLoginForm;
