import { IPost } from "~/apps/blog/Post/types";
import createPost from "./create";
import deletePost from "./delete";
import getPostDetails from "./details";
import getPostList from "./list";
import updatePost from "./update";


interface IPostApi {
  getListUrl: () => string;
  getDetailUrl: (id: IPost["id"]) => string;
}

export class PostApi2 implements IPostApi {
  getListUrl = () => "";
  getDetailUrl = (id:IPost["id"]) => "";
  constructor(
    getListUrl: IPostApi["getListUrl"],
    getDetailUrl: IPostApi["getDetailUrl"]
  ) {
    this.getListUrl = getListUrl;
    this.getDetailUrl = getDetailUrl;
  }
}

const PostApi = {
  create: createPost,
  delete: deletePost,
  details: getPostDetails,
  list: getPostList,
  update: updatePost,
};

export default PostApi;
