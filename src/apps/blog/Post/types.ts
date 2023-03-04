import { TextNullable, TimeStamp, UUID } from "~/lib/types";


export interface IPostCreate {
  title: string;
  content: TextNullable;
}

export interface IPost extends IPostCreate {
  id: UUID;
  published?: TimeStamp;
  created?: TimeStamp;
  updated?: TimeStamp;
  deleted?: TimeStamp;
}

export type IPostFilterParams = any;
