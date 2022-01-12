import {instance, UrlObj} from "../instance";

export const ComplexApi  = {
    getAllComplex: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.complex}`, {skip, take})

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },

    getComplexById: async (id: string | string[] | undefined) =>{
        try{
            const res = await instance.get(`${UrlObj.complex}/${id}`)

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },
}




