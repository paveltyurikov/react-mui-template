import { useMutation } from "react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";


const useDeletePost = (id: IPost["id"], options = {}) => {
  return useMutation(
    QUERY_KEY.delete(id),
    () => PostApi.delete(id),
    {...options}
  );
};

export default useDeletePost;
