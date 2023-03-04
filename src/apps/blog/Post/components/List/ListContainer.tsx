import React from "react";
import { AxiosError } from "axios";
import { IPost } from "~/apps/blog/Post/types";
import useNotify from "~/hooks/useNotify";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import usePostList from "../../hooks/useGetList";
import { GET_LIST_NOTIFY } from "../../text/notify";
import PostList from "./List";


const PostListContainer: React.FC<{ filters?: any }> = ({ filters = {} }) => {
  const { showErrorNotify } = useNotify();
  const { data = [] } = usePostList(filters, {
    onError: (error: AxiosError<IPost>) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, GET_LIST_NOTIFY.error),
      });
    },
  });

  return <PostList posts={data} />;
};

export default PostListContainer;
