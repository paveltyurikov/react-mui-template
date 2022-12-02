import { IPost } from "../types";


export const POST_PATH = "/api/post";

export const getPostUrl = () => POST_PATH;

export const getPostListUrl = () => POST_PATH;

export const getPostDetailsUrl = (id: IPost["id"]) => `${POST_PATH}/${id}`;


