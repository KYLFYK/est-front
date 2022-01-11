import {instance, UrlObj} from "../instance";

export const LandApi  = {
    getAllLand: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.land}`, {skip, take})

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },

    getLandById: async (id: number) =>{
        try{
            const res = await instance.get(`${UrlObj.land}/${id}`)

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },
}




