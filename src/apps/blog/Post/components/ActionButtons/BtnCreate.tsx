import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import SubmitButton from "~/components/Form/SubmitButton";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import usePostCreate from "../../hooks/useCreate";
import usePostRefetchList from "../../hooks/useRefetchList";
import { CREATE_DIALOG } from "../../text/dialog";
import { CREATE_NOTIFY } from "../../text/notify";
import { IPostCreate } from "../../types";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "../Form/config";
import { processResponseErrors } from "../Form/lib";
import RenderFields from "../Form/RenderFields";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";


const ButtonCreatePost: React.FC<ButtonProps> = ({ children, ...btnProps }) => {
  const { showErrorNotify, showSuccessNotify } = useNotify();
  const { visibility, hide, show } = useVisibility();
  const refetchPostList = usePostRefetchList();
  const { mutate: createPost } = usePostCreate();

  const handleCreatePost = React.useCallback(
    (formData: IPostCreate, actions: FormikHelpers<IPostCreate>) => {
      createPost(formData, {
        onSuccess: () => {
          actions.resetForm();
          actions.setSubmitting(false);
          showSuccessNotify({ message: CREATE_NOTIFY.success });
          refetchPostList();
          hide();
        },
        onError: (error: any) => {
          processResponseErrors(error, actions);
          actions.setSubmitting(false);
          showErrorNotify({
            message: getNotifyErrorMessage(error, CREATE_NOTIFY.error),
          });
        },
      });
    },
    [refetchPostList, createPost, hide, showErrorNotify, showSuccessNotify]
  );
  return (
    <>
      <Button  startIcon={<AddIcon />} size="small" {...btnProps} onClick={show}>
        {children}
      </Button>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleCreatePost}
      >
        <Dialog open={visibility} fullWidth>
          <Form>
            <DialogTitle>{CREATE_DIALOG.title}</DialogTitle>
            <DialogContent>
              <RenderFields />
            </DialogContent>
            <DialogActions>
              <SubmitButton>{CREATE_DIALOG.buttons.submit}</SubmitButton>
              <Button onClick={hide}>{CREATE_DIALOG.buttons.cancel}</Button>
            </DialogActions>
          </Form>
        </Dialog>
      </Formik>
    </>
  );
};

export default ButtonCreatePost;
