import {makeAutoObservable} from "mobx";

type RecordDataType = {
    name: string
    email: string
    phone: string
    status: string // новая заявка
    comfortableTimeFrom: string
    comfortableTimeTo: string
    orderType: string //"buy"
    agentName: string //"string"
    nameObject: string //"string"
}

class RecordStore {
    constructor() {
        makeAutoObservable(this);
    }

    loaded: boolean = false;
    statusLoader: string = "loader"
    errorOnLoad: boolean = false;
    recordData: RecordDataType | null = null;
    days: string = ''
    price: string = '0'
    typeOrder: string = ''
    nameObject: string = ''

    //route save
    id: string = ''
    asPath: string = ''
    // data user
    name: string = ''
    email: string = ''
    phone: string = ''
    status: string = ''
    comfortableTimeFrom: string = ''
    comfortableTimeTo: string = ''
    orderType: string = ''
    agentName: string = ''

    updateRecordData(dataRecord: RecordDataType) {
        this.recordData = dataRecord
    }

    updateNameObject(nameObject: string, id: string, asPath: string) {
        this.nameObject = nameObject
        this.id = id
        this.asPath = asPath
    }

    updateRecordType(typeOrder: string, price: string, days: string) {
        this.days = days
        this.price = price
        this.typeOrder = typeOrder
        // console.log(JSON.parse(JSON.stringify(this)))
    }

    updateDataUser(name: string,
                   email: string,
                   phone: string,
                   comfortableTimeFrom: string,
                   comfortableTimeTo: string,
                   status: string,
                   orderType: string,
                   agentName: string) {
        this.name = name
        this.email = email
        this.phone = phone
        this.status = status
        this.comfortableTimeFrom = comfortableTimeFrom
        this.comfortableTimeTo = comfortableTimeTo
        this.orderType = orderType
        this.agentName = agentName
    }
    updateMeFromLogin(infoLogin:{email:string,phone:string,name:string}){
        this.email = infoLogin.email
        this.phone = infoLogin.phone // ?? infoLogin.customerProperty.phone
        this.name = infoLogin.name
    }
}

export const useRecordStore = new RecordStore();