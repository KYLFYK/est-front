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
      return createObjectStore.land.about;
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

export const isValidInputsAboutTab = (
  objectType: ObjectTypes,
  name: boolean,
  type: boolean,
  complexName: boolean,
  country: boolean,
  city: boolean,
  index: boolean,
  address: boolean,
  cost: boolean
): boolean => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return !!(
        name &&
        type &&
        complexName &&
        country &&
        city &&
        index &&
        address &&
        cost
      );
    case ObjectTypes.HOUSE:
      return !!(name && country && city && index && address && cost);
    case ObjectTypes.TOWNHOUSE:
      return !!(name && country && city && index && address && cost);
    case ObjectTypes.LAND:
      return !!(name && country && city && address && cost);
    default:
      return false
  }
};
