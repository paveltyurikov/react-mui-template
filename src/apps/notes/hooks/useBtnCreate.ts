import { useCallback, useMemo } from "react";
import { FormikHelpers } from "formik";
import { useNotify, useVisibility } from "~/hooks";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useCreateNote } from "~/react-api/notes";
import { NoteCreateDto } from "~/types/notes";
import { getValidationSchema, INITIAL_VALUES } from "../config/forms";
import { getCreateDialog, getCreateNotify } from "../config/text";
import { useTranslation } from "../hooks/index";

export type useBtnCreateNoteProps = {
  processResponseErrors?: (errors: any, actions: any) => void;
  refetchDeps?: () => void;
};

const useBtnCreateNote = ({
  processResponseErrors,
  refetchDeps,
}: useBtnCreateNoteProps) => {
  const { t } = useTranslation();
  const { showErrorNotify, showSuccessNotify } = useNotify();
  const visibility = useVisibility();

  const CREATE_DIALOG = useMemo(() => getCreateDialog(t), [t]);

  const CREATE_NOTIFY = useMemo(() => getCreateNotify(t), [t]);

  const VALIDATION_SCHEMA = useMemo(() => getValidationSchema(t), [t]);

  const { mutate: createNote } = useCreateNote({
    onSuccess: () => {
      showSuccessNotify({
        message: CREATE_NOTIFY.success,
        "data-testid": "create-note",
      });
      if (refetchDeps) refetchDeps();
      visibility.hide();
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, CREATE_NOTIFY.error),
        "data-testid": "create-note",
      });
    },
  });

  return {
    t,
    visibility,
    DIALOG_PROPS: CREATE_DIALOG,
    FORMIK_PROPS: {
      initialValues: INITIAL_VALUES,
      validationNote: VALIDATION_SCHEMA,
      onSubmit: useCallback(
        (formData: NoteCreateDto, actions: FormikHelpers<NoteCreateDto>) => {
          createNote(formData, {
            onSuccess: () => {
              actions.resetForm();
              actions.setSubmitting(false);
            },
            onError: (error: any) => {
              if (processResponseErrors) {
                processResponseErrors(error, actions);
              }
              actions.setSubmitting(false);
            },
          });
        },
        [createNote, processResponseErrors],
      ),
    },
  };
};

export default useBtnCreateNote;
