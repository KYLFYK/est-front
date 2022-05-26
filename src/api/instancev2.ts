import axios from "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        skip?: number;
        take?: number;
    }
}

export const instanceV2 = axios.create({
    // baseURL: 'http://185.98.83.46:443/api/',
    // baseURL: 'https://estatum.f-case.ru/api/',
    baseURL: "",
    // headers: {
    //     authorization: `Bearer ''`,
    // },
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
