import { AxiosError } from "axios";
import { useQuery } from "react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";


const useDetailsPost = (id: IPost["id"], options = {}) => {
  return useQuery<IPost, AxiosError>(
    QUERY_KEY.details(id),
    () => PostApi.details(id),
    {
      enabled: Boolean(id),
      ...options,
    }
  );
};

export default useDetailsPost;
