import React from "react";
import { FormikHelpers } from "formik";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { VALIDATION_SCHEMA } from "../config";
import { useUpdatePost } from "../hooks";
import { UPDATE_DIALOG } from "../text/dialog";
import { UPDATE_NOTIFY } from "../text/notify";
import { IPost } from "../types";


export type useBtnUpdatePostProps = {
  post: IPost;
  processResponseErrors?: (errors: any, actions: any) => void;
  refetchDeps?: () => void;
};

const useBtnUpdatePost = ({
  post,
  processResponseErrors,
  refetchDeps,
}: useBtnUpdatePostProps) => {
  const { showSuccessNotify, showErrorNotify } = useNotify();
  const visibility = useVisibility();

  const { mutate: updatePost } = useUpdatePost(post.id, {
    onSuccess: () => {
      if (refetchDeps) refetchDeps();
      showSuccessNotify({
        message: UPDATE_NOTIFY.success,
        "data-testid": "update-post",
      });
      visibility.hide();
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, UPDATE_NOTIFY.error),
        "data-testid": "update-post",
      });
    },
  });

  return {
    visibility,
    DIALOG_PROPS: UPDATE_DIALOG,
    FORMIK_PROPS: {
      initialValues: post,
      validationSchema: VALIDATION_SCHEMA.update,
      onSubmit: React.useCallback(
        (formData: IPost, actions: FormikHelpers<IPost>) => {
          updatePost(formData, {
            onSuccess: () => {
              actions.setSubmitting(false);
            },
            onError: (error: any) => {
              if (processResponseErrors) processResponseErrors(error, actions);
              actions.setSubmitting(false);
            },
          });
        },
        [updatePost]
      ),
    },
  };
};

export default useBtnUpdatePost;
