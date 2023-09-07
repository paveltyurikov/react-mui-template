import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import { Formik } from "formik";
import DialogWithConfig from "~/components/Dialog/DialogWithConfig";
import { useBtnCreatePost } from "../../hooks";
import { processResponseErrors } from "../../lib";
import RenderFields from "../Form/RenderFields";


export type BtnCreatePostProps = ButtonProps & {
  refetchDeps?: () => void;
};
//yo

const IconBtnAdd = React.forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <AddCircleOutlineIcon />
    </IconButton>
  );
});
const BtnCreatePost = React.forwardRef<HTMLButtonElement, BtnCreatePostProps>(
  ({ refetchDeps, ...props }, ref) => {
    const {
      DIALOG_PROPS,
      visibility: { visibility, show, hide },
      FORMIK_PROPS,
    } = useBtnCreatePost({ processResponseErrors, refetchDeps });
    return (
      <>
        <Button
          ref={ref}
          data-testid="Post-create-btn"
          startIcon={<AddIcon />}
          {...props}
          onClick={show}
        >
          Create post
        </Button>
        <Formik {...FORMIK_PROPS}>
          <DialogWithConfig
            config={DIALOG_PROPS}
            onClose={hide}
            open={visibility}
          >
            <RenderFields />
          </DialogWithConfig>
        </Formik>
      </>
    );
  },
);

export default BtnCreatePost;
