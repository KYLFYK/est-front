import AxiosHttpClient from "../base";
import axios from "axios";

export enum UrlAuth  {
    registration = 'auth/register', //          post
    login = 'auth/login', //                    post
    refresh = 'auth/refresh', //                post
    check = 'auth/check', //                    get
    me = 'auth/me', //                          get
    resetPassword = 'auth/reset-password', //   post
    changePassword = 'auth/change-password' //  patch
}

const instance = axios.create({
    baseURL: 'api/',
});
// const axios = new AxiosHttpClient()

export const AuthApi  = {
    login: async (publicKey:string, privateKey:string) =>{
        const res = await instance.post(`${UrlAuth.login}`,{publicKey,privateKey})
        console.log(res)
    }
}