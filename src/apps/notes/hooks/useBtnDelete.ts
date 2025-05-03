import { useCallback, useMemo } from "react";
import { useNotify, useVisibility } from "~/hooks";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useDeleteNote } from "~/react-api/notes";
import { INote } from "~/types/notes";
import { getDeleteDialog, getDeleteNotify } from "../config/text";
import useTranslation from "../hooks/useTranslation";

export type useBtnDeleteNoteProps = {
  note: INote;
  refetchDeps?: () => void;
};

const useBtnDeleteNote = ({ note, refetchDeps }: useBtnDeleteNoteProps) => {
  const { t } = useTranslation();
  const { showSuccessNotify, showErrorNotify } = useNotify();
  const visibility = useVisibility();

  const DELETE_NOTIFY = useMemo(() => getDeleteNotify(t), [t]);
  const DELETE_DIALOG = useMemo(() => getDeleteDialog(t), [t]);

  const { mutate: deleteNote } = useDeleteNote(note.id, {
    onSuccess: () => {
      if (refetchDeps) refetchDeps();
      showSuccessNotify({
        message: DELETE_NOTIFY.success,
        "data-testid": "delete-note",
      });
      visibility.hide();
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, DELETE_NOTIFY.error),
        "data-testid": "delete-note",
      });
    },
  });

  return {
    visibility,
    DIALOG_PROPS: DELETE_DIALOG,
    onDelete: useCallback(() => deleteNote(), [deleteNote]),
  };
};

export default useBtnDeleteNote;
