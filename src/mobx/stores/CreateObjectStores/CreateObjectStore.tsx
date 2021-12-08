import { action, makeObservable, observable } from "mobx";
import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { TAboutTabState, TGeneralInfoState, TInfrastructureState } from "../../../components/processes/create-new-object/lib";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import { ICreateApartmentAboutTab, ICreateApartsGeneralInfo, ICreateApartsInfrastructure } from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";
import { ICreateHouseAboutTab, ICreateHouseGeneralInfo, ICreateHouseInfrastructure } from "../../types/CreateObjectStoresTypes/CreateHouseStoreType";
import { ICreateLandAboutTab, ICreateLandGeneralInfo, ICreateLandInfrastructure } from "../../types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
import { ICreateTownhouseAboutTab, ICreateTownhouseGeneralInfo, ICreateTownhouseInfrastructure } from "../../types/CreateObjectStoresTypes/CreateTownhouseStoreType";
import { IRootStore } from "../RootStore";
import CreateApartmentStore from "./CreateApartmentStore";
import CreateHouseStore from "./CreateHouseStore";
import CreateLandStore from "./CreateLandStore";
import CreateTownhouseStore from "./CreateTownhouseStore";


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

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            apartment: observable,
            townhouse: observable,
            land: observable,
            house: observable,
            saveAboutTab: action,
            saveGeneralTab: action,
            saveInfrastructureTab: action,
        })

    }


}

export default CreateObjectStore