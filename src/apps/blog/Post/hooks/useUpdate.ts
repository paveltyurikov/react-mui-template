import { useMutation } from "@tanstack/react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";

const useUpdatePost = (id: IPost["id"], options = {}) => {
  return useMutation({
    mutationFn: (data: IPost) => PostApi.update(id, data),
    mutationKey: QUERY_KEY.update(id),
    ...options,
  });
};

export default useUpdatePost;
