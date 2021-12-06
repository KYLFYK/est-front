import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import { ICreateObjectModel } from "./CreateObjectStoreType";

export interface ICreateObjectLand
  extends ICreateObjectModel<
    ICreateLandAboutTab,
    ICreateLandGeneralInfo,
    ICreateLandInfrastructure,
    ICreateLandInfoTab
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
