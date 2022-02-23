import {createContext, FC, useContext} from "react"
import {makeAutoObservable} from "mobx"
import {adsAPI, UpdateAgentCabinetType} from "../../../../api/cabinet/ads"
import {ApartmentApi} from "../../../../api/obj/apartment"
import {HouseApi} from "../../../../api/obj/house"
import {LandApi} from "../../../../api/obj/land"
import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg"
import {datetoDayFormat} from '../../../../lib/mapping/objectDates'

class AgentAdsStore {
    constructor() {
        makeAutoObservable(this);
    }
    
    initialData = {
        loading: true,
        data: [
        {
            id: '',
            img: imgMoc,
            type: '',
            name: '',
            price: '',
            mainSpecifications: ['', '', '', '', ''],
            agent: '',
            dateStart: '',
            dateEnd: '',
            status: '',
            address: ''
        }],
    }

    async fetch() {
        let i = 0
        let obj: any = []
        let res
        do {
            res = await ApartmentApi.getAllApartment(i*10, 10)
            obj = [...obj, ...res?.data]
            i++
        } while (res?.data?.length >= 10)
        i = 0
        do {
            res = await HouseApi.getAllHouse(i*10, 10)
            obj = [...obj, ...res?.data]
            i++
        } while (res?.data?.length >= 10)
        i = 0

        // TODO - сейчас Land пустой и почему-то код не идёт далее на перезапись стейта, Квартиры и Дома отрабатывают в цикле последовательные запросы 
        //          по логике по пустого Land должен быть выход из цикла и переход на перезапись стейта, но почему-то нет; пока запросы по Квартирам и Домам
        /*do {
            res = await LandApi.getAllLand(i*10, 10)
            obj = [...obj, ...res?.data]
            i++
        } while (res?.data?.length >= 10)
        res = await ApartmentApi.getAllApartment(0, 100)
        obj = [...obj, ...res?.data]
        res = await HouseApi.getAllHouse(0, 100)
        obj = [...obj, ...res?.data]
        res = await LandApi.getAllLand(0, 100)
        obj = [...obj, ...res?.data]*/

        this.initialData.data = obj.map((o: any, i: number) => {
            return {
                id: o.id,
                img: imgMoc,
                type: o.objectType,
                name: o.name,
                price: o.price,
                mainSpecifications: ['', '', '', '', ''],
                agent: o.owner.id,
                dateStart: datetoDayFormat(o.createAt, 'Cabinet'),
                dateEnd: '',
                status: o.status.status,
                address: o.address,
            }
        })
        //this.initialData.data = obj
        this.initialData.loading = false
    }

    get() {
        return JSON.parse(JSON.stringify({...this.initialData}))
    }
}

const StoreContext = createContext<AgentAdsStore>(new AgentAdsStore());

const StoreProvider: FC<{ store: AgentAdsStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useAgentAdsStore = () => {
    return useContext(StoreContext);
};

export {AgentAdsStore, StoreProvider, useAgentAdsStore};