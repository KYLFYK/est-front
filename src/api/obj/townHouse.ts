import {instance, UrlObj} from "../instance";

export const TownHouseApi  = {
    getAllTownHouse: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.townhouse}`, {skip, take})

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },

    getTownHouseById: async (id: number) =>{
        try{
            const res = await instance.get(`${UrlObj.townhouse}/${id}`)

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },
}




