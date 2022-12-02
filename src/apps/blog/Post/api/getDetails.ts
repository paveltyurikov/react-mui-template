import { axios } from "lib/axios";
import { IPost } from "../types";
import { getPostDetailsUrl } from "../urls/api";


const getPostDetails = async (id: IPost["id"]) => {
  const response = await axios.get(getPostDetailsUrl(id));
  return response.data;
};

export default getPostDetails;
