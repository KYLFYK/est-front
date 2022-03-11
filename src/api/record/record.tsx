import {instance} from "../instance";

export enum UrlRecord {
    registration = 'view-application', //          post
}
// ?objectId=1&objectType=house'

export const RecordApi  = {
    RecordPost: async (type:string,id:string,body:RecordPostType) =>{
        try{
            await instance.post(`${UrlRecord.registration}?objectId=${id}&objectType=${type}`,body )
            alert('Заявка зарегистрирована. С вами свяжется наш менеджер.')
        }
        catch (e){
            alert('Ошибка свяжитесь с администратором')
            console.log('error', e)
        }
    },
}
type RecordPostType ={
    "name": string
    "phone": string
    "email": string
    "comfortableTimeFrom": string
    "comfortableTimeTo":string
    "status": string
    "orderType": string
    "agentName": "string",
}