import {instance} from "../instance";

export enum UrlMainPage {
    agentOur = 'agent/our',             //get
    developerOur = 'developer/our',     //get
    newsSubscription = 'news-subscription',     //post
    bestObject = 'objects/best',     //get
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
    },
    bestObjects:async (number:number)=>{
        try{
            const res =await instance.get(`${UrlMainPage.bestObject}?take=${number}`)
            console.log("resObject", res)
            const objects = res.data.map((object:any)=>(
                {
                    id:object.id,
                    name:object.name,
                    address:object.address,
                    type:object.guides.map((t:any)=>t.type_en==='objectType'? t.value:'').filter((t:any)=>t!=='')[0],
                    price:object.price
                }
            ))
           return objects
        }catch (e:any) {
            console.log("error",e.message)
            alert(e.message)
            return []
        }
    }
}
type mainAgentsType={
    data:[]
}