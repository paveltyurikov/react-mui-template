import React from "react";
import { FormikHelpers } from "formik";
import useNotify from "~/hooks/useNotify";
import useVisibility from "~/hooks/useVisibility";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "../config";
import { useCreatePost } from "../hooks";
import { CREATE_DIALOG } from "../text/dialog";
import { CREATE_NOTIFY } from "../text/notify";
import { PostCreateDto } from "../types";


export type useBtnCreatePostProps = {
  processResponseErrors?: (errors: any, actions: any) => void;
  refetchDeps?: () => void;
};

const useBtnCreatePost = ({
  processResponseErrors,
  refetchDeps,
}: useBtnCreatePostProps) => {
  const { showErrorNotify, showSuccessNotify } = useNotify();
  const visibility = useVisibility();
  const { mutate: createPost } = useCreatePost({
    onSuccess: () => {
      showSuccessNotify({
        message: CREATE_NOTIFY.success,
        "data-testid": "create-post",
      });
      if (refetchDeps) refetchDeps();
      visibility.hide();
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, CREATE_NOTIFY.error),
        "data-testid": "create-post"
      });
    },
  });

  return {
    visibility,
    DIALOG_PROPS: CREATE_DIALOG,
    FORMIK_PROPS: {
      initialValues: INITIAL_VALUES,
      validationPost: VALIDATION_SCHEMA,
      onSubmit: React.useCallback(
        (formData: PostCreateDto, actions: FormikHelpers<PostCreateDto>) => {
          createPost(formData, {
            onSuccess: () => {
              actions.resetForm();
              actions.setSubmitting(false);
            },
            onError: (error: any) => {
              if (processResponseErrors) {
                processResponseErrors(error, actions);
              }
              actions.setSubmitting(false);
            },
          });
        },
        [createPost, processResponseErrors]
      ),
    },
  };
};

export default useBtnCreatePost;
