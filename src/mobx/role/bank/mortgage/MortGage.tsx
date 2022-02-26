import {createContext, FC, useContext} from "react"
import {makeAutoObservable} from "mobx"
import {leadsAPI} from '../../../../api/cabinet/mortgage'
import {datetoDayFormat} from '../../../../lib/mapping/objectDates'

class MortGageStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData = {
        loading: true,
        getAllData: [{
            "id": 0,
            "createAt": "",
            "email": "",
            "fio": "",
            "objectId": 0,
            "phone": "",
            "status": "",
            "statePrice": 0,
            "initialPayment": 0,
            "creditTerm": 0,
            "percentageRate": 0,
            "dateOfPayment": "",
            "frequencyPayment": 0,
            "reduce": 0,
            "frequencyPrice": 0,
            "monthlyPayment": 0,
            "creditTotal": 0,
            "percentTotal": 0,
            "monthlyIncome": 0,
        }],
        getSingleData: {},
        createPayload: {
            "email": "",
            "fio": "",
            "objectId": 0,
            "phone": "",
            "status": "Новая заявка",
            "statePrice": 10000000,
            "initialPayment": 0,
            "creditTerm": 10,
            "percentageRate": 6,
            "dateOfPayment": new Date(),
            "frequencyPayment": 0,
            "reduce": 0,
            "frequencyPrice": 0,
            "monthlyPayment": 0,
            "creditTotal": 0,
            "percentTotal": 0,
            "monthlyIncome": 0,
        },
        updateStatus: {

        },
        detail: {
            detail: false,
            id: 0,
        }
    }

    setEmail(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "email": value}
    }
    setFIO(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "fio": value}
    }
    setPhone(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "phone": value}
    }
    setStatePrice(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "statePrice": value}
    }
    setInitialPayment(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "initialPayment": value}
    }
    setCreditTerm(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "creditTerm": value}
    }
    setPercentageRate(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "percentageRate": value}
    }
    setFrequencyPayment(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "frequencyPayment": value}
    }
    setReduce(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "reduce": value}
    }
    setFrequencyPrice(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "frequencyPrice": value}
    }
    setMonthlyPayment(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "monthlyPayment": value}
    }
    setCreditTotal(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "creditTotal": value}
    }
    setPercentTotal(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "percentTotal": value}
    }
    setMonthlyIncome(value: any) {
        this.initialData.createPayload = {...this.initialData.createPayload, "monthlyIncome": value}
    }

    setDetail(detail: boolean, id: number) {
        this.initialData.detail = {detail: detail, id: id}
    }

    async fetchAllLeads() {
        this.initialData.loading = true
        const res = await leadsAPI.getAllLeads()
        this.initialData.getAllData = res.data
        this.initialData.loading = false
    }

    async fetchSingleLead(id: number) {
        const res = await leadsAPI.getSingleLead(id)
        this.initialData.getSingleData = res.data
    }

    async postLead() {
        //this.initialData.loading = true
        const res = await leadsAPI.createLead(this.initialData.createPayload)
        //this.initialData.data = res.data
        //this.initialData.loading = false
    }

    async updateLead(id: number, payload: string) {
        //this.initialData.loading = true
        const res = await leadsAPI.updateLead(id, {'status': payload})
        //this.initialData.data = res.data
        //this.initialData.loading = false
    }

    async deleteLead(id: number) {
        //this.initialData.loading = true
        const res = await leadsAPI.deleteLead(id)
        //this.initialData.data = res.data
        //this.initialData.loading = false
    }

    get() {
        console.log(JSON.parse(JSON.stringify({ ...this.initialData})))
    }
}

const StoreContext = createContext<MortGageStore>(new MortGageStore());

const StoreProvider: FC<{ store: MortGageStore}> = ({ children, store }) =>  (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useMortGageStore = () => {
    return useContext(StoreContext);
};

export { MortGageStore, StoreProvider, useMortGageStore };