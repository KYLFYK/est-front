import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { IOption } from "../../../utils/interfaces/general";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectModel } from "./CreateObjectStoreType";
import { IUploadedFile } from "../../stores/CreateObjectStores/CreateObjectStore";

export interface ICreateObjectAparts
  extends ICreateObjectModel<
    ICreateApartmentAboutTab,
    ICreateApartsGeneralInfo,
    ICreateApartsInfrastructure,
    ICreateApartsInfoTab,
    ICreateApartsLegalPurity
  > {}

export interface ICreateApartmentAboutTab {
  name: string;
  country: number;
  city: number;
  region: number;
  address: string;
  cost: number;
  index: number;
  complexName: string;
  floor: number;
  floorsAmmount: number;
  type: string;
  latitude: number;
  longitude: number;
}

export interface ICreateApartsGeneralInfo {
  description: string;
  photos: Array<ICustomFile | IUploadedFile>;
  generalSquare: string;
  livingSquare: string;
  ceilingHeight: string;
  rooms: number;
  bathroom: string;
  kitchen: string;
  customRooms: IOption[];
  interiorDescription: string;
  vrTour: string;
  video: string;
}

export interface ICreateApartsInfrastructure {
  description: string;
  view: string[];
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

export interface ICreateApartsLegalPurity {
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
