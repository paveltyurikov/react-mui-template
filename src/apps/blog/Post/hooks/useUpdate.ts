import { useMutation } from "react-query";
import updatePost from "../api/update";
import { IPost } from "../types";


const usePostUpdate = (options = {}) => {
  return useMutation("postUpdate", (data: IPost) => updatePost(data), options);
};

export default usePostUpdate;
