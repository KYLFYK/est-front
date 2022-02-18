import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {mailPage} from "../../api/mainPage/mainPage";
import {mockObjects} from "../../components/containers/DevelopersContainer/DevelopersContainer";

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
        ,tagsButton :  ["Квартира", "Дом", "ЖК", "Новостройка", "Вторичное жилье"]
    }

    async fetchAgents() {
        const res = await mailPage.getAgentOur(3)
        const date = new Date()
        const years = date.getFullYear()
        this.initialData.agents = res.data.map((agent: any) => (
            {
                id: agent.id,
                img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
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
        this.initialData.developers = developers.data.map((developer: any) => (
            {
                id:developer.id,
                img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
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

    async fetchBestOffers() {
        const bestOffers = await mailPage.bestObjects(10)
        this.initialData.bestOffers = bestOffers.map((object: any) => (
            {
                id: object.id,
                name: object.name,
                address: object.address,
                type: object.guides.map((t: any) => t.type_en === 'objectType' ? t.value : '').filter((t: any) => t !== '')[0],
                price: object.price,
                property: {
                    floor: 3, // moc
                    totalFloor: 15, // moc
                    images: [],
                    object_id: object.id,
                    name: object.name,
                    description: '',
                }
            }
        ))

    }
    async fetchBestOffers1(count:number,isOld:boolean,isNew:boolean,isComplex:boolean,isHouse:boolean,isApartment:boolean) {

        const bestOfferNew = await mailPage.bestObjects1(count,isOld,isNew,isComplex,isHouse,isApartment)

        this.initialData.bestOffers = bestOfferNew.map((object: any) => (
            {
                id: object.id,
                name: object.name,
                address: object.address,
                type: object.objectName ==='complex' ? "residential-complex" :object.objectName,
                price:object.objectName !=='complex'? object.price: object.property.priceObjectMin !== null ? object.property.priceObjectMin : '10000000',
                property: {
                    floor: 3, // moc
                    totalFloor: 15, // moc
                    images: [],
                    object_id: object.id,
                    name: object.name,
                    description: '',
                }
            }
        ))
        console.log("bestOfferNew",bestOfferNew,[isOld,isNew,isComplex,isHouse,isApartment])
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
        console.log(JSON.parse(JSON.stringify({...this.initialData})))
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