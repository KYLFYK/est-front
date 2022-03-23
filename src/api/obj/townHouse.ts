import {instance, UrlObj} from "../instance";

export const TownHouseApi  = {
    getAllTownHouse: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.townhouse}`, {params: {skip: skip, take: take}})
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },

    getTownHouseById: async (id: number) =>{
        try{
            const res = await instance.get(`${UrlObj.townhouse}/${id}`)
        }
        catch (e){
            console.log('error', e)
        }
    },
}




