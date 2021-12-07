import { makeObservable, observable } from "mobx";
import { TAboutTabState } from "../../../components/processes/create-new-object/lib";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
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

    saveAboutTab(data: TAboutTabState, objectTypeField: keyof ICreateObject) {
        this[objectTypeField].about = data
    }

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            apartment: observable
        })

    }


}

export default CreateObjectStore