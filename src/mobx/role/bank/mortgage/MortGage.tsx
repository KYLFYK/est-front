import {createContext, FC, useContext} from "react"
import {makeAutoObservable} from "mobx"
import {leadsAPI} from '../../../../api/cabinet/mortgage'
import {datetoDayFormat} from '../../../../lib/mapping/objectDates'
import {paymentSchedule, pivotData} from '../../../../components/shared/Mortgage/Calculator/helpers'
import {IPaymentGraph, IPeriodPayments} from '../../../../components/shared/Mortgage/Calculator/ipotek'

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
            "earlyPayment": [
                {
                  "dateOfPayment": "",
                  "frequencyPayment": 0,
                  "frequencyPrice": 0,
                  "reduce": 0,
                },
            ],
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
            "creditTerm": 2,
            "percentageRate": 6,
            "earlyPayment": [],
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
        this.initialData.createPayload = {
            ...this.initialData.createPayload, 
            "statePrice": value,
        }
    }
    setInitialPayment(value: any) {
        this.initialData.createPayload = {
            ...this.initialData.createPayload, 
            "initialPayment": value,
        }
    }
    setCreditTerm(value: any) {
        this.initialData.createPayload = {
            ...this.initialData.createPayload, 
            "creditTerm": value,
        }
    }
    setPercentageRate(value: any) {
        this.initialData.createPayload = {
            ...this.initialData.createPayload, 
            "percentageRate": value,
        }
    }
    setEarlyPayment(value: any) {
        this.initialData.createPayload = {
            ...this.initialData.createPayload,
            "earlyPayment": value,
        }
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
        //@ts-expect-error
        this.initialData.createPayload.earlyPayment = this.initialData.createPayload.earlyPayment.map((e: any) => {
            return (
                {
                    "dateOfPayment": new Date(e.date.split('-')),
                    "frequencyPayment": e.select,
                    "frequencyPrice": e.summ,
                    "reduce": e.buttons,
                }
            )
        })
        
        let termPeriodPayments: IPeriodPayments[] = []
        let payPeriodPayments: IPeriodPayments[] = []
        pivotData(
            this.initialData.createPayload.creditTerm,
            termPeriodPayments,
            payPeriodPayments,
            this.initialData.createPayload.earlyPayment
        )

        let payments: IPaymentGraph[] = [{month: 0, payment: 0, debt: 0, percent: 0, remainder: this.initialData.createPayload.statePrice}];
        paymentSchedule(
            payments,
            this.initialData.createPayload.creditTerm, 
            termPeriodPayments,
            payPeriodPayments,
            this.initialData.createPayload.monthlyPayment, 
            this.initialData.createPayload.percentageRate
        )
        let averagePayment = 0
        let payAfterEarlyPayments = 0
        payments.forEach((p) => {
            payAfterEarlyPayments += p.percent;
            averagePayment += p.payment / (payments.length - 1);
        })

        const res = await leadsAPI.createLead({
            ...this.initialData.createPayload,
            "monthlyPayment": this.initialData.createPayload.earlyPayment.every((er: any) => er.summ < 1) 
                ? +((this.initialData.createPayload.statePrice - this.initialData.createPayload.initialPayment) * (this.initialData.createPayload.percentageRate / 1200 + ((this.initialData.createPayload.percentageRate / 1200) / (Math.pow(1 + this.initialData.createPayload.percentageRate / 1200, this.initialData.createPayload.creditTerm * 12) - 1)))).toFixed(0)
                : averagePayment,
            "monthlyIncome": 12702 + +((this.initialData.createPayload.statePrice - this.initialData.createPayload.initialPayment) * (this.initialData.createPayload.percentageRate / 1200 + ((this.initialData.createPayload.percentageRate / 1200) / (Math.pow(1 + this.initialData.createPayload.percentageRate / 1200, this.initialData.createPayload.creditTerm * 12) - 1)))).toFixed(0),
            "creditTotal": this.initialData.createPayload.statePrice - this.initialData.createPayload.initialPayment,
            "percentTotal": this.initialData.createPayload.earlyPayment.every((er: any) => er.summ < 1)
                ? +((this.initialData.createPayload.statePrice - this.initialData.createPayload.initialPayment) * (this.initialData.createPayload.percentageRate / 1200 + ((this.initialData.createPayload.percentageRate / 1200) / (Math.pow(1 + this.initialData.createPayload.percentageRate / 1200, this.initialData.createPayload.creditTerm * 12) - 1)))).toFixed(0) * this.initialData.createPayload.creditTerm * 12 - (this.initialData.createPayload.statePrice - this.initialData.createPayload.initialPayment)
                : payAfterEarlyPayments,
        })
        //this.initialData.data = res.data
        //this.initialData.loading = false
    }

    async updateLead(id: number, payload: string) {
        const res = await leadsAPI.updateLead(id, {'status': payload})
        this.initialData.getAllData.filter((ad: any) => ad.id === id)[0].status = payload
        //this.initialData.loading = false
    }

    async deleteLead(id: number) {
        //this.initialData.loading = true
        const res = await leadsAPI.deleteLead(id)
        //this.initialData.data = res.data
        //this.initialData.loading = false
    }

    getEarlyPayments() {
        return JSON.parse(JSON.stringify([ ...this.initialData.createPayload.earlyPayment]))
    }
    getPayload() {
        return JSON.parse(JSON.stringify({ ...this.initialData.createPayload}))
    }

    getInitialEarlyPayments() {
        return JSON.parse(JSON.stringify([ ...this.initialData.getAllData.filter((ad) => ad.id === this.initialData.detail.id)]))
    }

    get() {
        return JSON.parse(JSON.stringify({ ...this.initialData}))
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