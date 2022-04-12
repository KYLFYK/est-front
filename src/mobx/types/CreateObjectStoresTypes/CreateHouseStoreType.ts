import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { IOption } from "../../../utils/interfaces/general";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectModel } from "./CreateObjectStoreType";
import { IUploadedFile } from "../../stores/CreateObjectStores/CreateObjectStore";

export interface ICreateObjectHouse
  extends ICreateObjectModel<
    ICreateHouseAboutTab,
    ICreateHouseGeneralInfo,
    ICreateHouseInfrastructure,
    ICreateHouseInfoTab,
    ICreateHouseLegalPurity
  > {}

export interface ICreateHouseAboutTab {
  name: string;
  country: number;
  region: number;
  city: number;
  address: string;
  cost: number;
  index: number;
  type: string;
  latitude: number;
  longitude: number;
}

export interface ICreateHouseGeneralInfo {
  description: string;
  photos: Array<ICustomFile | IUploadedFile>;
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
  vrTour: string;
  video: string;
}

export interface ICreateHouseInfrastructure {
  description: string;
  view: string[];
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

export interface ICreateHouseLegalPurity {
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
