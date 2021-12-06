import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { IOption } from "../../../utils/interfaces/general";
import { ICreateObjectModel } from "./CreateObjectStoreType";

export interface ICreateObjectTownhouse
  extends ICreateObjectModel<
    ICreateTownhouseAboutTab,
    ICreateTownhouseGeneralInfo,
    ICreateTownhouseInfrastructure,
    ICreateTownhouseInfoTab
  > {}

export interface ICreateTownhouseAboutTab {
  name: string;
  country: string;
  city: string;
  address: string;
  cost: number;
  index: number;
}

export interface ICreateTownhouseGeneralInfo {
  description: string;
  photos: ICustomFile[];
  generalSquare: string;
  houseSquare: string;
  livingSquare: string;
  land: string;
  rooms: number;
  isolatedInputs: number;
  bathroom: string;
  kitchen: string;
  garage: {
    has: boolean;
    capacity: string;
    square: string;
  };
  pool: {
    has: boolean;
    square: string;
  };
  floors: {
    count: number;
    items: IOption<{ description: string; height?: string }>[];
  };
}

export interface ICreateTownhouseInfrastructure {
  description: string;
  view: string;
}

export interface ICreateTownhouseInfoTab {
  houseType: string;
  fundament: string;
  roof: string;
  walls: string;
  waterPipe: string;
  heating: string;
  sewerage: string;
  electricity: string;
  internet: string;
  bedrooms: number;
  bathrooms: number;
  lavatories: number;
  plumbing: string;
  renovation: string;
  furnitureList: string[];
}
