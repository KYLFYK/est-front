import {
  ICreateApartmentAboutTab,
  ICreateApartsGeneralInfo,
  ICreateApartsInfoTab,
  ICreateApartsInfrastructure,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateApartmentStoreType";
import {
  ICreateHouseAboutTab,
  ICreateHouseGeneralInfo,
  ICreateHouseInfoTab,
  ICreateHouseInfrastructure,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType";
import {
  ICreateLandAboutTab,
  ICreateLandGeneralInfo,
  ICreateLandInfrastructure,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../../mobx/types/CreateObjectStoresTypes/CreateObjectStoreType";
import {
  ICreateTownhouseGeneralInfo,
  ICreateTownhouseInfoTab,
  ICreateTownhouseInfrastructure,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateTownhouseStoreType";
import { ObjectTypes } from "../../../utils/interfaces/objects";

export type TGeneralInfoState =
  | ICreateApartsGeneralInfo
  | ICreateHouseGeneralInfo
  | ICreateTownhouseGeneralInfo
  | ICreateLandGeneralInfo;
export type TInfoState =
  | ICreateHouseInfoTab
  | ICreateTownhouseInfoTab
  | ICreateApartsInfoTab;
export type TInfrastructureState =
  | ICreateHouseInfrastructure
  | ICreateTownhouseInfrastructure
  | ICreateLandInfrastructure
  | ICreateApartsInfrastructure;
export type TAboutTabState =
  | ICreateApartmentAboutTab
  | ICreateHouseAboutTab
  | ICreateLandAboutTab;

export const getInitStateAboutTab = (
  objectType: ObjectTypes,
  createObjectStore: ICreateObject
) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return createObjectStore.apartment.about;
    case ObjectTypes.HOUSE:
      return createObjectStore.house.about;
    case ObjectTypes.TOWNHOUSE:
      return createObjectStore.townhouse.about;
    case ObjectTypes.LAND:
      return createObjectStore.land.about;

    default:
      break;
  }
};

export const getInitialStateGeneralInfoTab = (
  objectType: ObjectTypes,
  createObjectStore: ICreateObject
) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return createObjectStore.apartment.generalInfo;
    case ObjectTypes.HOUSE:
      return createObjectStore.house.generalInfo;
    case ObjectTypes.TOWNHOUSE:
      return createObjectStore.townhouse.generalInfo;
    case ObjectTypes.LAND:
      return createObjectStore.land.generalInfo;
    default:
      break;
  }
};

export const getInitialStateInfrastructureTab = (
  objectType: ObjectTypes,
  createObjectStore: ICreateObject
) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return createObjectStore.apartment.infrastructure;
    case ObjectTypes.HOUSE:
      return createObjectStore.house.infrastructure;
    case ObjectTypes.TOWNHOUSE:
      return createObjectStore.townhouse.infrastructure;
    case ObjectTypes.LAND:
      return createObjectStore.land.infrastructure;
    default:
      break;
  }
};

export const getInitialStateInfoTab = (
  objectType: ObjectTypes,
  createObjectStore: ICreateObject
) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return createObjectStore.apartment.info;
    case ObjectTypes.HOUSE:
      return createObjectStore.house.info;
    case ObjectTypes.TOWNHOUSE:
      return createObjectStore.townhouse.info;
    default:
      break;
  }
};
