import React from "react";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useDeletePost } from "../hooks";
import { DELETE_DIALOG } from "../text/dialog";
import { DELETE_NOTIFY } from "../text/notify";
import { IPost } from "../types";


export type useBtnDeletePostProps = {
  post: IPost;
  refetchDeps?: () => void;
};

const useBtnDeletePost = ({ post, refetchDeps }: useBtnDeletePostProps) => {
  const { showSuccessNotify, showErrorNotify } = useNotify();
  const visibility = useVisibility();
  const { mutate: deletePost } = useDeletePost(post.id, {
    onSuccess: () => {
      if (refetchDeps) refetchDeps();
      showSuccessNotify({ message: DELETE_NOTIFY.success, "data-testid": "delete-post", });
      visibility.hide();
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, DELETE_NOTIFY.error), "data-testid": "delete-post",
      });
    },
  });

  return {
    visibility,
    DIALOG_PROPS: DELETE_DIALOG,
    onDelete: React.useCallback(() => deletePost(), []),
  };
};

export default useBtnDeletePost;
