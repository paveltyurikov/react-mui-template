import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
} from "@mui/material";
import DialogTitleWithClose from "~/components/Dialog/DialogTitleWithClose";
import SubmitButton from "~/components/Form/SubmitButton";


export type DialogConfig = {
  title: string;
  buttons: { submit: string; cancel: string };
};
export type DialogWithFormProps = DialogProps & {
  config: DialogConfig;
  onClose: () => void;
};
const DialogWithConfig = ({
  config,
  onClose,
  children,
  ...dialogProps
}: DialogWithFormProps) => {
  return (
    <Dialog onClose={onClose} {...dialogProps}>
      <DialogTitleWithClose data-testid="dialog-title" onClose={onClose}>
        {config.title}
      </DialogTitleWithClose>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button data-testid="dialog-btn-cancel" onClick={onClose}>
          {config.buttons.cancel}
        </Button>
        <SubmitButton data-testid="dialog-btn-submit">
          {config.buttons.submit}
        </SubmitButton>
      </DialogActions>
    </Dialog>
  );
};

export default DialogWithConfig;
