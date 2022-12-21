import DataTable from "components/DataTable";
import usePostListFetch from "../../hooks/useGetList";
import ButtonCreatePost from "../ActionButtons/BtnCreate";
import { TABLE_COLUMNS } from "./config";


const PostAdminTable = () => {
  const { data = [], isLoading } = usePostListFetch();
  return (
    <div>
      <div>
        <ButtonCreatePost>Posts</ButtonCreatePost>
      </div>
      <DataTable isLoading={isLoading} data={data} columns={TABLE_COLUMNS} />
    </div>
  );
};

export default PostAdminTable;
