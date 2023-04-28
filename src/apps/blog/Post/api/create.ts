import { axios } from "~/lib/axios";
import { PostCreateDto } from "../types";
import { getListUrl } from "../urls/api";


const createPost = async (data: PostCreateDto) => {
  const response = await axios.post(getListUrl(), data)
  return response.data;
};

export default createPost;
