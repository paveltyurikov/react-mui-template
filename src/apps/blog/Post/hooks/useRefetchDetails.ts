import { useCallback } from "react";
import queryClient from "~/lib/reactQueryClient";
import { QUERY_KEY } from "../config";
import { IPost } from "../types";


const useBtnDetailsRefetchPost= () => {
  return useCallback(
    (id:IPost["id"]) =>
      queryClient.refetchQueries(QUERY_KEY.details(id), {
        exact: true,
      }),
    []
  );
};

export default useBtnDetailsRefetchPost;
