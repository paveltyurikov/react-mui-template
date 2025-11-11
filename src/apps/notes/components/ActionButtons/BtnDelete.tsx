import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, ButtonProps, Dialog, DialogActions } from "@mui/material";
import DialogTitleWithClose from "~/components/dialog/DialogTitleWithClose";
import { INote } from "~/types/notes";
import { useBtnDeleteNote } from "../../hooks";

export type BtnDeleteNoteProps = ButtonProps & {
  refetchDeps?: () => void;
  note: INote;
};

const BtnDeleteNote = ({
  note,
  refetchDeps,
  ...btnProps
}: BtnDeleteNoteProps) => {
  const { visibility, onDelete, DIALOG_PROPS } = useBtnDeleteNote({
    note,
    refetchDeps,
  });

  return (
    <>
      <Button
        data-testid="Note-delete-btn"
        startIcon={<DeleteForeverIcon />}
        {...btnProps}
        onClick={visibility.show}
      />
      <Dialog
        data-testid="dialog"
        open={visibility.visibility}
        onClose={visibility.hide}
      >
        <DialogTitleWithClose
          data-testid="dialog-title"
          onClose={visibility.hide}
        >
          {DIALOG_PROPS.title}
        </DialogTitleWithClose>
        <DialogActions>
          <Button data-testid="dialog-btn-cancel" onClick={visibility.hide}>
            {DIALOG_PROPS.buttons.cancel}
          </Button>
          <Button
            data-testid="dialog-btn-submit"
            onClick={onDelete}
            variant="contained"
            color="error"
          >
            {DIALOG_PROPS.buttons.submit}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BtnDeleteNote;
