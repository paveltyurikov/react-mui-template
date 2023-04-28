import { useMutation } from "react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";


const useUpdatePost = (id: IPost["id"], options = {}) => {
  return useMutation(
    QUERY_KEY.update(id),
    (data: IPost) => PostApi.update(id, data),
    options
  );
};

export default useUpdatePost;
