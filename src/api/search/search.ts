import {instance, UrlSearch} from "../instance";

export const SearchApi  = {
    getFilteredObj: async (params: any) =>{
        try{
            const res = await instance.get(`${UrlSearch.search}`, { params: params })
            console.log(res)
            return res
        }
        catch (e){
            console.log('error', e)
        }
    },
}




