import {instance, UrlObj} from "../instance";

export const ApartmentApi  = {
    getAllApartment: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.apartment}`, {skip, take})
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },

    getApartmentById: async (id: string | string[] | undefined) =>{
        try{
            const res = await instance.get(`${UrlObj.apartment}/${id}`)
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },
}




