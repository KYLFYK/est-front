import {instance} from "../instance";

export enum UrlMainPage {
    agentOur = 'agent/our',             //get
    developerOur = 'developer/our',     //get
    newsSubscription = 'news-subscription',     //get
}

export const mailPage ={
    getAgentOur:async (amount:number)=>{
        try{
            return await instance.get<mainAgentsType>(`${UrlMainPage.agentOur}?amount=${amount}`)
        }catch (e) {
            return e
        }
    },
    newSubscription:async (name:string,email:string,phone:string)=>{
        try{
            await instance.post(`${UrlMainPage.newsSubscription}`,{name,email,phone})
            alert(`Спасибо что подписались на новости ${name}`)
        }catch (e:any) {
            alert(e)
        }
    }
}
type mainAgentsType={
    data:[]
}