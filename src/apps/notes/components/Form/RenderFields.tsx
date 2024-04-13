import React from "react";
import { Field } from "formik";
import { TextField } from "formik-mui";
import { FormCol, FormContainer, FormRow } from "~/components/Form/Layout";
import { POST_CONTENT_FIELD_CONFIG } from "./config";


const RenderFields = () => {
  return (
    <FormContainer>
      <FormRow>
        <FormCol xs>
          <Field label="title" name="title" component={TextField} fullWidth />
        </FormCol>
      </FormRow>
      <FormRow>
        <FormCol xs={6}>
          <Field
            label="published"
            name="created"
            component={TextField}
            fullWidth
            disabled
          />
        </FormCol>
      </FormRow>
      <FormCol xs sx={POST_CONTENT_FIELD_CONFIG.colSx}>
        <Field
          placeholder="Type your post here..."
          id="content"
          name="content"
          component={TextField}
          InputProps={POST_CONTENT_FIELD_CONFIG.InputProps}
          fullWidth
        />
      </FormCol>
    </FormContainer>
  );
};

export default RenderFields;
