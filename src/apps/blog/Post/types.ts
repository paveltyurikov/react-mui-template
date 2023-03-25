import { TextNullable, TimeStampNullable, UUID } from "~/constants/types";


export interface IPostCreate {
  title: string;
  content: TextNullable;
}

export interface IPost extends IPostCreate {
  id: UUID;
  published?: TimeStampNullable;
  created?: TimeStampNullable;
  updated?: TimeStampNullable;
  deleted?: TimeStampNullable;
}

export type IPostFilterParams = any;
