import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {cabinetAPI, UpdateAgentCabinetType} from "../../../../api/cabinet/cabinet";
import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg";

class AgencyCabinetStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        info:[
            {label: 'Наименование', value: ''},
            {label: 'Статус', value: 'Агентство'},
            {label: 'Адрес', value: ''},
            {label: 'Телефон', value: ''},
            {label: 'E-mail', value: ''},
            {label: 'Сайт', value: ''},
        ],
        descriptionAccount:[{label: 'Описание', value: ''}],
        id: 1,
        img:imgMoc,
        statusVerification:'notConfirmed',

        name: '',
        status: 'Агентство',
        address: '',
        phone: '',
        email: '',
        website: '',
        description: '',

        loading:true
    }

    async fetch() {
        const res  = await cabinetAPI.getCabinetAgency()
        const name = res.data.agencyProperty.name
        const address = res.data.agencyProperty.address
        const phone = res.data.agencyProperty.phone[0].value
        const email = res.data.email
        const site = res.data.agencyProperty.site
        const description = res.data.agencyProperty.description
        const info = [
            {label: 'Наименование', value: name},
            {label: 'Статус', value: 'Агентство'},
            {label: 'Адрес', value: address},
            {label: 'Телефон', value: phone},
            {label: 'E-mail', value: email},
            {label: 'Сайт', value: site},
        ]

        this.initialData.id = res.data.id
        this.initialData.descriptionAccount = [{label: 'Описание', value: description}],
        this.initialData.img = imgMoc
        this.initialData.name = name
        this.initialData.statusVerification = 'notConfirmed'
        this.initialData.status = 'Агентство'
        this.initialData.address = address
        this.initialData.phone = phone
        this.initialData.email = email
        this.initialData.website = site
        this.initialData.description = description

        this.initialData.info = info
        console.log("getCabinetAgency",res)
        this.initialData.loading = false
    }
    async update(id:number, updateValue: UpdateAgentCabinetType){
        const res = await cabinetAPI.updateAgencyCabinet(id,updateValue)
    }

    get() {
        console.log('getMobx',JSON.parse(JSON.stringify({...this.initialData})))
    }
}

const StoreContext = createContext<AgencyCabinetStore>(new AgencyCabinetStore());

const StoreProvider: FC<{ store: AgencyCabinetStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreAgencyCabinet = () => {
    return useContext(StoreContext);
};

export {AgencyCabinetStore, StoreProvider, useStoreAgencyCabinet};