import {instance, altInstance, UrlSearch} from "../instance";
import { transformRequestOptions } from "src/lib/mapping/urlPathCollect";

export const SearchApi = {
    getFilteredObj: async (params: any) =>{
        try{
            const res = await altInstance.get(`${UrlSearch.altSearch}?filters=[{"type__slug": "land"}]`/*, 
                { params: { ...params}, paramsSerializer: params => transformRequestOptions(params)}*/
            )
            return res.data
        }
        catch (e){
            console.log('error', e)
        }
    },
}




