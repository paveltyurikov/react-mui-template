import { useCallback } from "react";
import reactQueryClient from "~/lib/reactQueryClient";
import getPostDetailsKey from "../queryKeys/getDetailsKey";
import { IPost } from "../types";


const usePostDetailsRefetch = () => {
  return useCallback(
    (id: IPost["id"]) =>
      reactQueryClient.refetchQueries(getPostDetailsKey(id), {
        exact: true,
      }),
    []
  );
};

export default usePostDetailsRefetch;
