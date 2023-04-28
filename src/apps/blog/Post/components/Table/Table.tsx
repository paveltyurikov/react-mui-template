import { IPostFilters } from "~/apps/blog/Post/types";
import DataTable from "~/components/DataTable";
import useListPost from "../../hooks/useList";
import { TABLE_COLUMNS } from "./config";


const PostAdminTable = () => {
  const { data = [], isLoading } = useListPost({} as IPostFilters, {
    onError: () => {
      console.log("error");
    },
  });
  return (
    <DataTable isLoading={isLoading} data={data} columns={TABLE_COLUMNS} />
  );
};

export default PostAdminTable;
