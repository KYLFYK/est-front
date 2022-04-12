import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectModel } from "./CreateObjectStoreType";
import { IUploadedFile } from "../../stores/CreateObjectStores/CreateObjectStore";

export interface ICreateObjectLand
  extends ICreateObjectModel<
    ICreateLandAboutTab,
    ICreateLandGeneralInfo,
    ICreateLandInfrastructure,
    ICreateLandInfoTab,
    ICreateLandLegalPurity
  > {}

export interface ICreateLandAboutTab {
  name: string;
  country: number;
  city: number;
  address: string;
  cost: number;
  region: number;
  type: string;
  latitude: number;
  longitude: number;
}

export interface ICreateLandGeneralInfo {
  description: string;
  photos: Array<ICustomFile | IUploadedFile>;
  cottageVillageName: string;
  landGeneralSquare: string;
  landStatus: string;
  vrTour: string;
  video: string;
}

export interface ICreateLandInfrastructure {
  description: string;
}

export interface ICreateLandInfoTab {
  waterPipe: string;
  heating: string;
  sewerage: string;
  buildings: string;
}

export interface ICreateLandLegalPurity {
  realEstateRegister: {
    address: string;
    cadastralNumber: string;
    cadastralCost: string;
    generalSquare: string;
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
