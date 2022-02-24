import {createContext, FC, useContext} from "react"
import {makeAutoObservable} from "mobx"
import {reqAPI} from "../../../../api/cabinet/request"

import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg"
import {datetoDayFormat, datetoTimeFormat} from '../../../../lib/mapping/objectDates'

class AgentReqStore {
    constructor() {
        makeAutoObservable(this);
    }
    
    initialData = {
        loading: true,
        data: [
        {
            id: '',
            name: '',
            email: '',
            phone: '',
            convenientTime: '',
            applicationDate: '',
            applicationTime: '',
            agentName: '',
            typeContract: '',
            object: '',
            priceObject: '',
            status: '',
            idOffers: '',
            url: '',
        }],
    }

    async fetchReqs(ownerId: number) {
        this.initialData.loading = true

        const res = await reqAPI.getAgentReq(ownerId)
        this.initialData.data = res.data.map((r: any) => {
            return {
                id: r.id,
                name: r.name,
                email: r.email,
                phone: r.phone,
                convenientTime: `${r.comfortableTimeFrom.substring(0, 5)}-${r.comfortableTimeTo.substring(0, 5)}`,
                applicationDate: datetoDayFormat(r.createAt),
                applicationTime: datetoTimeFormat(r.createAt),
                agentName: '',
                typeContract: '',
                object: String(r.object),
                priceObject: '',
                status: r.status.value,
                idOffers: '',
                url: '',
            }
        })

        this.initialData.loading = false
    }

    get() {
        return JSON.parse(JSON.stringify({...this.initialData}))
    }
}

const StoreContext = createContext<AgentReqStore>(new AgentReqStore());

const StoreProvider: FC<{ store: AgentReqStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useAgentReqStore = () => {
    return useContext(StoreContext);
};

export {AgentReqStore, StoreProvider, useAgentReqStore};