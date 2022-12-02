import { axios } from "lib/axios";
import { IPost } from "../types";
import { getPostDetailsUrl } from "../urls/api";


const updatePost = async (data: IPost) => {
  const response = await axios.patch(getPostDetailsUrl(data.id), data);
  return response.data;
};

export default updatePost;
