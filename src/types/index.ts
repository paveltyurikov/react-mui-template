import { AxiosError, AxiosResponse } from "axios";
import { TFunction } from "i18next";

export type Translate = TFunction;

export type ResponseError<T = unknown, D = never> = AxiosError<T, D>;
export type HttpResponse<T = unknown, D = never> = AxiosResponse<T, D>;
