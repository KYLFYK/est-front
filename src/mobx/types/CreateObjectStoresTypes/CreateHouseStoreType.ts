import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { IOption } from "../../../utils/interfaces/general";
import { ICreateObjectModel } from "./CreateObjectStoreType";

export interface ICreateObjectHouse
  extends ICreateObjectModel<
    ICreateHouseAboutTab,
    ICreateHouseGeneralInfo,
    ICreateHouseInfrastructure,
    ICreateHouseInfoTab
  > {}

export interface ICreateHouseAboutTab {
  name: string;
  country: string;
  city: string;
  address: string;
  cost: number;
  index: number;
}

export interface ICreateHouseGeneralInfo {
  description: string;
  photos: ICustomFile[];
  generalSquare: string;
  houseSquare: string;
  livingSquare: string;
  land: string;
  rooms: number;
  bathroom: string;
  kitchen: string;
  garage: {
    has: string;
    capacity: string;
    square: string;
  };
  pool: {
    has: string;
    square: string;
  };
  floors: {
    count: number;
    items: IOption<{ description: string; height?: string }>[];
  };
}

export interface ICreateHouseInfrastructure {
  description: string;
  view: string;
}

export interface ICreateHouseInfoTab {
  houseType: string;
  fundament: string;
  roof: string;
  walls: string;
  technicalComment: string;
  waterPipe: string;
  heating: string;
  sewerage: string;
  electricity: string;
  vent: string;
  internet: string;
  engineeringComment: string;
  bedrooms: number;
  bathrooms: number;
  lavatories: number;
  plumbing: string;
  renovation: string;
  furnitureList: string[];
}
