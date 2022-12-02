import { IPost } from "../types";
import { POST_KEY } from "./base";


const getDetailsKey = (id: IPost["id"]) => {
  return [POST_KEY, "details", id];
};

export default getDetailsKey;
