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
// "proxy": "https://estatum.f-case.ru/",
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwucnUiLCJyb2xlIjoiYWRtaW4iLCJpZCI6MSwiaWF0IjoxNjQwNzczNjMzLCJleHAiOjE2NDA4NjAwMzN9.PepqZY16_PKxJX6keNG_4Ft9NIrTAskNiWn-rJEVOFk'

const instance = axios.create({
    baseURL: 'https://estatum.f-case.ru/api/',
    // baseURL: 'api/',
    headers:{
        authorization: `Bearer ${token}`,
    }
});
// const axios = new AxiosHttpClient()

export const AuthApi  = {
    login: async (publicKey:string, privateKey:string) =>{
        try{
            const res = await instance.post(`${UrlAuth.login}`,{publicKey,privateKey})
            console.log(res)
        }
        catch (e){
            console.log(e)
        }
    },
    me:async ()=>{
        const res = await instance.get(`${UrlAuth.me}`)
        console.log(res)
        console.log(instance)
    },
    check:async(token:string)=>{
        const res = await instance.get(`${UrlAuth.check}`,{headers:{token:token}})
        console.log(res)
    }
}



