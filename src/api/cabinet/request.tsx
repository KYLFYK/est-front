import {instance} from "../instance";

export enum UrlMainPage {
    getRequest = 'view-application/owner/',             
}

export const reqAPI ={
    getAgentReq: async (ownerId: number) => {
        try {
            const res = await instance.get(`${UrlMainPage.getRequest}${ownerId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
                }
            })
            return res
        } catch (e: any) {
            return e
        }
    },
    
}
