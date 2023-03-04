import { axios } from "~/lib/axios";
import { IPost } from "../types";
import { getPostDetailsUrl } from "../urls/api";


const deletePost = async (id: IPost["id"]) => {
  const response = await axios.delete(getPostDetailsUrl(id));
  return response.data;
};

export default deletePost;
