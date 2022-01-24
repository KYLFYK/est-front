import qs from "qs";
import {instance, UrlSearch} from "../instance";
import { transformRequestOptions } from "src/lib/mapping/urlPathCollect";

export const SearchApi = {
    getFilteredObj: async (params: any) =>{
        try{
            const res = await instance.get(`${UrlSearch.search}`, 
                { params: { ...params, rooms: params.rooms?.split(',') }, paramsSerializer: params => transformRequestOptions(params)}
            )
            return res.data
        }
        catch (e){
            console.log('error', e)
        }
    },
}




