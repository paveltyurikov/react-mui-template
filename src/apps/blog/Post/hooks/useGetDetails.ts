import { AxiosError } from "axios";
import { useQuery } from "react-query";
import getPostDetails from "../api/getDetails";
import getPostDetailsKey from "../queryKeys/getDetailsKey";
import { IPost } from "../types";


const usePostDetails = (id: IPost["id"], options = {}) => {
  const KEY = getPostDetailsKey(id);
  return useQuery<IPost, AxiosError>(KEY, () => getPostDetails(id), {
    enabled:Boolean(id),
    ...options,
  });
};

export default usePostDetails;
