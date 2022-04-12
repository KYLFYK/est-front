import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { ICreateObjectModel } from "./CreateObjectStoreType";
import { IUploadedFile } from "../../stores/CreateObjectStores/CreateObjectStore";

export interface ICreateObjectComplex
  extends ICreateObjectModel<
    ICreateComplexAboutTab,
    ICreateComplexGeneralInfo,
    ICreateComplexInfrastructure,
    ICreateComplexInfoTab,
    ICreateComplexLegalPurity
  > {}

export interface ICreateComplexAboutTab {
  name: string;
  country: number;
  city: number;
  region: number;
  address: string;
  index: number;
  type: string;
  latitude: number;
  longitude: number;
}

export interface ICreateComplexGeneralInfo {
  description: string;
  photos: Array<ICustomFile | IUploadedFile>;
  priceObjectMin: number;
  priceObjectMax: number;
  areaObjectMin: number;
  areaObjectMax: number;
  amountObjects: number;
  amountBuildings: number;
  amountFloors: number;
  heightCeilings: number;
}

export interface ICreateComplexInfrastructure {
  infrastructure: string;
}

export interface IConstructionProgress {
  date: string;
  description: string;
}

export interface IConstructionProgressChangeable extends IConstructionProgress {
  id: string;
}

export interface ICreateComplexInfoTab {
  constructionProgress: IConstructionProgress[];
  guides: number[];
}

export interface ICreateComplexLegalPurity {}
