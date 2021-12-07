import { makeObservable, observable } from "mobx";
import { TAboutTabState } from "../../../components/processes/create-new-object/lib";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import { ICreateApartmentAboutTab } from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";
import { ICreateHouseAboutTab } from "../../types/CreateObjectStoresTypes/CreateHouseStoreType";
import { ICreateLandAboutTab } from "../../types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
import { ICreateTownhouseAboutTab } from "../../types/CreateObjectStoresTypes/CreateTownhouseStoreType";
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

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            apartment: observable
        })

    }


}

export default CreateObjectStore