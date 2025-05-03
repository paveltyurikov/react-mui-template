export type UUID = string;

export type TimeStamp = DateTime;

export interface Dates {
  created_at: TimeStamp;
  updated_at: TimeStamp;
  deleted_at: TimeStamp;
}

export interface ModelBase extends Dates {
  id: UUID;
}

export type TextNullable = string | null;

export type Text = string;

export type Url = `${
  | "http"
  | "https"
  | "ws"
  | "wss"}://${string}.${string}${any}`;

export type Email = `${string}@${string}.${string}`;

export type Date = `${number}-${number}-${number}`;
export type DateTime =
  `${number}-${number}-${number} ${number}:${number}:${number}`;
export type DateTimeUtc =
  `${number}-${number}-${number}:${number}:${number}.${number}[${number}]`;

export type TimeStampNullable = DateTime | null;

export interface IUser extends ModelBase {
  email: Email;
  password: string;
}

export type NavigationItemType = {
  Icon: any;
  path: string;
  title: string;
};

export type JwtToken = {
  access: string;
  refresh: string;
};
