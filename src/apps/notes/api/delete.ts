import { axios } from "~/lib/axios";
import { IPost } from "../types";
import { getDetailsUrl } from "../urls/api";


const deletePost = async (id: IPost["id"]) => {
  const response = await axios.delete(getDetailsUrl(id));
  return response.data;
};

export default deletePost;
