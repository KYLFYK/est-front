import { configure } from "mobx";
import {ResidentialComplexStore} from "./complex/complex";

configure({enforceActions: "observed"})

export interface IRootStore {
    ResidentialComplexStore: ResidentialComplexStore

}

class RootStore implements IRootStore {
    ResidentialComplexStore: ResidentialComplexStore;

    constructor () {
        this.ResidentialComplexStore = new ResidentialComplexStore()
    }
}

export default new RootStore()