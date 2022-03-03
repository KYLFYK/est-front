import {instance} from "../instance";

export enum UrlMainPage {
    leads = 'leads'
}

export const leadsAPI = {
    getAllLeads: async () => {
        try{
            const res = await instance.get(`${UrlMainPage.leads}`)
            return res
        }catch (e: any) {
            return e
        }
    },

    getSingleLead: async (id: number) => {
        try{
            const res = await instance.get(`${UrlMainPage.leads}/${id}`)
            return res
        }catch (e: any) {
            return e
        }
    },

    createLead: async (payload: any) => {
        console.log('payload', payload)
        try{
            const res = await instance.post(`${UrlMainPage.leads}`, payload)
            return res
        }catch (e: any) {
            return e
        }
    },

    updateLead: async (id: number, payload: any) => {
        try{
            const res = await instance.patch(`${UrlMainPage.leads}/${id}`, payload)
            return res
        }catch (e: any) {
            return e
        }
    },

    deleteLead: async (id: number) => {
        try{
            const res = await instance.delete(`${UrlMainPage.leads}/${id}`)
            return res
        }catch (e: any) {
            return e
        }
    },
}
