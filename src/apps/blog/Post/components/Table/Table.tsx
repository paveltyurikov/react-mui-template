import DataTable from "~/components/DataTable";
import usePostListFetch from "../../hooks/useGetList";
import { TABLE_COLUMNS } from "./config";


const PostAdminTable = () => {
  const { data = [], isLoading } = usePostListFetch();
  return (
    <DataTable isLoading={isLoading} data={data} columns={TABLE_COLUMNS} />
  );
};

export default PostAdminTable;
