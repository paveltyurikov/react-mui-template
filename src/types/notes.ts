import { DateTime, ModelBase } from "~/lib/types";

export interface INote extends ModelBase {
  published: DateTime;
  title: string;
  content: string;
}

export interface NoteCreateDto {
  title: string;
  content: string;
}

export interface NoteUpdateDto extends ModelBase {
  title: string;
  content: string;
}

export type INoteFilters = {
  title?: string;
  content?: string;
};

export type NoteDetailsParams = { id: INote["id"] };
