import { ReactNode } from "react";
import {
  DialogTitle,
  DialogTitleProps,
  IconButtonProps,
  Stack,
} from "@mui/material";
import IconBtnClose from "~/components/Button/IconBtnClose";

const ICON_BTN_SX = {
  display: "inline-flex",
  marginLeft: "auto",
  transform: "translateX(.75rem)",
};

const DialogTitleWithClose = ({
  onClose,
  children,
  ...dialogTitleProps
}: {
  onClose: IconButtonProps["onClick"];
  children: ReactNode;
} & DialogTitleProps) => {
  return (
    <DialogTitle {...dialogTitleProps}>
      <Stack direction="row" alignItems="center">
        {children}
        <IconBtnClose aria-label="close" onClick={onClose} sx={ICON_BTN_SX} />
      </Stack>
    </DialogTitle>
  );
};

export default DialogTitleWithClose;
