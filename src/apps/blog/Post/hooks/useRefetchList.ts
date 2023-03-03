import { useCallback } from "react";
import getListKey from "../queryKeys/getListKey";
import reactQueryClient from "~/lib/reactQueryClient";


const useRefetchPostList = () => {
  return useCallback(
    (filters?: any) =>
      reactQueryClient.resetQueries(getListKey(filters), {
        exact: false,
      }),
    []
  );
};

export default useRefetchPostList;
