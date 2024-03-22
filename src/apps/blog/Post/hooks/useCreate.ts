import { useMutation } from "@tanstack/react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { PostCreateDto } from "../types";

const useCreatePost = (options = {}) => {
  return useMutation({
    mutationFn: (data: PostCreateDto) => PostApi.create(data),
    mutationKey: QUERY_KEY.create(),
    ...options,
  });
};

export default useCreatePost;
