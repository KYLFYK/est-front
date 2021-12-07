import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { IOption } from "../../../utils/interfaces/general";
import { ICreateObjectModel } from "./CreateObjectStoreType";

export interface ICreateObjectAparts
  extends ICreateObjectModel<
    ICreateApartmentAboutTab,
    ICreateApartsGeneralInfo,
    ICreateApartsInfrastructure,
    ICreateApartsInfoTab
  > {}

export interface ICreateApartmentAboutTab {
  name: string;
  country: string;
  city: string;
  address: string;
  cost: number;
  index: number;
  type: string;
  complexName: string;
  floor: number;
  floorsAmmount: number;
}

export interface ICreateApartsGeneralInfo {
  description: string;
  photos: ICustomFile[];
  generalSquare: string;
  livingSquare: string;
  ceilingHeight: string;
  rooms: number;
  bathroom: string;
  kitchen: string;
  customRooms: IOption[];
  interiorDescription: string;
}

export interface ICreateApartsInfrastructure {
  description: string;
  view: string;
}

export interface ICreateApartsInfoTab {
  houseType: string;
  fundament: string;
  roof: string;
  walls: string;
  waterPipe: string;
  heating: string;
  sewerage: string;
  electricity: string;
  internet: string;
  parking: string;
  parkingPrice: number;
  bedrooms: number;
  bathrooms: number;
  lavatories: number;
  plumbing: string;
  renovation: string;
  furnitureList: string[];
}
