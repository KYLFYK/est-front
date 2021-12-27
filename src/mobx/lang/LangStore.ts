import { configure } from "mobx";
import {PlatStore} from "./storeLand/storeLang";
configure({enforceActions: "observed"})

export interface IRootStore {
    PlatStore: PlatStore
}

class RootStore implements IRootStore {
    PlatStore: PlatStore;

    constructor () {
        this.PlatStore = new PlatStore()
    }
}

export default new RootStore()