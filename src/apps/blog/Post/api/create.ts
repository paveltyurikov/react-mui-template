import { IPostCreate } from "../types";
import { getPostUrl } from "../urls/api";
import { axios } from "~/lib/axios";


const createPost = async (data: IPostCreate) => {
  const response = await axios.post(getPostUrl(), { data });
  return response.data;
};

export default createPost;
