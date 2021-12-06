import { makeObservable, observable } from "mobx";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
import { IRootStore } from "../RootStore";
import CreateApartmentStore from "./CreateApartmentStore";


class CreateObjectStore implements ICreateObject {

    apartment: CreateApartmentStore = new CreateApartmentStore()


    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            apartment: observable
        })

    }


}

export default CreateObjectStore