import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { IOption } from "../../../utils/interfaces/general";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectModel } from "./CreateObjectStoreType";

export interface ICreateObjectTownhouse
  extends ICreateObjectModel<
    ICreateTownhouseAboutTab,
    ICreateTownhouseGeneralInfo,
    ICreateTownhouseInfrastructure,
    ICreateTownhouseInfoTab,
    ICreateTownhouseLegalPurity
  > {}

export interface ICreateTownhouseAboutTab {
  name: string;
  country: string;
  city: string;
  address: string;
  region: string;
  cost: number;
  index: number;
  type: string;
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
  vrTour: string;
  video: string;
}

export interface ICreateTownhouseInfrastructure {
  description: string;
  view: string[];
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

export interface ICreateTownhouseLegalPurity {
  realEstateRegister: {
    address: string;
    cadastralNumber: string;
    cadastralCost: string;
    generalSquare: string;
    floors: string;
  };
  currentFounder: {
    founderType: FoundersTypes;
    firstFounderName: string;
    secondFouderName?: string;
    cadastralNumber: string;
    ownershipFrom: Date;
    ownershipTo: Date;
  };
  previousFounder: {
    founderType: FoundersTypes;
    firstFounderName: string;
    secondFouderName?: string;
    cadastralNumber: string;
    ownershipFrom: Date;
    ownershipTo: Date;
  };
}
