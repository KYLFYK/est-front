import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {cabinetAPI, CabinetAgentType} from "../../../../api/cabinet/cabinet";

class DeveloperCabinetStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        account: {
            id: 0,
            src: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
            profileForm: {
                name: "",
                type: "",
                address: "",
                phone: "",
                email: "",
                site: "",
                description: "",
            },
        },
        setting: {
            phoneNumber: "",
            login: "",
            oldPassword: "",
            newPassword: "",
            noticePhone: "",
            noticeEmail: "",
        },
        loading:false
    }

    async fetch() {
        const res :CabinetAgentType = await cabinetAPI.getCabinetDeveloper()
        this.initialData.account.id = res.data.id
        this.initialData.account.profileForm.type = res.data.developerProperty.type ? res.data.developerProperty.type :''
        this.initialData.account.profileForm.name = res.data.developerProperty.name
        this.initialData.account.profileForm.address = res.data.developerProperty.address ? res.data.developerProperty.address : ''
        this.initialData.account.profileForm.phone = res.data.developerProperty.phone[0].value ? res.data.developerProperty.phone[0].value : ''
        this.initialData.account.profileForm.email = res.data.email
        this.initialData.account.profileForm.site = res.data.developerProperty.site ? res.data.developerProperty.site :''
        this.initialData.account.profileForm.description = res.data.developerProperty.description ? res.data.developerProperty.description :''

        this.initialData.setting.phoneNumber = res.data.developerProperty.phone[0].value ? res.data.developerProperty.phone[0].value : ''
        this.initialData.setting.login = res.data.email
        this.initialData.setting.noticePhone = res.data.phone
        this.initialData.setting.noticeEmail =  res.data.email

        this.initialData.loading=  true

    }
    async updateDeveloper(id:number,updateDeveloper:{}){
        await cabinetAPI.updateDeveloper(id,updateDeveloper)
    }

    get() {
        console.log(JSON.parse(JSON.stringify({...this.initialData})))
    }
}

const StoreContext = createContext<DeveloperCabinetStore>(new DeveloperCabinetStore());

const StoreProvider: FC<{ store: DeveloperCabinetStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreDeveloperCabinet = () => {
    return useContext(StoreContext);
};

export {DeveloperCabinetStore, StoreProvider, useStoreDeveloperCabinet};