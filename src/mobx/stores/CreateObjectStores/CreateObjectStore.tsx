import { action, flow, makeObservable, observable } from "mobx";
import { INFO_TAB_HOUSE_FURNITURE } from "../../../components/processes/create-new-object/config";
import { TAboutTabState, TGeneralInfoState, TInfoState, TInfrastructureState, TLegalPurityTabState } from "../../../components/processes/create-new-object/lib";
import { IOption } from "../../../utils/interfaces/general";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import { ICreateApartmentAboutTab, ICreateApartsGeneralInfo, ICreateApartsInfoTab, ICreateApartsInfrastructure, ICreateApartsLegalPurity, ICreateObjectAparts } from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";
import { ICreateHouseAboutTab, ICreateHouseGeneralInfo, ICreateHouseInfoTab, ICreateHouseInfrastructure, ICreateHouseLegalPurity, ICreateObjectHouse } from "../../types/CreateObjectStoresTypes/CreateHouseStoreType";
import { ICreateLandAboutTab, ICreateLandGeneralInfo, ICreateLandInfoTab, ICreateLandInfrastructure, ICreateLandLegalPurity, ICreateObjectLand } from "../../types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
import { ICreateObjectTownhouse, ICreateTownhouseAboutTab, ICreateTownhouseGeneralInfo, ICreateTownhouseInfoTab, ICreateTownhouseInfrastructure, ICreateTownhouseLegalPurity } from "../../types/CreateObjectStoresTypes/CreateTownhouseStoreType";
import { IRootStore } from "../RootStore";
import CreateApartmentStore from "./CreateApartmentStore";
import CreateHouseStore from "./CreateHouseStore";
import CreateLandStore from "./CreateLandStore";
import CreateTownhouseStore from "./CreateTownhouseStore";
import {createObjectAPI} from "../../../api/createObjects/createObject";
import jwt_decode from "jwt-decode";

class CreateObjectStore implements ICreateObject {

    apartment: CreateApartmentStore = new CreateApartmentStore()
    townhouse: CreateTownhouseStore = new CreateTownhouseStore()
    land: CreateLandStore = new CreateLandStore()
    house: CreateHouseStore = new CreateHouseStore()

    saveAboutTab(data: TAboutTabState, objectType: ObjectTypes) {
        switch (objectType) {
            case ObjectTypes.APARTMENTS:
                this.apartment.about = data as ICreateApartmentAboutTab
                break;
            case ObjectTypes.HOUSE:
                this.house.about = data as ICreateHouseAboutTab
                break;
            case ObjectTypes.TOWNHOUSE:
                this.townhouse.about = data as ICreateTownhouseAboutTab
                break;
            case ObjectTypes.LAND:
                this.land.about = data as ICreateLandAboutTab
                break;
            default:
                break;
        }
    }


    saveGeneralTab(data: TGeneralInfoState, objectType: ObjectTypes) {
        switch (objectType) {
            case ObjectTypes.APARTMENTS:
                this.apartment.generalInfo = data as ICreateApartsGeneralInfo
                break;
            case ObjectTypes.HOUSE:
                this.house.generalInfo = data as ICreateHouseGeneralInfo
                break;
            case ObjectTypes.TOWNHOUSE:
                this.townhouse.generalInfo = data as ICreateTownhouseGeneralInfo
                break;
            case ObjectTypes.LAND:
                this.land.generalInfo = data as ICreateLandGeneralInfo
                break;
            default:
                break;
        }
    }

    saveInfrastructureTab(data: TInfrastructureState, objectType: ObjectTypes) {
        switch (objectType) {
            case ObjectTypes.APARTMENTS:
                this.apartment.infrastructure = data as ICreateApartsInfrastructure
                break;
            case ObjectTypes.HOUSE:
                this.house.infrastructure = data as ICreateHouseInfrastructure
                break;
            case ObjectTypes.TOWNHOUSE:
                this.townhouse.infrastructure = data as ICreateTownhouseInfrastructure
                break;
            case ObjectTypes.LAND:
                this.land.infrastructure = data as ICreateLandInfrastructure
                break;
            default:
                break;
        }
    }

    saveHouseInfoTab(data: TInfoState, objectType: Exclude<ObjectTypes, ObjectTypes.LAND>) {
        switch (objectType) {
            case ObjectTypes.APARTMENTS:
                this.apartment.info = data as ICreateApartsInfoTab
                break;
            case ObjectTypes.HOUSE:
                this.house.info = data as ICreateHouseInfoTab
                break;
            case ObjectTypes.TOWNHOUSE:
                this.townhouse.info = data as ICreateTownhouseInfoTab
                break;
            default:
                break;
        }
    }

    saveLandInfoTab(data: ICreateLandInfoTab) {
        this.land.info = data
    }

