import { useCallback } from "react";
import getPostDetailsKey from "../queryKeys/getDetailsKey";
import { IPost } from "../types";
import reactQueryClient from "~/lib/reactQueryClient";


const usePostDetailsRefetch = () => {
  return useCallback(
    (id:IPost["id"]) =>
      reactQueryClient.refetchQueries(getPostDetailsKey(id), {
        exact: true,
      }),
    []
  );
};

export default usePostDetailsRefetch;
