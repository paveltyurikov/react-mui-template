import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, ButtonProps } from "@mui/material";
import { Formik } from "formik";
import DialogWithConfig from "~/components/Dialog/DialogWithConfig";
import { useBtnCreatePost } from "../../hooks";
import { processResponseErrors } from "../../lib";
import RenderFields from "../Form/RenderFields";


export type BtnCreatePostProps = ButtonProps & {
  refetchDeps?: () => void;
};
//yo

const BtnCreatePost = ({ refetchDeps, ...props }: BtnCreatePostProps) => {
  const {
    DIALOG_PROPS,
    visibility: { visibility, show, hide },
    FORMIK_PROPS,
  } = useBtnCreatePost({ processResponseErrors, refetchDeps });
  return (
    <>
      <Button
        data-testid="Post-create-btn"
        startIcon={<AddIcon />}
        {...props}
        onClick={show}
      />
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
};

export default BtnCreatePost;
