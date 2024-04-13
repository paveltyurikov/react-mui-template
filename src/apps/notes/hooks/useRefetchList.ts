import { useCallback } from "react";
import queryClient from "~/lib/reactQueryClient";
import { QUERY_KEY } from "../config";
import { IPostFilters } from "../types";


const useRefetchPostList = () => {
  return useCallback(
    (filters: IPostFilters) =>
      queryClient.resetQueries(QUERY_KEY.list(filters), {
        exact: false,
      }),
    []
  );
};

export default useRefetchPostList;
