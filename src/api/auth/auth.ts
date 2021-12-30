import axios from "axios";
import jwt_decode from "jwt-decode";

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
    baseURL: 'https://estatum.f-case.ru/api/',
    // baseURL: 'api/',
    headers:{
        authorization: `Bearer ''`,
    }
});
// const axios = new AxiosHttpClient()
type TokenType ={
    adminProperty: number
    agencyProperty: null
    agentProperty: null
    createAt: string
    customerProperty: null
    developerProperty: null
    email: string
    id: number
    markAsDelete: false
    role: string
    updateAt: string
}

export const AuthApi  = {
    login: async (publicKey:string, privateKey:string) =>{
        try{
            const res = await instance.post(`${UrlAuth.login}`,{publicKey,privateKey})
            const token : TokenType = jwt_decode(res.data.access)
            localStorage.setItem('accessEstatum',res.data.access)
            localStorage.setItem('refreshEstatum',res.data.refresh)
            localStorage.setItem('roleEstatum',token.role)
            console.log("res",res)
        }
        catch (e){
            console.log('error',e)
        }
    },
    me:async ()=>{
        try{
            await instance.get(`${UrlAuth.me}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessEstatum')}`
                }
            })
        }catch (e){
            console.log('error', e)
        }
    },
    check:async()=>{ // error server need post  ( get - no body params)
        try{
            console.log('token1',localStorage.getItem('accessEstatum'))
            await instance.get(`${UrlAuth.check}`,{headers:
                    // { authorization:`Bearer ${localStorage.getItem('accessEstatum')}`}})
                    { token:`${localStorage.getItem('accessEstatum')}`}})
        }
        catch (e){
            try{
                console.log('token2',localStorage.getItem('accessEstatum'))
                await instance.get(`${UrlAuth.check}`,{headers:
                        // { authorization:`Bearer ${localStorage.getItem('refreshEstatum')}`}})
                        { token:`Bearer ${localStorage.getItem('refreshEstatum')}`}})
            }catch (e) {
                console.log('ERROR',e)
            }
        }
    }
}

export const testApi ={
    get:async()=>{
       const res = await axios.get('https://catfact.ninja/facts')
        console.log(res)
    },
    getApi:async()=>{
        const res = await axios.get('https://estatum.f-case.ru/api/agent/our')
        console.log(res)
    }
}