    saveLegalPurityTab(data: TLegalPurityTabState, objectType: ObjectTypes) {
        switch (objectType) {
            case ObjectTypes.APARTMENTS:
                this.apartment.legalPurity = data as ICreateApartsLegalPurity
                break;
            case ObjectTypes.HOUSE:
                this.house.legalPurity = data as ICreateHouseLegalPurity
                break;
            case ObjectTypes.TOWNHOUSE:
                this.townhouse.legalPurity = data as ICreateTownhouseLegalPurity
                break;
            case ObjectTypes.LAND:
                this.land.legalPurity = data as ICreateLandLegalPurity
            default:
                break;
        }
    }

    // Fake request method for assigning options list in store in the future
    *getFurnitureList(): Generator<Promise<IOption[]>, IOption[], IOption[]> {
        const fakeRequest = () => new Promise<IOption[]>((res) => res(INFO_TAB_HOUSE_FURNITURE))
        const data = yield fakeRequest()
        return data
    }

    // Fake request method for sending data and receiving response in the future
    async sendObjectData(data: ICreateObjectHouse | ICreateObjectLand | ICreateObjectTownhouse | ICreateObjectAparts, objectType:ObjectTypes): Promise<string | undefined> {
        const idOwner:any = jwt_decode(localStorage.getItem('accessEstatum') ? localStorage.getItem('accessEstatum') as string: '123' as string )
        console.log('-fetch',data)
        console.log('-idOwner',idOwner.id)
        if(objectType===0){
            const apartmentObjectCreateBackEnd = {
                "name": data.about.name,
                "description": data.generalInfo.description,
                "address": data.about.address,
                "longitude": '31.45',
                "latitude": '31.45',
                "region": 1, // 1 - краснодарский край ,2 - сочи
                "owner": idOwner.id, // id owner
                "status": 1, // 1 - на продаже, 2 - На бронировании, 3-На задатке, 4-ИЖС, 5-Перед сдачей
                "markAsDelete": false,
                // "guides": [   // справочник доделывается (Справочник - get ) передаться номер
                //     0
                // ],
                "file": [
                    0
                ],
                "price": data.about.cost,
                "complex": null
            }
            try {
                const res = await createObjectAPI.createObjectApartment(apartmentObjectCreateBackEnd)
                console.log('response apartment',res)
                return res
            }
            catch (e) {
                console.log('response apartment-error',e)
            }
        }
        if(objectType===1) {
            const houseObjectCreateBackEnd = {
                "name": data.about.name,
                "description": data.generalInfo.description,
                "address": data.about.address,
                "longitude": '31.45',
                "latitude": '31.45',
                "region": 1,
                "owner": idOwner.id,
                "status": 1,
                "markAsDelete": false,
                // "guides": [   // справочник доделывается (Справочник - get ) передаться номер
                //     0
                // ],
                "file": [
                    0
                ],
                "price": data.about.cost,
                "complex": null
            }

            try {
                const res = await createObjectAPI.createObjectHouse(houseObjectCreateBackEnd)
                console.log('response apartment',res)
                return res
            }
            catch (e) {
                console.log('response apartment-error',e)
            }
        }
        if(objectType===2) {
            const townhouseObjectCreateBackEnd = {
                "name": data.about.name,
                "description": data.generalInfo.description,
                "address": data.about.address,
                "longitude": '31.45',
                "latitude": '31.45',
                "region": 1,
                "owner": idOwner.id,
                "status": 1,
                "markAsDelete": false,
                // "guides": [   // справочник доделывается (Справочник - get ) передаться номер
                //     0
                // ],
                "file": [
                    0
                ],
                "price": data.about.cost,
                "complex": null
            }
            try {
                const res = await createObjectAPI.createObjectTownhouse(townhouseObjectCreateBackEnd)
                console.log('response apartment',res)
                return res
            }
            catch (e) {
                console.log('response apartment-error',e)
            }
        }
        if(objectType===3) {
            const landObjectCreateBackEnd = {
                "name": data.about.name,
                "description": data.generalInfo.description,
                "address": data.about.address,
                "longitude": '31.45',
                "latitude": '31.45',
                "region": 1,
                "owner": idOwner.id,
                "status": 1,
                "markAsDelete": false,
                // "guides": [   // справочник доделывается (Справочник - get ) передаться номер
                //     0
                // ],
                "file": [
                    0
                ],
                "price": data.about.cost,
                "complex": null
            }
            try {
                const res = await createObjectAPI.createObjectLand(landObjectCreateBackEnd)
                console.log('response apartment',res)
                return res
            }
            catch (e) {
                console.log('response apartment-error',e)
            }
        }


        // const fakeRequest = () => new Promise<string>((res, rej) => setTimeout(() => res('1'), 1000)) //  fake return publish -ID-
        // try {
        //     const response = await fakeRequest()
        //     return response
        // }
        // catch (e) {
        //     console.warn(e, 'error')
        // }

    }

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            apartment: observable,
            townhouse: observable,
            land: observable,
            house: observable,
            saveAboutTab: action,
            saveGeneralTab: action,
            saveInfrastructureTab: action,
            saveHouseInfoTab: action,
            saveLandInfoTab: action,
            saveLegalPurityTab: action,
            getFurnitureList: flow.bound,
        })

    }


}

export default CreateObjectStore