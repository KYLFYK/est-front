import { ICreateObjectAparts } from "./CreateApartmentStoreType";
import { ICreateObjectHouse } from "./CreateHouseStoreType";
import { ICreateObjectLand } from "./CreateLandStoreType";
import { ICreateObjectTownhouse } from "./CreateTownhouseStoreType";

export interface ICreateObjectModel<A, B, C, D, E = {}> {
    about: A
    generalInfo: B,
    infrastructure: C,
    info: D,
    legalPurity: E
}

export interface ICreateObject {
    apartment: ICreateObjectAparts
    land?: ICreateObjectLand
    house?: ICreateObjectHouse
    townhouse?: ICreateObjectTownhouse
}