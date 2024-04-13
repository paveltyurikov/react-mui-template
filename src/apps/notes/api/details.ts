import { axios } from "~/lib/axios";
import { IPost } from "../types";
import { getDetailsUrl } from "../urls/api";


const getPostDetails = async (id: IPost["id"]) => {
  const response = await axios.get(getDetailsUrl(id))
  return response.data;
};

export default getPostDetails;
