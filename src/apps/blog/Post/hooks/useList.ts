import { AxiosError } from "axios";
import { useQuery } from "react-query";
import PostApi from "../api";
import { QUERY_KEY } from "../config";
import { IPost, IPostFilters } from "../types";


const useListPost = (filters: IPostFilters = {}, options = {}) => {
  return useQuery<IPost[], AxiosError>(
    QUERY_KEY.list(filters),
    () => PostApi.list(filters),
    options
  );
};

export default useListPost;
