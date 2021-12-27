import {configure} from "mobx";
import CreateObjectStore from "./CreateObjectStores/CreateObjectStore";

configure({enforceActions: "observed"})

export interface IRootStore {
    createObjectStore: CreateObjectStore
}

class RootStore implements IRootStore {
    createObjectStore: CreateObjectStore;

    constructor() {
        this.createObjectStore = new CreateObjectStore(this)
    }
}

export default new RootStore()