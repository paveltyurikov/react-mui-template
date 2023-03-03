import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import usePostDelete from "../../hooks/useDelete";
import usePostsRefetchList from "../../hooks/useRefetchList";
import { DELETE_DIALOG } from "../../text/dialog";
import { DELETE_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";


const ButtonDeletePost: React.FC<
  Partial<ButtonProps> & {
    post: IPost;
    children?: React.ReactNode;
  }
> = ({ post, children, ...btnProps }) => {
  const { showSuccessNotify, showErrorNotify } = useNotify();
  const { visibility, hide, show } = useVisibility();
  const { mutate: deletePost } = usePostDelete();
  const refetchPostsList = usePostsRefetchList();

  const handleDelete = () => {
    deletePost(post.id, {
      onSuccess: () => {
        refetchPostsList();
        showSuccessNotify({ message: DELETE_NOTIFY.success });
        hide();
      },
      onError: (error: any) => {
        showErrorNotify({
          message: getNotifyErrorMessage(error, DELETE_NOTIFY.error),
        });
      },
    });
  };

  return (
    <>
      <Button
        startIcon={<DeleteForeverIcon />}
        size="small"
        color="secondary"
        variant="outlined"
        {...btnProps}
        onClick={show}
      >
        {children}
      </Button>
      <Dialog open={visibility} fullWidth>
        <DialogTitle>{DELETE_DIALOG.title}</DialogTitle>
        <DialogActions>
          <Button onClick={hide}>{DELETE_DIALOG.buttons.cancel}</Button>
          <Button onClick={handleDelete} color="secondary">
            {DELETE_DIALOG.buttons.submit}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonDeletePost;
