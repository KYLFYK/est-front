import axios from "axios";
import {defaultProps} from "downshift/dist/src/hooks/utils";

declare module "axios" {
  export interface AxiosRequestConfig {
    skip?: number;
    take?: number;
  }
}

export const instance = axios.create({
  // baseURL: 'http://185.98.83.46:443/api/',
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
