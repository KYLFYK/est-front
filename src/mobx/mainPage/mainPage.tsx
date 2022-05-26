import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {mailPage} from "../../api/mainPage/mainPage";
import {mockObjects} from "../../components/containers/DevelopersContainer/DevelopersContainer";
import AgentsContainerStories from "src/components/containers/AgentsContainer/AgentsContainer.stories";
import {instanceV2} from "../../api/instancev2";
import {searchFloor} from "../../components/containers/BestOffers/bestOffers";

class MainPageStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        developers: [
            {
                id:0,
                img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
                // img: developer.developerProperty.logo,
                title: '',
                description: '',
                developerInfo: {
                    title: '',
                    location: '',
                    passed: '',
                    objectsDeveloper: mockObjects  //  <- WANTED MOCK
                },
            }],
        agents: [{
            id: 1,
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
            connection: {
                whatsApp: '',
                telegram: '',
                email: '',
                phone: '',
            },
            infoAgent: {
                fullName: '',
                heldPost: '',
                professionalExperience: '',
                completed: '',
                inWork: '',

                whatsApp: '',
                telegram: '',
                email: '',
                phone: '',
            }
        }],
        bestOffers: [],
        bestOffersFilter: [],
        complexDeveloper: [{
            name: '',
            id: 0,
        }]
        ,tagsButton :  ["Квартира", "Дом", "Новостройка", "Вторичное жилье", "ЖК"],
        bestOffersV2:[]
    }

    async fetchAgents() {
        const res = await mailPage.getAgentOur(3)
        const date = new Date()
        const years = date.getFullYear()
        this.initialData.agents = res.data?.map((agent: any) => (
            {
                id: agent.id,
                img: agent.agentProperty?.file !== undefined && agent.agentProperty?.file[0]?.url
                    ? agent.agentProperty.file[0].url
                    : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
                connection: {
                    whatsApp: agent.agentProperty.messengers?.whatsApp ? agent.agentProperty.messengers.whatsApp : '',
                    telegram: agent.agentProperty.messengers?.telegram ? agent.agentProperty.messengers.telegram : '',
                    email: agent.email,
                    phone: agent.agentProperty.phone[0].value,
                },
                infoAgent: {
                    fullName: agent.agentProperty.name,
                    heldPost: agent.agentProperty.position ? agent.agentProperty.position : 'агент',
                    professionalExperience: (years - +(agent.agentProperty?.experience?.substr(0, 4) ? agent.agentProperty?.experience?.substr(0, 4) : years)).toString(),
                    completed: agent.agentProperty?.rating?.toString() ? agent.agentProperty.rating.toString() : '0',   //  <- WANTED MOCK
                    inWork: agent.agentProperty?.rating?.toString() ? agent.agentProperty.rating.toString() : '0',      //  <- WANTED MOCK

                    whatsApp: agent.agentProperty.messengers?.whatsApp ? agent.agentProperty.messengers.whatsApp : '',
                    telegram: agent.agentProperty.messengers?.telegram ? agent.agentProperty.messengers.telegram : '',
                    email: agent.email,
                    phone: agent.phone,
                }
            }
        ))
    }

    async fetchDevelopers() {
        const developers = await mailPage.getDeveloperOur(10)
        this.initialData.developers = developers.data?.map((developer: any) => (
            {
                id: developer.id,
                img: developer.developerProperty?.logo 
                    ? developer.developerProperty.logo 
                    : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
                // img: developer.developerProperty.logo,
                title: developer.developerProperty.name,
                description: developer.developerProperty.type,
                developerInfo: {
                    title: developer.developerProperty.name,
                    location: developer.developerProperty.address,
                    passed: '50 in 50',              //  <- WANTED MOCK
                    objectsDeveloper: mockObjects  //  <- WANTED MOCK
                },
            }
        ))
    }

    async fetchBestOffers(count:number,isOld:boolean,isNew:boolean,isComplex:boolean,isHouse:boolean,isApartment:boolean) {

        const bestOfferNew = await mailPage.bestObjects1(count,isOld,isNew,isComplex,isHouse,isApartment)
        // const searchAllFloor = (type:string,object:any) =>{
        //     if(type==="apartment"){
        //         return object.property.floor
        //         return object.property.totalFloor
        //     }if(type==="apartment"){
        //         return object.property.floor
        //         return object.property.totalFloor
        //     }if(type==="apartment"){
        //         return object.property.floor
        //         return object.property.totalFloor
        //     }
        // }

        this.initialData.bestOffers = bestOfferNew.map((object: any) => (
            {
                id: object.id,
                name: object.name,
                address: object.address,
                type: object.objectName ==='complex' ? "residential-complex" :object.objectName,
                price:object.objectName !=='complex'? object.price: object.property.priceObjectMin !== null ? object.property.priceObjectMin : '10000000',
                property: {
                    floor: object.property.floor?object.property.floor:'-', // moc
                    totalFloor:object.objectName ==='complex'? object.property.amountFloors : object.property.totalFloor, // moc
                    images: [],
                    object_id: object.id,
                    name: object.name,
                    description: '',
                },
                files: object.files ? object.files.sort((a: any, b: any) => a.id > b.id ? 1 : -1) : [],
            }
        ))
    }
    async fetchBestOffersV2(){
        const res =  await  instanceV2.get('https://estat.101bot.ru/api/v1/reality-objects/')

        // const inRes = res.data.results[0]
        const inRes1 = res.data.results
        // const allObjectsBestOffersV2 = inRes1.map((object:any)=>({
        //         id:object.id,
        //         files:
        //             object.images.map((img:any)=>({
        //                 id:img.id,
        //                 url:img.image_file,
        //             }))
        //         ,
        //         address:object.address.full_address,
        //         price:object.params.length>0?object.params.find( (p:any) => p.reality_object_param.name_rus==='Стоимость квартир').value_text : '',
        //         type:object.type.slug,
        //         name:object.name,
        //         property:{
        //             totalFloor:object.params.length>0? object.params.find((p:any) => p.reality_object_param.name_rus==="Этажность").value_text  : '',
        //         },
        //         type_residential:object.params.length>0? object.params.find((p:any) => p.reality_object_param.name_rus==="Тип жилья").value_text  : '',
        //     })
        // )
        const allObjectsBestOffersV2 = inRes1.map((object:any)=>({
                id:object.id,
                files:
                    object.images?.map((img:any)=>({
                        id:img.id,
                        url:img.image_file,
                    }))
                ,
                address:object.address !== null
                    && object.address.full_address !== null
                        ? object.address.full_address
                        :'',
                // price:object.params.length>0
                //     ?object.params.find( (p:any) => p.reality_object_param.name_rus==='Стоимость квартир').value_text
                //     : '',
                price:object.price,
                type:object.type!== null
                    && object.type.slug !== null
                        ? object.type.slug
                        :'',
                name:object.name !== null ? object.name :'',
                property:{
                    totalFloor: searchFloor(object,"Этажность") !== undefined
                        ? searchFloor(object,"Этажность")
                        : 0,
                    floor:searchFloor(object,"Этаж") !== undefined
                        ? searchFloor(object,"Этаж")
                        : 0
                }
            })
        )


        this.initialData.bestOffersV2= allObjectsBestOffersV2
        // type objects,этаж, type
    }

    async fetchComplexDeveloper(id: number) {
        const complex = await mailPage.bestObjectsModalDeveloper(id)
        this.initialData.complexDeveloper = complex.map((re: any) => (
            {
                id: re.id,
                name: re.name
            }
        ))
    }

    filterBestOffer(tags:Array<string>|[]){
        const result =
            tags.map(tag=>{
              return this.initialData.bestOffers
                    .filter((offers:any)=>{
                        return offers.type === tag && offers
                    })
            })
        this.initialData.bestOffersFilter = result.flat(1)
    }

    get() {
        return JSON.parse(JSON.stringify([...this.initialData.agents]))
    }
}

