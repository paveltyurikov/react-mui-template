import React from "react";
import {Container, Stack, ThemeProvider} from "@mui/material";
import { useParams } from "react-router-dom";
import postDetailsTheme from "~/apps/blog/Post/components/Details/Details.theme";
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
    <ThemeProvider theme={postDetailsTheme}>
      <Stack direction="row" spacing={1.5}>
        <IconBtnBack size="small" color="inherit" onClick={navigateToList} />{" "}
        {data ? (
          <>
            <ButtonUpdatePost post={data} color="inherit" refetchDeps={refetch}>
              Edit
            </ButtonUpdatePost>
            <BtnDeletePost post={data} color="inherit"  refetchDeps={navigateToList}>
              Delete
            </BtnDeletePost>
          </>
        ) : null}
      </Stack>
      <Details post={data} isLoading={isLoading} />
    </ThemeProvider>
  );
};

export default PostDetailsContainer;
