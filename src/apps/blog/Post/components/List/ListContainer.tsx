import React from "react";
import { Container } from "@mui/material";
import { AxiosError } from "axios";
import useNotify from "~/hooks/useNotify";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useListPost } from "../../hooks";
import { GET_LIST_NOTIFY } from "../../text/notify";
import { IPost } from "../../types";
import BtnCreatePost from "../ActionButtons/BtnCreate";
import PostList from "./List";


const PostListContainer: React.FC<{ filters?: any }> = ({ filters = {} }) => {
  const { showErrorNotify } = useNotify();
  const {
    data = [],
    isLoading,
    refetch,
  } = useListPost(filters, {
    onError: (error: AxiosError<IPost>) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, GET_LIST_NOTIFY.error),
      });
    },
  });

  return (
    <Container>
      <BtnCreatePost refetchDeps={refetch} />
      <PostList isLoading={isLoading} posts={data} />
    </Container>
  );
};

export default PostListContainer;
