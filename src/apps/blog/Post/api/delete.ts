import { IPost } from "../types";
import { getPostDetailsUrl } from "../urls/api";
import { axios } from "~/lib/axios";


const deletePost = async (id: IPost["id"]) => {
  const response = await axios.delete(getPostDetailsUrl(id));
  return response.data;
};

export default deletePost;
