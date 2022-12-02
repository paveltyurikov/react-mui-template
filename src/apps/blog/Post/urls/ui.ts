import { IPost } from "../types";


export const POST_PATH = "/post";

export const getPostUrl = () => POST_PATH;

export const getPostDetailsUrl = (id: IPost["id"]) => `${POST_PATH}/${id}`;
