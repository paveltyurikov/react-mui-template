import { useMutation } from "react-query";
import createPost from "../api/create";
import { IPostCreate } from "../types";


const usePostCreate = () => {
  return useMutation("postCreate", (data: IPostCreate) => createPost(data));
};

export default usePostCreate;
