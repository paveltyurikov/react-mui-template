import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
} from "@mui/material";
import DialogTitleWithClose from "~/components/Dialog/DialogTitleWithClose";
import { useBtnDeletePost } from "../../hooks";
import { IPost } from "../../types";


export type BtnDeletePostProps = ButtonProps & {
  refetchDeps?: () => void;
  post: IPost;
};

const BtnDeletePost = ({
  post,
  refetchDeps,
  ...btnProps
}: BtnDeletePostProps) => {
  const { visibility, onDelete, DIALOG_PROPS } = useBtnDeletePost({
    post,
    refetchDeps,
  });

  return (
    <>
      <Button
        data-testid="Post-delete-btn"
        startIcon={<DeleteForeverIcon />}
        {...btnProps}
        onClick={visibility.show}
      />
      <Dialog data-testid="dialog" open={visibility.visibility} onClose={visibility.hide}>
        <DialogTitleWithClose data-testid="dialog-title" onClose={visibility.hide}>{DIALOG_PROPS.title}</DialogTitleWithClose>
        <DialogActions>
          <Button data-testid="dialog-btn-cancel" onClick={visibility.hide}>
            {DIALOG_PROPS.buttons.cancel}
          </Button>
          <Button data-testid="dialog-btn-submit" onClick={onDelete} variant="contained" color="error">
            {DIALOG_PROPS.buttons.submit}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BtnDeletePost;
