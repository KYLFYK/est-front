import {
  ICreateComplexAboutTab,
  ICreateComplexGeneralInfo,
  ICreateComplexInfoTab,
  ICreateComplexInfrastructure,
  ICreateComplexLegalPurity,
  ICreateObjectComplex,
} from "../../types/CreateObjectStoresTypes/CreateComplexStoreTypes";

export class CreateVillageStore implements ICreateObjectComplex {
  about: ICreateComplexAboutTab = {
    name: "",
    country: "",
    city: "",
    region: "",
    address: "",
    index: 0,
    type: "",
  };
  generalInfo: ICreateComplexGeneralInfo = {
    description: "",
    photos: [],
    priceObjectMin: 0,
    priceObjectMax: 0,
    areaObjectMin: 0,
    areaObjectMax: 0,
    amountObjects: 0,
    amountBuildings: 0,
    amountFloors: 0,
    heightCeilings: 0,
  };
  info: ICreateComplexInfoTab = {
    constructionProgress: [],
    guides: [],
  };
  infrastructure: ICreateComplexInfrastructure = {
    infrastructure: "",
  };
  legalPurity: ICreateComplexLegalPurity = {};
}
