import React from "react";
import { TextareaAutosize } from "@mui/material";
import { Field } from "formik";
import { TextField } from "formik-mui";
import { FormCol, FormContainer, FormRow } from "components/Form/Layout";


const RenderFields = () => {
  return (
    <FormContainer>
      <FormRow>
        <FormCol xs>
          <Field label="title" name="title" component={TextField} fullWidth />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol xs>
          <Field
            label="content"
            name="content"
            component={TextField}
            InputProps={{ inputComponent: TextareaAutosize, minRows:10 }}
            minRows={10}
            fullWidth
          />
        </FormCol>
      </FormRow>
    </FormContainer>
  );
};

export default RenderFields;
