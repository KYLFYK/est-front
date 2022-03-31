import {makeAutoObservable} from "mobx";

type RecordDataType ={
    name:string
    email:string
    phone:string
    status:string // новая заявка
    comfortableTimeFrom:string
    comfortableTimeTo:string
    orderType:string //"buy"
    agentName:string //"string"
}

class RecordStore {
    constructor() {
        makeAutoObservable(this);
    }

    loaded: boolean = false;
    statusLoader: string = "loader"
    errorOnLoad: boolean = false;
    recordData: RecordDataType | null = null;
    type: string = ''
    price:string = '0'

    updateRecordData  (dataRecord:RecordDataType ) {
        this.recordData = dataRecord

    }
    updateRecordType (price:string ,type :string) {
        this.type = type
        this.price = price
        console.log(JSON.parse(JSON.stringify(this)))
    }

}
export const useRecordStore = new RecordStore();