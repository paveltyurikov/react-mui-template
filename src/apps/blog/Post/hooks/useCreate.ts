import { useMutation } from "react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { PostCreateDto } from "../types";


const useCreatePost = (options = {}) => {
  return useMutation(
    QUERY_KEY.create(),
    (data: PostCreateDto) =>PostApi.create(data),
    options
  );
};

export default useCreatePost;
