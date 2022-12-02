import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import SubmitButton from "components/Form/SubmitButton";
import useNotify from "hooks/useNotify";
import useVisibility from "hooks/useVisibility";
import getNotifyErrorMessage from "lib/getNotifyErrorMessage";
import usePostsRefetchList from "../../hooks/useRefetchList";
import usePostUpdate from "../../hooks/useUpdate";
import { UPDATE_DIALOG } from "../../text/dialog";
import { UPDATE_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";
import { VALIDATION_SCHEMA } from "../Form/config";
import { processResponseErrors } from "../Form/lib";
import RenderFields from "../Form/RenderFields";


const ButtonUpdatePost: React.FC<
  Partial<ButtonProps> & {
    post: IPost;
    children?: React.ReactNode;
  }
> = ({ post, children, ...btnProps }) => {
  const { showSuccessNotify, showErrorNotify } = useNotify();
  const { visibility, hide, show } = useVisibility();
  const { mutate: updatePost } = usePostUpdate();
  const refetchPostsList = usePostsRefetchList();

  const handleUpdate = React.useCallback(
    (formData: IPost, actions: FormikHelpers<IPost>) => {
      updatePost(formData, {
        onSuccess: () => {
          refetchPostsList();
          actions.setSubmitting(false);
          hide();
          showSuccessNotify({ message: UPDATE_NOTIFY.success });
        },
        onError: (error: any) => {
          processResponseErrors(error, actions);
          actions.setSubmitting(false);
          showErrorNotify({
            message: getNotifyErrorMessage(error, UPDATE_NOTIFY.error),
          });
        },
      });
    },
    [hide, showErrorNotify, showSuccessNotify, updatePost]
  );
  return (
    <>
      <Button
        startIcon={<EditIcon />}
        size="small"
        color="primary"
        variant="outlined"
        {...btnProps}
        onClick={show}
      >
        {children}
      </Button>
      <Formik
        initialValues={post}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleUpdate}
      >
        <Dialog open={visibility} fullWidth>
          <Form>
            <DialogTitle>{UPDATE_DIALOG.title}</DialogTitle>
            <DialogContent>
              <RenderFields />
            </DialogContent>
            <DialogActions>
              <SubmitButton>{UPDATE_DIALOG.buttons.submit}</SubmitButton>
              <Button onClick={hide}>{UPDATE_DIALOG.buttons.cancel}</Button>
            </DialogActions>
          </Form>
        </Dialog>
      </Formik>
    </>
  );
};

export default ButtonUpdatePost;
