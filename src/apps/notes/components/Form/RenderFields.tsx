import { InputLabel, Stack } from "@mui/material";
import { Field } from "formik";
import { Switch, TextField } from "formik-mui";
import useTranslation from "~/apps/notes/hooks/useTranslation";
import { FormCol, FormContainer, FormRow } from "~/components/Form/Layout";
import { getFormFieldLabelPath } from "~/lib/i18nPath";
import { POST_CONTENT_FIELD_CONFIG } from "./config";

const RenderFields = () => {
  const { t } = useTranslation();
  return (
    <FormContainer spacing={3}>
      <FormRow>
        <FormCol size={9}>
          <Field
            label={t(getFormFieldLabelPath("title"))}
            name="title"
            component={TextField}
            fullWidth
          />
        </FormCol>
        <FormCol size={3}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <Field name="created" type="checkbox" component={Switch} />
            <InputLabel>{t(getFormFieldLabelPath("published"))}</InputLabel>
          </Stack>
        </FormCol>
      </FormRow>
      <FormCol sx={POST_CONTENT_FIELD_CONFIG.colSx}>
        <Field
          placeholder="Type your note here..."
          id="content"
          name="content"
          component={TextField}
          slotProps={{ htmlInput: POST_CONTENT_FIELD_CONFIG.InputProps }}
          fullWidth
        />
      </FormCol>
    </FormContainer>
  );
};

export default RenderFields;
