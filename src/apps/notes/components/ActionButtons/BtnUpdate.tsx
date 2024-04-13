import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button, ButtonProps } from "@mui/material";
import { Formik } from "formik";
import DialogWithConfig from "~/components/Dialog/DialogWithConfig";
import { useBtnUpdatePost } from "../../hooks";
import { processResponseErrors } from "../../lib";
import { IPost } from "../../types";
import RenderFields from "../Form/RenderFields";


export type BtnUpdatePostProps = ButtonProps & {
  post: IPost;
  refetchDeps?: () => void;
};

const ButtonUpdatePost = ({
  post,
  refetchDeps,
  ...btnProps
}: BtnUpdatePostProps) => {
  const { visibility, FORMIK_PROPS, DIALOG_PROPS } = useBtnUpdatePost({
    post,
    processResponseErrors,
    refetchDeps,
  });
  return (
    <>
      <Button
        data-testid="Post-update-btn"
        startIcon={<EditIcon />}
        {...btnProps}
        onClick={visibility.show}
      />
      <Formik {...FORMIK_PROPS}>
        <DialogWithConfig
          config={DIALOG_PROPS}
          onClose={visibility.hide}
          open={visibility.visibility}
        >
          <RenderFields />
        </DialogWithConfig>
      </Formik>
    </>
  );
};

export default ButtonUpdatePost;
