import React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { IconBtnBack } from "~/components/Button";
import useNotify from "~/hooks/useNotify";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useDetailsPost, useNavigateToListPost } from "../../hooks";
import { GET_DETAILS_NOTIFY } from "../../text/notify";
import { PostDetailsParams } from "../../types";
import BtnDeletePost from "../ActionButtons/BtnDelete";
import ButtonUpdatePost from "../ActionButtons/BtnUpdate";
import Details from "./Details";


const PostDetailsContainer = () => {
  let { id: postId } = useParams<PostDetailsParams>();
  const navigateToList = useNavigateToListPost();
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
    <Container>
      <IconBtnBack onClick={navigateToList} />{" "}
      {data ? (
        <>
          <ButtonUpdatePost post={data} refetchDeps={refetch}>
            Edit
          </ButtonUpdatePost>{" "}
          <BtnDeletePost post={data} refetchDeps={navigateToList}>
            Delete
          </BtnDeletePost>
        </>
      ) : null}
      <Details post={data} isLoading={isLoading} />
    </Container>
  );
};

export default PostDetailsContainer;
