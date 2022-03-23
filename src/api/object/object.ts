import {instance, UrlObj} from "../instance";

export const ObjectApi  = {
    getObjectIn: async (lat: number, lng: number) =>{
        try{
            const res = await instance.get(`${UrlObj.objects}/in`, {params: {latitude: lat, longitude: lng}})
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },
}




