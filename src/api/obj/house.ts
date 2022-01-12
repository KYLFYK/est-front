import {instance, UrlObj} from "../instance";

export const HouseApi  = {
    getAllHouse: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.house}`, {skip, take})

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },

    getHouseById: async (id: number) =>{
        try{
            const res = await instance.get(`${UrlObj.house}/${id}`)

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },
}




