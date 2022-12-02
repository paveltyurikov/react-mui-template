import { AxiosError } from "axios";
import { useQuery } from "react-query";
import getPost from "../api/getList";
import getPostListKey from "../queryKeys/getListKey";
import { IPost } from "../types";


const usePostList = (filters?: any, options = {}) => {
  const KEY = getPostListKey(filters);
  return useQuery<IPost[], AxiosError>(
    KEY,
    () => getPost(filters),
    options
  );
};

export default usePostList;
