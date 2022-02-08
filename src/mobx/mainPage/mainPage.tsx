import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {mailPage} from "../../api/mainPage/mainPage";
import {mockObjects} from "../../components/containers/DevelopersContainer/DevelopersContainer";

class MainPageStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData = {
        developers:[
            {
                // id:developer[index].id,
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
            }
            // {
            // account:{id: '1',
            //     src: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
            //     profileForm: {
            //         name: "Брусника",
            //         type: "Девелоперская компания",
            //         address: "5 лет",
            //         phone: "+7 (123) 456-78-90",
            //         email: "email@mail.ru",
            //         site: "brusnika.ru",
            //         description:
            //             "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
            //     },
            // },
            // setting:{
            //     phoneNumber: "+7 (123) 456-78-90",
            //     login: "brusnika",
            //     oldPassword: "12345678",
            //     newPassword: "1234567890",
            //     noticePhone: "+7 (123) 456-78-90",
            //     noticeEmail: "email@email.ru",
            // }
        ],
        agents:[{
            id: 1,
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
            connection: {
                whatsApp: '' ,
                telegram:  '' ,
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
                telegram:'',
                email:'',
                phone: '',
            }
        }]
    }
    async fetch() {
        const res =  await mailPage.getAgentOur(3)
        const date = new Date()
        const years = date.getFullYear()
        this.initialData.agents = res.data.map((agent:any)=>(
            {
                id: agent.id,
                img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
                connection: {
                    whatsApp: agent.agentProperty.messengers?.whatsApp ? agent.agentProperty.messengers.whatsApp : '' ,
                    telegram: agent.agentProperty.messengers?.telegram? agent.agentProperty.messengers.telegram : '' ,
                    email: agent.email,
                    phone: agent.agentProperty.phone[0].value,
                },
                infoAgent: {
                    fullName: agent.agentProperty.name,
                    heldPost: agent.agentProperty.position?agent.agentProperty.position:'агент',
                    professionalExperience: (years - +(agent.agentProperty?.experience?.substr(0, 4)? agent.agentProperty?.experience?.substr(0, 4) :years) ).toString(),
                    completed: agent.agentProperty?.rating?.toString() ?agent.agentProperty.rating.toString() : '0',   //  <- WANTED MOCK
                    inWork: agent.agentProperty?.rating?.toString() ?agent.agentProperty.rating.toString() : '0',      //  <- WANTED MOCK

                    whatsApp: agent.agentProperty.messengers?.whatsApp? agent.agentProperty.messengers.whatsApp : '' ,
                    telegram: agent.agentProperty.messengers?.telegram? agent.agentProperty.messengers.telegram : '' ,
                    email: agent.email,
                    phone: agent.phone,
                }
            }
        ))
        const developers = await mailPage.getDeveloperOur(5)
        this.initialData.developers = developers.data.map((developer:any)=>(
            {
                // id:developer[index].id,
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

        console.log("agents",JSON.parse(JSON.stringify({ ...this.initialData})))
    }
    get() {
        console.log(JSON.parse(JSON.stringify({ ...this.initialData})))
    }
}

const StoreContext = createContext<MainPageStore>(new MainPageStore());

const StoreProvider: FC<{ store: MainPageStore}> = ({ children, store }) =>  (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreMainPage = () => {
    return useContext(StoreContext);
};

export { MainPageStore, StoreProvider, useStoreMainPage };