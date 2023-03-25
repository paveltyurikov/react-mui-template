import { RootDomain } from "./domains";


export type ReactChildren = {
  children: React.ReactNode | React.ReactNode[];
};

export type Url = `${
  | "http"
  | "https"
  | "ws"
  | "wss"}://${string}.${RootDomain}${any}`;

export type Email = `${string}@${string}.${RootDomain}`;

export type Date = `${number}-${number}-${number}`
export type DateTime = `${number}-${number}-${number} ${number}:${number}:${number}`
export type DateTimeUtc = `${number}-${number}-${number}:${number}:${number}.${number}[${number}]`

export type UUID = string;

export type TimeStampNullable = DateTime | null;

export type TextNullable = string | null;

export type Text = string;

export type ReactNode = {
  children: React.ReactNode;
};
