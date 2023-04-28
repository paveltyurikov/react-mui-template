import { DateTime, ModelBase } from "~/lib/types";


export interface IPost extends ModelBase {
  published: DateTime,
  title: string;
  content: string;
}

export interface PostCreateDto {
  title: string;
  content: string;
}

export interface PostUpdateDto extends ModelBase {
  title: string;
  content: string;
}

export type IPostFilters = {
  title: string;
  content: string;
};
