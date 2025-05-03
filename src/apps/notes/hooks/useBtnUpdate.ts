import { useCallback, useMemo } from "react";
import { FormikHelpers } from "formik";
import { useVisibility, useNotify } from "~/hooks";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useUpdateNote } from "~/react-api/notes";
import { INote } from "~/types/notes";
import { getValidationSchema } from "../config/forms";
import { getUpdateDialog, getUpdateNotify } from "../config/text";
import useTranslation from "../hooks/useTranslation";

export type useBtnUpdateNoteProps = {
  note: INote;
  processResponseErrors?: (errors: any, actions: any) => void;
  refetchDeps?: () => void;
};

const useBtnUpdateNote = ({
  note,
  processResponseErrors,
  refetchDeps,
}: useBtnUpdateNoteProps) => {
  const { t } = useTranslation();
  const { showSuccessNotify, showErrorNotify } = useNotify();
  const visibility = useVisibility();

  const UPDATE_DIALOG = useMemo(() => getUpdateDialog(t), [t]);
  const UPDATE_NOTIFY = useMemo(() => getUpdateNotify(t), [t]);
  const VALIDATION_SCHEMA = useMemo(() => getValidationSchema(t), [t]);

  const { mutate: updateNote } = useUpdateNote(note.id, {
    onSuccess: () => {
      if (refetchDeps) refetchDeps();
      showSuccessNotify({
        message: UPDATE_NOTIFY.success,
        "data-testid": "update-note",
      });
      visibility.hide();
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, UPDATE_NOTIFY.error),
        "data-testid": "update-note",
      });
    },
  });

  return {
    visibility,
    DIALOG_PROPS: UPDATE_DIALOG,
    FORMIK_PROPS: {
      initialValues: note,
      validationNote: VALIDATION_SCHEMA,
      onSubmit: useCallback(
        (formData: INote, actions: FormikHelpers<INote>) => {
          updateNote(formData, {
            onSuccess: () => {
              actions.setSubmitting(false);
            },
            onError: (error: any) => {
              if (processResponseErrors) processResponseErrors(error, actions);
              actions.setSubmitting(false);
            },
          });
        },
        [processResponseErrors, updateNote],
      ),
    },
  };
};

export default useBtnUpdateNote;
