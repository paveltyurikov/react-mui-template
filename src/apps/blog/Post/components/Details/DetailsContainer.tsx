import React from "react";
import { useParams } from "react-router-dom";
import ButtonUpdatePost from "~/apps/blog/Post/components/ActionButtons/BtnUpdate";
import useNotify from "~/hooks/useNotify";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import usePostDetails from "../../hooks/useGetDetails";
import { GET_DETAILS_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";
import Details from "./Details";


const PostDetailsContainer = () => {
  let { id: postId } = useParams<{ id: IPost["id"] }>();
  const { showErrorNotify } = useNotify();
  const { data, isLoading } = usePostDetails(postId || "", {
    enabled: Boolean(postId),
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, GET_DETAILS_NOTIFY.error),
      });
    },
  });
  return (
    <>
      {data ? <ButtonUpdatePost post={data}>Edit</ButtonUpdatePost> : null}
      <Details post={data} isLoading={isLoading} />
    </>
  );
};

export default PostDetailsContainer;
