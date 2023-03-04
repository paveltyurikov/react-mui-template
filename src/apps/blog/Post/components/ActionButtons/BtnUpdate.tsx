import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import DialogTitleWithClose from "~/components/Dialog/DialogTitleWithClose";
import SubmitButton from "~/components/Form/SubmitButton";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import usePostsRefetchList from "../../hooks/useRefetchList";
import usePostUpdate from "../../hooks/useUpdate";
import { UPDATE_DIALOG } from "../../text/dialog";
import { UPDATE_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";
import { VALIDATION_SCHEMA } from "../Form/config";
import { processResponseErrors } from "../Form/lib";
import RenderFields from "../Form/RenderFields";


const ButtonUpdatePost: React.FC<
  ButtonProps & {
    post: IPost;
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
    [hide, refetchPostsList, showErrorNotify, showSuccessNotify, updatePost]
  );
  return (
    <>
      <Button
        data-testid="Post-update-btn"
        startIcon={<EditIcon />}
        size="small"
        color="primary"
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
        <Form>
          <Dialog open={visibility} fullWidth>
            <DialogTitleWithClose data-testid="dialog-title" onClose={hide}>
              {UPDATE_DIALOG.title}
            </DialogTitleWithClose>
            <DialogContent>
              <RenderFields />
            </DialogContent>
            <DialogActions>
              <Button data-testid="dialog-btn-cancel" onClick={hide}>
                {UPDATE_DIALOG.buttons.cancel}
              </Button>
              <SubmitButton data-testid="dialog-btn-submit">
                {UPDATE_DIALOG.buttons.submit}
              </SubmitButton>
            </DialogActions>
          </Dialog>
        </Form>
      </Formik>
    </>
  );
};

export default ButtonUpdatePost;
