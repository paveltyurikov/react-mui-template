import { useMutation } from "@tanstack/react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";

const useDeletePost = (id: IPost["id"], options = {}) => {
  return useMutation({
    mutationFn: () => PostApi.delete(id),
    mutationKey: QUERY_KEY.delete(id),
    ...options,
  });
};

export default useDeletePost;
