import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, ButtonProps, Dialog, DialogActions } from "@mui/material";
import DialogTitleWithClose from "~/components/Dialog/DialogTitleWithClose";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import usePostDelete from "../../hooks/useDelete";
import usePostsRefetchList from "../../hooks/useRefetchList";
import { DELETE_DIALOG } from "../../text/dialog";
import { DELETE_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";


const ButtonDeletePost: React.FC<
  Partial<ButtonProps> & {
    post: IPost;
    children?: React.ReactNode;
  }
> = ({ post, ...btnProps }) => {
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
        data-testid="Post-delete-btn"
        startIcon={<DeleteForeverIcon />}
        size="small"
        color="secondary"
        variant="outlined"
        {...btnProps}
        onClick={show}
      />
      <Dialog data-testid="dialog-title" open={visibility} fullWidth>
        <DialogTitleWithClose onClose={hide}>
          {DELETE_DIALOG.title}
        </DialogTitleWithClose>
        <DialogActions>
          <Button  data-testid="dialog-btn-cancel" onClick={hide}>{DELETE_DIALOG.buttons.cancel}</Button>
          <Button  data-testid="dialog-btn-submit" onClick={handleDelete} color="secondary">
            {DELETE_DIALOG.buttons.submit}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonDeletePost;
