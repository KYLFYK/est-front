import axios from "axios";
import jwt_decode from "jwt-decode";
import {instance} from "../instance";

export enum UrlAuth {
    registration = 'auth/register', //          post
    login = 'auth/login', //                    post
    refresh = 'auth/refresh', //                post
    check = 'auth/check', //                    get
    me = 'auth/me', //                          get
    resetPassword = 'auth/reset-password', //   post
    changePassword = 'auth/change-password', //  patch
    confirmEmail = 'auth/confirm-email' //  patch
}

type TokenType = {
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

export const AuthApi = {
    login: async (publicKey: string, privateKey: string) => {
        try {
            const res = await instance.post(`${UrlAuth.login}`, {publicKey, privateKey})
            const token: TokenType = jwt_decode(res.data.access)
            localStorage.setItem('accessEstatum', res.data.access)
            localStorage.setItem('refreshEstatum', res.data.refresh)
            localStorage.setItem('roleEstatum', token.role)
            return res.status
        } catch (e:any) {
            return( e.response.status)
        }
    },
    me: async () => {
        try {
            await instance.get(`${UrlAuth.me}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
                }
            })
        } catch (e) {
            console.log('error', e)
        }
    },
    check: async () => { // error server need post  ( get - no body params)
        let res
        try {
            res = await instance.post(`${UrlAuth.check}`, {token: `${localStorage.getItem('accessEstatum')}`})
            if (!res.data.isActive) {
                res = await instance.post(`${UrlAuth.check}`, {token: `${localStorage.getItem('refreshEstatum')}`})
                if (res.data.isActive){
                    res = await instance.post(`${UrlAuth.refresh}`, {token: `${localStorage.getItem('refreshEstatum')}`})
                    localStorage.setItem('accessEstatum', res.data.access)
                    localStorage.setItem('refreshEstatum', res.data.refresh)
                }
                if (!res.data.isActive && res.data.isActive!==undefined ){
                    localStorage.clear()
                    return res.data.isActive
                }
            }
        } catch (e) {
            localStorage.clear()
            return false
        }
    },
    registration: async (registration: RegistrationType) => {
        try {
           const res = await instance.post(`${UrlAuth.registration}`, registration)
            return res.request.status
        } catch (e:any) {
            return e.response.data.message
        }
    },
    resetPassword: async (email: any) => {
        try {
            const res = await instance.post(`${UrlAuth.resetPassword}`, {email: email})
            return res.request.status
        } catch (e:any) {
            return e.request.status
        }
    },
    resetPasswordGet: async (token: any) => {
        try {
            await instance.get(`${UrlAuth.resetPassword}`, token)
        } catch (e) {
            console.log(e)
        }
    },
    changePassword: async (newPassword: string, accountId: number, token: string) => {
       let res
        try {
           return res = await instance.patch(`${UrlAuth.changePassword}?newPassword=${newPassword}&accountId=${accountId}&token=${token}`)
        } catch (e:any) {
            return res = e.response.status
        }
    },
    confirmEmail: async (token: any) => {
        let res
        try {
            await instance.patch(`${UrlAuth.confirmEmail}/${token}`, token)
        } catch (e:any) {
            return e.response.status
        }

    }

}

export const testApi = {
    get: async () => {
        const res = await axios.get('https://catfact.ninja/facts')
    },
    getApi: async () => {
        const res = await axios.get('https://estatum.f-case.ru/api/agent/our')
        console.log(res)
    }
}

type RegistrationType = {
    publicKey: string
    privateKey: string
    role: string
    phone: string
    name:string
    // email:string
}

