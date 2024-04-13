import { axios } from "~/lib/axios";
import { PostUpdateDto } from "../types";
import { getDetailsUrl } from "../urls/api";


const updatePost = async (id: string, data: PostUpdateDto) => {
  const response = await axios.patch(getDetailsUrl(id), data);
  return response.data;
};

export default updatePost;
