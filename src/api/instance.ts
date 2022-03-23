import axios from "axios";
declare module "axios" {
  export interface AxiosRequestConfig {
    skip?: number;
    take?: number;
  }
}

export const instance = axios.create({
  baseURL: process.env.HOST,
  // baseURL: 'api/',
  headers: {
    authorization: `Bearer ''`,
  },
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
}
