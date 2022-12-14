import {instance} from "../instance";

export enum UrlMainPage {
    accountOur = 'auth/me',             //get
}

export const adsAPI ={
    getAgentAds: async () => {
        try{
            const res = await instance.get<CabinetAgentType>(`${UrlMainPage.accountOur}`,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
                }
            })
            return res
        }catch (e:any) {
            return e
        }
    },
    
}

export type UpdateAgencyCabinetType ={

}

export type UpdateAgentCabinetType ={
    "phone": Array<{"ord": number,"value": string, }>
    "name": string,
    "position": string,
    "experience": string,
    "rating": number
    "inviteLink": string,
    "messengers": {
        "whatsApp": string,
        "telegram": string,
    }
}

export type CabinetDeveloperType ={
    data:{
        createAt: string
        customerProperty: {id: boolean, name: string, phone: string}
        email: string
        id: number
        isConfirmed: boolean
        markAsDelete: boolean
        phone: string
        role: string
        updateAt: string
    }
}

export type CabinetAgentType ={
    data:{
        createAt: string
        developerProperty: {
            INN: null | number
            KPP: null  | number
            OGRN: null  | number
            OKATO: null  | number
            OKFS: null  | number
            OKOGU: null  | number
            OKOPF: null  | number
            OKPO: null  | number
            OKTMO: null  | number
            address: null  | string
            authorizedCapital: null  | string
            branch: null  | string
            description: null  | string
            enterpriseSize: null  | string
            extraOccupations: null  | string
            founders: null  | string
            id: 11
            leaderName: null  | string
            legalAddress: null  | string
            legalFullName: null  | string
            mainOccupation: null  | string
            name:  string
            netAssets: null  | string
            netProfit: null  | string
            numberOfStaff: null  | string
            phone: Array<{ord: number, value: string}>
            press: []
            registeringAuthorityLocated: null  | string
            registrationAuthorityAddress: null  | string
            registrationAuthorityName: null  | string
            registrationDate: null  | string
            revenue: null  | string
            risks: null  | string
            site: null  | string
            statistics: null  | string
            status: null  | string
            type: null  | string
        }
        email: string
        id: number
        isConfirmed: boolean
        markAsDelete: boolean
        phone: string
        role: string
        updateAt: string
    }
}