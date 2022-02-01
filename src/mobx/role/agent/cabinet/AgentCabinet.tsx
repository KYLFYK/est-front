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
            {label: 'Наименование', value: 'Estatum'},
            {label: 'Статус', value: 'Агентство'},
            {label: 'Адрес', value: 'Смоленская обл., г.Смоленск, ул.Советская, д.64'},
            {label: 'Телефон', value: '+7(495) 006 78 69'},
            {label: 'E-mail', value: 'estatum@mail.com'},
            {label: 'Сайт', value: 'estatum'},
            {label: 'Описание', value: 'описание'},
        ],
        id: 1,
        img:imgMoc,
        statusVerification:'notConfirmed',

        name: '',
        status: 'Agency',
        address: 'Смоленская обл. г.Смоленск',
        phone: '+7 999 777 55 11',
        email: 'estatum@mail.com',
        website: 'estatum.com',
        description: 'You agency',
        loading: true
    }

    async fetch() {
        const res  = await cabinetAPI.getCabinetAgent()
        console.log("resApi",res)
        const email = res.data.email
        const status = res.data.role
        const phone = res.data.phone
        const site = res.data.site? res.data.site: 'mocSite'
        const description = res.data.description ? res.data.description :'mocDescription'
        const name = res.data.agentProperty.name ? res.data.agentProperty.name : 'mocName'
        const address = res.data.address ? res.data.address : 'mocAddress'

        const info = [{label: 'Наименование', value: name},
            {label: 'Статус', value: status},
            {label: 'Адрес', value: address },
            {label: 'Телефон', value: phone},
            {label: 'E-mail', value: email},
            {label: 'Сайт', value: site},
            {label: 'Описание', value: description},]
        this.initialData.info = info
        this.initialData.id = res.data.id
        this.initialData.statusVerification = res.data.isConfirmed ? "confirmed" : "notConfirmed"

        this.initialData.name = name
        this.initialData.status = status
        this.initialData.address = address
        this.initialData.phone = phone
        this.initialData.email = email
        this.initialData.website = site
        this.initialData.description = description

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