import {instance} from "../instance";

export enum UrlMainPage {
    agentOur = 'agent/our',             //get
    developerOur = 'developer/our',     //get
}

export const mailPage ={
    getAgentOur:async (amount:number)=>{
        try{
            return await instance.get<mainAgentsType>(`${UrlMainPage.agentOur}?amount=${amount}`)
        }catch (e) {
            return e
        }
    }
}
type mainAgentsType={
    data:[]
}