import {instance, UrlObj} from "../instance";

export const ComplexApi  = {
    getAllComplex: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.complex}`, {params: {skip: skip, take: take}})
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },

    getAllComplexByOwnerId: async (ownerId: number) =>{
        try{
            const res = await instance.get(`${UrlObj.complex}/getByOwner/${ownerId}`)
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },

    getAllObjectsByComplexId: async (ownerId: number) =>{
        try{
            const res = await instance.get(`${UrlObj.complex}/getByOwner/${ownerId}`)
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },

    getComplexById: async (id: string | string[] | undefined) =>{
        try{
            const res = await instance.get(`${UrlObj.complex}/${id}`)
        }
        catch (e){
            console.log('error', e)
        }
    },
}