const StoreContext = createContext<MainPageStore>(new MainPageStore());

const StoreProvider: FC<{ store: MainPageStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreMainPage = () => {
    return useContext(StoreContext);
};

export {MainPageStore, StoreProvider, useStoreMainPage};


type FetchMainDeveloperType = {
    "id": number
    "createAt": string
    "updateAt": string
    "email": string
    "phone": string
    "markAsDelete": boolean,
    "isConfirmed": boolean,
    "role": string
    "customerProperty": null | boolean
    "developerProperty": {
        logo: string
        "id": number
        "name": string
        "type": string
        "phone": Array<{ ord: string, value: number }>
        "address": string
        "site": string
        "description": string
        "legalFullName": string
        "legalAddress": string
        "authorizedCapital": number
        "OKFS": string
        "OKOPF": string
        "OKOGU": null | string
        "INN": string
        "OGRN": string
        "KPP": string
        "OKATO": null | string
        "OKPO": string
        "OKTMO": string
        "status": string
        "leaderName": string
        "founders": string
        "enterpriseSize": number
        "numberOfStaff": number
        "branch": number
        "revenue": number
        "netProfit": number
        "netAssets": number
        "registrationDate": string
        "registrationAuthorityName": string
        "registrationAuthorityAddress": string
        "registeringAuthorityLocated": string
        "mainOccupation": string
        "extraOccupations": Array<{ ord: string, value: number }>
        "statistics": Array<{ items: Array<{ items: string, value: number }>, title: string }>
        "risks": null | boolean
    },
    "agencyProperty": null | boolean
    "agentProperty": null | boolean
    "adminProperty": null | boolean
    "bankProperty": null | boolean
}

type DeveloperType = {
    img: string
    title: string
    description: string
    developerInfo: {
        title: string
        location: string
        passed: string
        objectsDeveloper: Array<{ nameObject: string, id: string }>
    }
}
type AgentsType = {
    img: string
    connection: {
        whatsApp: string
        telegram: string
        email: string
        phone: string
    },
    infoAgent: {
        fullName: string
        heldPost: string
        professionalExperience: string
        completed: string
        inWork: string

        whatsApp: string
        telegram: string
        email: string
        phone: string
    }
}
export type FetchMainType = {
    agents: Array<AgentsType>
    developersArray: Array<DeveloperType>
}