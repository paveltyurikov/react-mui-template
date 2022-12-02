import { useMutation } from "react-query";
import deletePost from "../api/delete";
import { IPost } from "../types";


const usePostDelete = (options = {}) => {
  return useMutation(
    "postDelete",
    (id: IPost["id"]) => deletePost(id),
    options
  );
};

export default usePostDelete;
