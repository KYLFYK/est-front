import { ICreateObjectAparts } from "./CreateApartmentStoreType";
import { ICreateObjectHouse } from "./CreateHouseStoreType";
import { ICreateObjectLand } from "./CreateLandStoreType";
import { ICreateObjectTownhouse } from "./CreateTownhouseStoreType";
import { IObjType } from "../../../components/tabs/Account/Agent/components/Others/MyAdsContainer/MyAdsContainer";
import { ICreateObjectComplex } from "./CreateComplexStoreTypes";

export interface ICreateObjectModel<A, B, C, D, E> {
  about: A;
  generalInfo: B;
  infrastructure: C;
  info: D;
  legalPurity: E;
}

export interface ICreateObject {
  apartment: ICreateObjectAparts;
  land: ICreateObjectLand;
  house: ICreateObjectHouse;
  townhouse: ICreateObjectTownhouse;
  complex: ICreateObjectComplex;
  objType: IObjType;
}
