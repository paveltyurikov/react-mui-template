export interface IPostCreate {
  title: string;
  content: string;
}

export interface IPost extends IPostCreate {
  id: string;
  created: string;
  updated: string;
  deleted: string;
}

export interface IPostFilterParams extends Partial<IPost> {}
