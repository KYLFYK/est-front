
import AxiosHttpClient from "../base";
import { IObjectResponse } from "./interfaces";

class PlaceAPI extends AxiosHttpClient {

    private readonly axiosV1: AxiosHttpClient
    private readonly axiosV0: AxiosHttpClient

    constructor(){
        super()
        this.axiosV1 = new AxiosHttpClient(1)
        this.axiosV0 = new AxiosHttpClient(0)
    }

    async getRuPlaces(){
        const res = await this.axiosV1.get<IObjectResponse>(`objects`, {lang: 'ru'})
        return res.data.data.objects
    }
    
    async getChPlaces(){
        const res = await this.axiosV1.get<IObjectResponse>(`objects`, {lang: 'zh'})
        return res.data.data.objects
    }
}

/**
 * Object API Instance Singleton 
 */
export default new PlaceAPI()