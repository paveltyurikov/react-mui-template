import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost, IPostFilters } from "../types";

const useListPost = (filters: IPostFilters = {}, options = {}) => {
  return useQuery<IPost[], AxiosError>({
    queryFn: () => PostApi.list(filters),
    queryKey: QUERY_KEY.list(filters),
    ...options,
  });
};

export default useListPost;
