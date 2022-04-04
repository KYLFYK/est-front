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
import {
  IConstructionProgressChangeable,
  ICreateComplexAboutTab,
  ICreateComplexGeneralInfo,
  ICreateComplexInfoTab,
  ICreateComplexInfrastructure,
  ICreateComplexLegalPurity,
} from "../../../mobx/types/CreateObjectStoresTypes/CreateComplexStoreTypes";

export type TGeneralInfoState =
  | ICreateApartsGeneralInfo
  | ICreateHouseGeneralInfo
  | ICreateTownhouseGeneralInfo
  | ICreateLandGeneralInfo
  | ICreateComplexGeneralInfo;
export type TInfoState =
  | ICreateHouseInfoTab
  | ICreateTownhouseInfoTab
  | ICreateApartsInfoTab
  | ICreateComplexInfoTab;
export type TInfrastructureState =
  | ICreateHouseInfrastructure
  | ICreateTownhouseInfrastructure
  | ICreateLandInfrastructure
  | ICreateApartsInfrastructure
  | ICreateComplexInfrastructure;
export type TAboutTabState =
  | ICreateApartmentAboutTab
  | ICreateHouseAboutTab
  | ICreateLandAboutTab
  | ICreateComplexAboutTab;
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
    case ObjectTypes.RESCOMPLEX:
      return createObjectStore.complex.about;

    default:
      return createObjectStore.land.about;
  }
};

export const getObjType = (createObjectStore: ICreateObject) => {
  return createObjectStore.objType;
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
    case ObjectTypes.RESCOMPLEX:
      return createObjectStore.complex.generalInfo;
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
    case ObjectTypes.RESCOMPLEX:
      return createObjectStore.complex.infrastructure;
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
    case ObjectTypes.RESCOMPLEX:
      return createObjectStore.complex.info;
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
    case ObjectTypes.RESCOMPLEX:
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
  cost: boolean,
  region: boolean,
  isValidFloor: boolean,
  isValidFloorsAmmount: boolean,
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
        cost && 
        isValidFloor && 
        isValidFloorsAmmount
      );
    case ObjectTypes.HOUSE:
      return !!(name && country && city && index && address && cost);
    case ObjectTypes.TOWNHOUSE:
      return !!(name && country && city && index && address && cost);
    case ObjectTypes.LAND:
      return !!(name && country && city && address && cost);
    case ObjectTypes.RESCOMPLEX:
      return name && country && city && address && index && region;
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
  interiorDescription: boolean,
  isAmountObjects: boolean,
  isAmountBuildings: boolean,
  isAmountFloors: boolean,
  isHeightCeilings: boolean,
  isPriceObjectMin: boolean,
  isPriceObjectMax: boolean,
  isAreaObjectMin: boolean,
  isAreaObjectMax: boolean,
  isFloors: boolean,
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
        poolSquare &&
        isFloors
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
    case ObjectTypes.RESCOMPLEX:
      return (
        isAmountObjects &&
        isAmountBuildings &&
        isAmountFloors &&
        isHeightCeilings &&
        isPriceObjectMin &&
        isPriceObjectMax &&
        isAreaObjectMin &&
        isAreaObjectMax
      );
    default:
      return false;
  }
};

export const isValidInputsInfrastructureTab = (
  objectType: ObjectTypes,
  description: boolean,
  view: boolean,
  infrastructure: boolean
): boolean => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
    case ObjectTypes.HOUSE:
    case ObjectTypes.TOWNHOUSE:
      return view && description;
    case ObjectTypes.LAND:
      return description;
    case ObjectTypes.RESCOMPLEX:
      return infrastructure;
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
  parkingPrice: boolean,
  process: IConstructionProgressChangeable[]
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
    case ObjectTypes.RESCOMPLEX:
      let result = true;

      process.forEach((item) => {
        if (!item.date || !item.description) {
          result = false;
        }
      });

      return result;

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

export const getActualObjectTypeData = (
  createObjectStore: ICreateObject,
  objectType: ObjectTypes
) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return createObjectStore.apartment;
    case ObjectTypes.TOWNHOUSE:
      return createObjectStore.townhouse;
    case ObjectTypes.HOUSE:
      return createObjectStore.house;
    case ObjectTypes.LAND:
      return createObjectStore.land;
    case ObjectTypes.RESCOMPLEX:
      return createObjectStore.complex;
    default:
      break;
  }
};
