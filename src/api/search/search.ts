import qs from "qs";
import {instance, UrlSearch} from "../instance";
import { transformRequestOptions } from "src/lib/mapping/urlPathCollect";

export const SearchApi = {
    getFilteredObj: async (params: any) =>{
        try{
            const res = await instance.get(`${UrlSearch.search}`, 
                { params: { ...params, 
                    'rooms-in-apartment': params['rooms-in-apartment']?.split(','), 
                    'rooms-in-house': params['rooms-in-house']?.split(','), 
                    benefit: params.benefit?.split(',') 
                }, paramsSerializer: params => transformRequestOptions(params)}
            )
            return res.data
        }
        catch (e){
            console.log('error', e)
        }
    },
}




