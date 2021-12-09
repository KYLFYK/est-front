import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectModel } from "./CreateObjectStoreType";

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
  country: string;
  city: string;
  address: string;
  cost: number;
}

export interface ICreateLandGeneralInfo {
  description: string;
  photos: ICustomFile[];
  cottageVillageName: string;
  landGeneralSquare: string;
  landStatus: string;
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
  RealEstateRegister: {
    address: string,
    cadastralNumber: string,
    cadastralCost: string,
    generalSquare: string,
  },
  currentFounder: {
    founderType: FoundersTypes,
    founderNames: string[],
    cadastralNumber: string,
    ownershipFrom: Date,
    ownershipTo: Date, 
  },
  previousFounder: {
    founderType: FoundersTypes,
    founderNames: string[],
    cadastralNumber: string,
    ownershipFrom: Date,
    ownershipTo: Date, 
  }
}
