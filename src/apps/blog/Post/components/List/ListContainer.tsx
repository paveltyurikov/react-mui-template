import React from "react";
import useNotify from "hooks/useNotify";
import getNotifyErrorMessage from "lib/getNotifyErrorMessage";
import { GET_LIST_NOTIFY } from "../../text/notify"
import usePostList from "../../hooks/useGetList";
// import PostList from "./List";


const PostListContainer:React.FC<{filters:any}> = ({filters}) => {
  const { showErrorNotify } = useNotify();
  const { data, isLoading  } = usePostList(filters, {
    onError: (error: any) => {
      showErrorNotify({
         message: getNotifyErrorMessage(error, GET_LIST_NOTIFY.error),
      });
    },
  });

  return null//<PostList isLoading={isLoading} posts={data} />
};

export default PostListContainer;
