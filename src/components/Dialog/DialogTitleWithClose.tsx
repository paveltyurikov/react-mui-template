import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  DialogTitle,
  DialogTitleProps,
  IconButton,
  IconButtonProps,
  Theme,
} from "@mui/material";


const ICON_BTN_SX = {
  position: "absolute",
  right: 8,
  top: 8,
  color: (theme: Theme) => theme.palette.grey[500],
};

const DialogTitleWithClose = ({
  onClose,
  children,
  ...dialogTitleProps
}: {
  onClose: IconButtonProps["onClick"];
  children: React.ReactNode;
} & DialogTitleProps) => {
  return (
    <DialogTitle {...dialogTitleProps}>
      {children}
      <IconButton aria-label="close" onClick={onClose} sx={ICON_BTN_SX}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default DialogTitleWithClose;
