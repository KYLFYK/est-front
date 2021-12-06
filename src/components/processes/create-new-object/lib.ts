import { ICreateApartmentAboutTab, ICreateApartsGeneralInfo, ICreateApartsInfoTab, ICreateApartsInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateApartmentStoreType";
import { ICreateHouseAboutTab, ICreateHouseGeneralInfo, ICreateHouseInfoTab, ICreateHouseInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType";
import { ICreateLandAboutTab, ICreateLandGeneralInfo, ICreateLandInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateTownhouseGeneralInfo, ICreateTownhouseInfoTab, ICreateTownhouseInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateTownhouseStoreType";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import {
  ABOUT_TAB_APARTMENT_INIT,
  ABOUT_TAB_HOUSE_INIT,
  ABOUT_TAB_LAND_INIT,
  GENERALINFO_TAB_APARTS_INIT,
  GENERALINFO_TAB_HOUSE_INIT,
  GENERALINFO_TAB_LAND_INIT,
  GENERALINFO_TAB_TOWNHOUSE_INIT,
  INFO_TAB_APARTS_INIT,
  INFO_TAB_HOUSE_INIT,
  INFO_TAB_LAND_INIT,
  INFO_TAB_TOWNHOUSE_INIT,
  INFRASTRUCTURE_TAB_APARTS_INIT,
  INFRASTRUCTURE_TAB_HOUSE_INIT,
  INFRASTRUCTURE_TAB_LAND_INIT,
  INFRASTRUCTURE_TAB_TOWNHOUSE_INIT,
} from "./config";


export type TGeneralInfoState = ICreateApartsGeneralInfo | ICreateHouseGeneralInfo | ICreateTownhouseGeneralInfo | ICreateLandGeneralInfo
export type TInfoState = ICreateHouseInfoTab | ICreateTownhouseInfoTab | ICreateApartsInfoTab
export type TInfrastructureState = ICreateHouseInfrastructure | ICreateTownhouseInfrastructure | ICreateLandInfrastructure | ICreateApartsInfrastructure
export type TAboutTabState = ICreateApartmentAboutTab | ICreateHouseAboutTab | ICreateLandAboutTab


export const getInitStateAboutTab = (objectType: ObjectTypes) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return ABOUT_TAB_APARTMENT_INIT;
    case ObjectTypes.HOUSE:
      return ABOUT_TAB_HOUSE_INIT;
    case ObjectTypes.TOWNHOUSE:
      return ABOUT_TAB_HOUSE_INIT;
    case ObjectTypes.LAND:
      return ABOUT_TAB_LAND_INIT;

    default:
      break;
  }
};

export const getInitialStateGeneralInfoTab = (objectType: ObjectTypes) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return GENERALINFO_TAB_APARTS_INIT;
    case ObjectTypes.HOUSE:
      return GENERALINFO_TAB_HOUSE_INIT;
    case ObjectTypes.TOWNHOUSE:
      return GENERALINFO_TAB_TOWNHOUSE_INIT;
    case ObjectTypes.LAND:
      return GENERALINFO_TAB_LAND_INIT;
    default:
      break;
  }
};

export const getInitialStateInfrastructureTab = (objectType: ObjectTypes) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return INFRASTRUCTURE_TAB_APARTS_INIT;
    case ObjectTypes.HOUSE:
      return INFRASTRUCTURE_TAB_HOUSE_INIT;
    case ObjectTypes.TOWNHOUSE:
      return INFRASTRUCTURE_TAB_TOWNHOUSE_INIT;
    case ObjectTypes.LAND:
      return INFRASTRUCTURE_TAB_LAND_INIT;
    default:
      break;
  }
};

export const getInitialStateInfoTab = (objectType: ObjectTypes) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return INFO_TAB_APARTS_INIT;
    case ObjectTypes.HOUSE:
      return INFO_TAB_HOUSE_INIT;
    case ObjectTypes.TOWNHOUSE:
      return INFO_TAB_TOWNHOUSE_INIT;
    case ObjectTypes.LAND:
      return INFO_TAB_LAND_INIT;
    default:
      break;
  }
};
