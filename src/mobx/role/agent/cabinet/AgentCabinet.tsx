import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {cabinetAPI, UpdateAgentCabinetType} from "../../../../api/cabinet/cabinet";
import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg";

class AgentCabinetStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        info:[
            {label: 'Имя', value: ''},
            {label: 'Статус', value: ''},
            {label: 'Стаж', value: '' },
            {label: 'Телефон', value:''},
            {label: 'E-mail', value: ''},
            {label: 'Telegram', value: ''},
            {label: 'WhatsApp', value: ''},
            {label: 'Viber', value: ''},
        ],
        id: 1,
        img:imgMoc,
        statusVerification:'notConfirmed',

        name: '',
        status: 'Agency',
        experience: 'Смоленская обл. г.Смоленск',
        phone: '',
        email: 'estatum@mail.com',
        telegram: 'estatum.com',
        whatsApp: 'estatum.com',
        viber: 'estatum.com',

        phoneArray: [''],

        loading:true
    }

    async fetch() {
        const res  = await cabinetAPI.getCabinetAgent()

        const name = res.data.agentProperty.name ? res.data.agentProperty.name : 'name'
        const status = res.data.role
        const experience = res.data.agentProperty.experience?res.data.agentProperty.experience :'0'
        const phone = res.data.agentProperty.phone[0].value?res.data.agentProperty.phone[0].value:''
        const email = res.data.email
        const telegram = res.data.agentProperty.messengers.telegram ? res.data.agentProperty.messengers.telegram :'telegram'
        const whatsApp = res.data.agentProperty.messengers.whatsApp  ? res.data.agentProperty.messengers.whatsApp : 'whatsApp'
        const viber = 'viber'

        const info = [
            {label: 'Имя', value: name},
            {label: 'Статус', value: status},
            {label: 'Стаж', value: experience },
            {label: 'Телефон', value: phone},
            {label: 'E-mail', value: email},
            {label: 'Telegram', value: telegram},
            {label: 'WhatsApp', value: whatsApp},
            {label: 'Viber', value: viber},
        ]
        this.initialData.info = info
        this.initialData.id = res.data.id
        this.initialData.statusVerification = res.data.isConfirmed ? "confirmed" : "notConfirmed"

        this.initialData.name = name
        this.initialData.status = status
        this.initialData.experience = experience
        this.initialData.phone = res.data.agentProperty.phone[0].value?res.data.agentProperty.phone[0].value:''
        this.initialData.phoneArray = res.data.agentProperty.phone.length>0?res.data.agentProperty.phone.map((p:any)=>p.value):['']
        this.initialData.email = email
        this.initialData.telegram = telegram
        this.initialData.whatsApp = whatsApp
        this.initialData.viber = viber

        this.initialData.loading = false

    }
    async update(id:number, updateValue: UpdateAgentCabinetType){
        const res = await cabinetAPI.updateAgentsCabinet(id,updateValue)
    }

    get() {
        console.log('getMobx',JSON.parse(JSON.stringify({...this.initialData})))
    }
}

const StoreContext = createContext<AgentCabinetStore>(new AgentCabinetStore());

const StoreProvider: FC<{ store: AgentCabinetStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreAgentCabinet = () => {
    return useContext(StoreContext);
};

export {AgentCabinetStore, StoreProvider, useStoreAgentCabinet};