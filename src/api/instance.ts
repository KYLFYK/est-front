import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    skip?: number;
    take?: number;
  }
}

export const instance = axios.create({
  // baseURL: 'http://185.98.83.46:443/api/',
  // baseURL: 'https://estatum.f-case.ru/api/',
  baseURL: process.env.HOST,
  headers: {
    authorization: `Bearer ''`,
  },
});

export const altInstance = axios.create({
  baseURL: 'https://estat.101bot.ru/api/v1',
});

export enum UrlObj {
  complex = "complex",
  townhouse = "townhouse",
  apartment = "apartment",
  house = "house",
  land = "land",
  objects = "objects",
}

export enum UrlSearch {
  search = "search",
  altSearch = "reality-objects"
}
