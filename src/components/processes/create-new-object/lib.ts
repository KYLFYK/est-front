import {
  ICreateApartmentAboutTab,
  ICreateApartsGeneralInfo,
  ICreateApartsInfoTab,
  ICreateApartsInfrastructure,
  ICreateApartsLegalPurity,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateApartmentStoreType";
import {
  ICreateHouseAboutTab,
  ICreateHouseGeneralInfo,
  ICreateHouseInfoTab,
  ICreateHouseInfrastructure,
  ICreateHouseLegalPurity,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType";
import {
  ICreateLandAboutTab,
  ICreateLandGeneralInfo,
  ICreateLandInfrastructure,
  ICreateLandLegalPurity,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../../mobx/types/CreateObjectStoresTypes/CreateObjectStoreType";
import {
  ICreateTownhouseGeneralInfo,
  ICreateTownhouseInfoTab,
  ICreateTownhouseInfrastructure,
  ICreateTownhouseLegalPurity,
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
export type TLegalPurityTabState =
  | ICreateApartsLegalPurity
  | ICreateHouseLegalPurity
  | ICreateLandLegalPurity
  | ICreateTownhouseLegalPurity;

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
      return createObjectStore.apartment.generalInfo;
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
      return createObjectStore.apartment.infrastructure;
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
      return createObjectStore.apartment.info;
  }
};

export const getInitialStateLegalPurityTab = (
  objectType: ObjectTypes,
  createObjectStore: ICreateObject
) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return createObjectStore.apartment.legalPurity;
    case ObjectTypes.HOUSE:
      return createObjectStore.house.legalPurity;
    case ObjectTypes.TOWNHOUSE:
      return createObjectStore.townhouse.legalPurity;
    case ObjectTypes.LAND:
      return createObjectStore.land.legalPurity;
    default:
      return createObjectStore.apartment.legalPurity;
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
      return false;
  }
};

export const isValidInputsGeneralTab = (
  objectType: ObjectTypes,
  generalSquare: boolean,
  houseSquare: boolean,
  livingSquare: boolean,
  land: boolean,
  landGeneralSquare: boolean,
  ceilingHeight: boolean,
  rooms: boolean,
  bathroom: boolean,
  kitchen: boolean,
  garage: boolean,
  garageCapacity: boolean,
  garageSquare: boolean,
  pool: boolean,
  poolSquare: boolean,
  cottageVillageName: boolean,
  landStatus: boolean,
  interiorDescription: boolean
): boolean => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return !!(
        generalSquare &&
        livingSquare &&
        ceilingHeight &&
        rooms &&
        bathroom &&
        kitchen &&
        interiorDescription
      );
    case ObjectTypes.HOUSE:
      return !!(
        generalSquare &&
        houseSquare &&
        livingSquare &&
        land &&
        rooms &&
        bathroom &&
        kitchen &&
        garage &&
        garageCapacity &&
        garageSquare &&
        pool &&
        poolSquare
      );
    case ObjectTypes.TOWNHOUSE:
      return !!(
        generalSquare &&
        houseSquare &&
        livingSquare &&
        land &&
        rooms &&
        bathroom &&
        kitchen &&
        garage &&
        garageCapacity &&
        garageSquare &&
        pool &&
        poolSquare
      );
    case ObjectTypes.LAND:
      return !!(landGeneralSquare && cottageVillageName && landStatus);
    default:
      return false;
  }
};

export const isValidInputsInfrastructureTab = (
  objectType: ObjectTypes,
  description: boolean,
  view: boolean
): boolean => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
    case ObjectTypes.HOUSE:
    case ObjectTypes.TOWNHOUSE:
      return view && description;
    case ObjectTypes.LAND:
      return description;
    default:
      return false;
  }
};

export const isValidInputsHouseDetailsTab = (
  objectType: Exclude<ObjectTypes, ObjectTypes.LAND>,
  houseType: boolean,
  fundament: boolean,
  roof: boolean,
  walls: boolean,
  technicalComment: boolean,
  waterPipe: boolean,
  heating: boolean,
  sewerage: boolean,
  electricity: boolean,
  vent: boolean,
  internet: boolean,
  engineeringComment: boolean,
  parking: boolean,
  parkingPrice: boolean
): boolean => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return !!(
        houseType &&
        fundament &&
        roof &&
        walls &&
        waterPipe &&
        heating &&
        sewerage &&
        electricity &&
        internet &&
        parking &&
        parkingPrice
      );
    case ObjectTypes.HOUSE:
      return !!(
        houseType &&
        fundament &&
        roof &&
        walls &&
        technicalComment &&
        waterPipe &&
        heating &&
        sewerage &&
        electricity &&
        vent &&
        internet &&
        engineeringComment
      );
    case ObjectTypes.TOWNHOUSE:
      return !!(
        houseType &&
        fundament &&
        roof &&
        walls &&
        waterPipe &&
        heating &&
        sewerage &&
        electricity &&
        internet
      );

    default:
      return false;
  }
};

export const isValidLegalPurityDetailsTab = (
  objectType: ObjectTypes,
  isValidAddress: boolean,
  isValidCadastralNumber: boolean,
  isValidCadastralCost: boolean,
  isValidGeneralSquare: boolean,
  isValidFloors: boolean
): boolean => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
    case ObjectTypes.HOUSE:
    case ObjectTypes.TOWNHOUSE:
      return (
        isValidAddress &&
        isValidCadastralNumber &&
        isValidCadastralCost &&
        isValidGeneralSquare &&
        isValidFloors
      );
    case ObjectTypes.LAND:
      return (
        isValidAddress &&
        isValidCadastralNumber &&
        isValidCadastralCost &&
        isValidGeneralSquare
      );
    default:
      return false;
  }
};
