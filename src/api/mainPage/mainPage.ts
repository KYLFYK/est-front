import {instance} from "../instance";

export enum UrlMainPage {
    agentOur = 'agent/our',             //get
    developerOur = 'developer/get/our',     //get
    newsSubscription = 'news-subscription',     //post
    bestObject = 'objects/best',     //get
    bestObjectDeveloper = 'complex/getByOwner',     //get
    bestObject1 = 'objects/best-offers?',     //get
}

export const mailPage = {
    getAgentOur: async (amount: number) => {
        try {
            return await instance.get<mainAgentsType>(`${UrlMainPage.agentOur}?amount=${amount}`)
        } catch (e: any) {
            return e
        }
    },
    newSubscription: async (name: string, email: string, phone: string) => {
        try {
            await instance.post(`${UrlMainPage.newsSubscription}`, {name, email, phone})
            return 'Спасибо что подписались на новости'
        } catch (e: any) {
            return e.response.data.message
        }
    },
    bestObjects: async (number: number) => {
        let res
        try {
            res = await instance.get(`${UrlMainPage.bestObject}?take=${number}`)
            return res.data
        } catch (e: any) {
            return []
            alert(e)
        }
    },
    bestObjects1: async (number: number,isNew:boolean,isOld:boolean,isComplex:boolean,isHouse:boolean,isApartment:boolean) => {
        let res
        try {
            res = await instance.get(`${UrlMainPage.bestObject1}?isOld=${isNew}&isNew=${isOld}&isComplex=${isComplex}&isHouse=${isHouse}&isApartment=${isApartment}&take=${number}`)
            return res.data
        } catch (e: any) {
            return []
            alert(e)
        }
    },
    bestObjectsModalDeveloper: async (id: number) => {
        try {
            const res = await instance.get<Array<bestObjectsComplexDeveloperType>>(`${UrlMainPage.bestObjectDeveloper}/${id}`)
            return res.data
        } catch (e) {
            return [{id: '', name: ''}]
        }
    },
    getDeveloperOur: async (amount: number) => {
        try {
            return await instance.get(`${UrlMainPage.developerOur}?amount=${amount}`)
        } catch (e: any) {
            return e
        }
    },

}
type mainAgentsType = {
    data: []
}

type bestObjectsComplexDeveloperType = {
    address: string
    constructionProgress: []
    createAt: string
    description: string
    guides: Array<{
        id: number
        subtitle_en: string
        subtitle_ru: string
        type_en: string
        type_ru: string
        value: string
    }>
    id: number
    latitude: string
    longitude: string
    markAsDelete: boolean
    name: string
    objectType: string
    region: { id: number, name: string }
    status: { id: number, status: string }
    updateAt: string
    views: number
}