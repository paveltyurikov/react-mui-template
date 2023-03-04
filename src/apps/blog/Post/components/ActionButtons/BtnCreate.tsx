import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import {AxiosError} from "axios/index";
import { Form, Formik, FormikHelpers } from "formik";
import DialogTitleWithClose from "~/components/Dialog/DialogTitleWithClose";
import SubmitButton from "~/components/Form/SubmitButton";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import usePostCreate from "../../hooks/useCreate";
import usePostRefetchList from "../../hooks/useRefetchList";
import { CREATE_DIALOG } from "../../text/dialog";
import { CREATE_NOTIFY } from "../../text/notify";
import { IPostCreate } from "../../types";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "../Form/config";
import { processResponseErrors } from "../Form/lib";
import RenderFields from "../Form/RenderFields";


const ButtonCreatePost = (props: ButtonProps) => {
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
      <Button data-testid="Post-create-btn" startIcon={<AddIcon />} size="small" {...props} onClick={show} />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleCreatePost}
      >
        <Form>
          <Dialog open={visibility} fullWidth>
            <DialogTitleWithClose data-testid="dialog-title" onClose={hide}>
              {CREATE_DIALOG.title}
            </DialogTitleWithClose>
            <DialogContent>
              <RenderFields />
            </DialogContent>
            <DialogActions>
              <Button data-testid="dialog-btn-cancel" onClick={hide}>{CREATE_DIALOG.buttons.cancel}</Button>
              <SubmitButton data-testid="dialog-btn-submit">{CREATE_DIALOG.buttons.submit}</SubmitButton>
            </DialogActions>
          </Dialog>
        </Form>
      </Formik>
    </>
  );
};

export default ButtonCreatePost;
