import { useCallback } from "react";
import reactQueryClient from "lib/reactQueryClient";
import getListKey from "../queryKeys/getListKey";


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
