import { configure } from "mobx";
import CreateObjectStore from "./CreateObjectStores/CreateObjectStore";
import {ReceiveObjectStore} from './ReceiveObjectStores/ReceiveObjectStore';
configure({enforceActions: "observed"})

export interface IRootStore {
    createObjectStore: CreateObjectStore
    receiveObjectStore: ReceiveObjectStore
}

class RootStore implements IRootStore {
    createObjectStore: CreateObjectStore;
    receiveObjectStore: ReceiveObjectStore;

    constructor () {
        this.createObjectStore = new CreateObjectStore(this)
        this.receiveObjectStore = new ReceiveObjectStore(this)
    }
}

export default new RootStore()