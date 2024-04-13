import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";

const useDetailsPost = (id: IPost["id"], options = {}) => {
  return useQuery<IPost, AxiosError>({
    queryFn: () => PostApi.details(id),
    queryKey: QUERY_KEY.details(id),

    enabled: Boolean(id),
    ...options,
  });
};

export default useDetailsPost;
