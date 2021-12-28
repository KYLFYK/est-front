import AxiosHttpClient from "../base";
import axios from "axios";
import {json} from "stream/consumers";

export enum UrlAuth  {
    registration = 'auth/register', //          post
    login = 'auth/login', //                    post
    refresh = 'auth/refresh', //                post
    check = 'auth/check', //                    get
    me = 'auth/me', //                          get
    resetPassword = 'auth/reset-password', //   post
    changePassword = 'auth/change-password' //  patch
}
// "proxy": "https://estatum.f-case.ru/",
const instance = axios.create({
    baseURL: 'api/',
    // headers:{'Content-Type':'application/json'},
});
// const axios = new AxiosHttpClient()

export const AuthApi  = {
    login: async (publicKey:string, privateKey:string) =>{
        const res = await instance.post(`${UrlAuth.login}`,{publicKey,privateKey})
        console.log(res)
    },
    me:async ()=>{
        const res = await instance.get(`${UrlAuth.me}`)
        console.log(res)
    }
}