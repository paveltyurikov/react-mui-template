import React from "react";
import { useParams } from "react-router-dom";
import useNotify from "~/hooks/useNotify";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useDetailsPost } from "../../hooks";
import { GET_DETAILS_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";
import ButtonUpdatePost from "../ActionButtons/BtnUpdate";
import Details from "./Details";


const PostDetailsContainer = () => {
  let { id: postId } = useParams<{ id: IPost["id"] }>();
  const { showErrorNotify } = useNotify();
  const { data, refetch, isLoading } = useDetailsPost(postId || "", {
    enabled: Boolean(postId),
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, GET_DETAILS_NOTIFY.error),
      });
    },
  });
  return (
    <>
      {data ? <ButtonUpdatePost post={data} refetchDeps={refetch}>Edit</ButtonUpdatePost> : null}
      <Details post={data} isLoading={isLoading} />
    </>
  );
};

export default PostDetailsContainer;
