import {instance} from "../instance";

export enum UrlMainPage {
    agentOur = 'agent/our',             //get
    developerOur = 'developer/get/our',     //get
    newsSubscription = 'news-subscription',     //post
    bestObject = 'objects/best',     //get
}

export const mailPage ={
    getAgentOur:async (amount:number)=>{
        try{
            return await instance.get<mainAgentsType>(`${UrlMainPage.agentOur}?amount=${amount}`)
        }catch (e:any) {
            return e
        }
    },
    newSubscription:async (name:string,email:string,phone:string)=>{
        try{
            await instance.post(`${UrlMainPage.newsSubscription}`,{name,email,phone})
            alert(`Спасибо за подписку`)
        }catch (e:any) {
            alert(e.response.data.message)
        }
    },
    bestObjects:async (number:number)=>{
        let res
        try{
             res = await instance.get(`${UrlMainPage.bestObject}?take=${number}`)
           return res.data
        }catch (e:any) {
            return []
            alert(e)
        }
    },
    getDeveloperOur:async (amount:number)=>{
        try{
            return await instance.get(`${UrlMainPage.developerOur}?amount=${amount}`)
        }catch (e:any) {
            return e
        }
    },

}
type mainAgentsType={
    data:[]
}