import { action, flow, makeObservable, observable } from "mobx";
import { INFO_TAB_HOUSE_FURNITURE } from "../../../components/processes/create-new-object/config";
import { TAboutTabState, TGeneralInfoState, TInfoState, TInfrastructureState } from "../../../components/processes/create-new-object/lib";
import { IOption } from "../../../utils/interfaces/general";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import { ICreateApartmentAboutTab, ICreateApartsGeneralInfo, ICreateApartsInfoTab, ICreateApartsInfrastructure } from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";
import { ICreateHouseAboutTab, ICreateHouseGeneralInfo, ICreateHouseInfoTab, ICreateHouseInfrastructure } from "../../types/CreateObjectStoresTypes/CreateHouseStoreType";
import { ICreateLandAboutTab, ICreateLandGeneralInfo, ICreateLandInfoTab, ICreateLandInfrastructure } from "../../types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
import { ICreateTownhouseAboutTab, ICreateTownhouseGeneralInfo, ICreateTownhouseInfoTab, ICreateTownhouseInfrastructure } from "../../types/CreateObjectStoresTypes/CreateTownhouseStoreType";
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

    // Fake request method for assigning options list in store in the future
    *getFurnitureList(): Generator<Promise<IOption[]>, IOption[], IOption[]> {
        const fakeRequest = () => new Promise<IOption[]>((res) => res(INFO_TAB_HOUSE_FURNITURE))
        const data = yield fakeRequest()
        return data
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
            getFurnitureList: flow.bound
        })

    }


}

export default CreateObjectStore