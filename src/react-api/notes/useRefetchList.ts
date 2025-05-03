import { useCallback } from "react";
import queryClient from "~/lib/reactQueryClient";
import { INoteFilters } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useRefetchNoteList = () => {
  return useCallback(
    (filters?: INoteFilters) =>
      queryClient.resetQueries({
        queryKey: QUERY_KEYS.list(filters),
        exact: false,
      }),
    [],
  );
};

export default useRefetchNoteList;
