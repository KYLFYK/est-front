import { IOption } from "../../../utils/interfaces/general";
import { ICustomFile } from "./components/GeneralInfoObjectTab/GeneralInfoPhotosTab";

interface ICreateObject {
    apartment: ICreateObjectAparts
    land: ICreateObjectLand
    house: ICreateObjectHouse
    townhouse: ICreateObjectTownhouse
}
interface ICreateObjectModel<A, B, C = {}, D = {}, E = {}> {
    about: A
    generalInfo: B,
    infrastructure: C,
    details: D,
    legalPurity: E
}

interface ICreateObjectAparts extends ICreateObjectModel<ICreateApartmentAboutTab, ICreateApartsGeneralInfo> { }

interface ICreateObjectHouse extends ICreateObjectModel<ICreateHouseAboutTab, ICreateHouseGeneralInfo> { }

interface ICreateObjectTownhouse extends ICreateObjectModel<ICreateHouseAboutTab, ICreateTownhouseGeneralInfo> { }

interface ICreateObjectLand extends ICreateObjectModel<ICreateLandAboutTab, ICreateLandGeneralInfo> { }

export type TAboutTabState = ICreateApartmentAboutTab | ICreateHouseAboutTab | ICreateLandAboutTab
export type TGeneralInfoState = ICreateApartsGeneralInfo | ICreateHouseGeneralInfo | ICreateTownhouseGeneralInfo | ICreateLandGeneralInfo
export type TInfrastructureState = ICreateHouseInfrastructure | ICreateTownhouseInfrastructure | ICreateLandInfrastructure | ICreateApartsInfrastructure
export type TInfoState = ICreateHouseInfoTab | ICreateTownhouseInfoTab | ICreateLandInfoTab | ICreateApartsInfoTab
export interface ICreateApartmentAboutTab {
    name: string,
    country: string,
    city: string,
    address: string,
    cost: number,
    index: number,
    type: string,
    complexName: string,
    floor: number,
    floorsAmmount?: number,
}

export interface ICreateHouseAboutTab {
    name: string,
    country: string,
    city: string,
    address: string,
    cost: number,
    index: number,
}

export interface ICreateLandAboutTab {
    name: string,
    country: string,
    city: string,
    address: string,
    cost: number,
}

// GENERAL INFO TAB
export interface ICreateHouseGeneralInfo {
    description: string,
    photos: ICustomFile[],
    generalSquare: string,
    houseSquare: string,
    livingSquare: string,
    land: string,
    rooms: number,
    bathroom: string,
    kitchen: string,
    garage: {
        has: boolean,
        capacity: string,
        square: string,
    },
    pool: {
        has: boolean,
        square: string,
    },
    floors: {
        count: number,
        items: IOption<{ description: string, height?: string }>[]
    },
}

export interface ICreateTownhouseGeneralInfo {
    description: string,
    photos: ICustomFile[],
    generalSquare: string,
    houseSquare: string,
    livingSquare: string,
    land: string,
    rooms: number,
    isolatedInputs: number,
    bathroom: string,
    kitchen: string,
    garage: {
        has: boolean,
        capacity: string,
        square: string,
    },
    pool: {
        has: boolean,
        square: string,
    },
    floors: {
        count: number,
        items: IOption<{ description: string, height?: string }>[]
    },
}

export interface ICreateLandGeneralInfo {
    description: string,
    photos: ICustomFile[],
    cottageVillageName: string,
    landGeneralSquare: string,
    landStatus: string,
}


export interface ICreateApartsGeneralInfo {
    description: string,
    photos: ICustomFile[],
    generalSquare: string,
    livingSquare: string,
    ceilingHeight: string,
    rooms: number,
    bathroom: string,
    kitchen: string,
    customRooms: IOption[]
    interiorDescription: string,
}


// INFRASTRUCTURE TAB
export interface ICreateHouseInfrastructure {
    description: string,
    view: string,
}

export interface ICreateTownhouseInfrastructure {
    description: string,
    view: string,
}
export interface ICreateLandInfrastructure {
    description: string,
}
export interface ICreateApartsInfrastructure {
    description: string,
    view: string,
}


// ABOUT INFO TAB

export interface ICreateHouseInfoTab {
    houseType: string,
    fundament: string,
    roof: string,
    walls: string,
    technicalComment: string,
    waterPipe: string,
    heating: string,
    sewerage: string,
    electricity: string,
    vent: string,
    internet: string,
    engineeringComment: string,
    bedrooms: number,
    bathrooms: number,
    lavatories: number,
    plumbing: string,
    renovation: string,
    furnitureList: string[]
}

export interface ICreateTownhouseInfoTab {
    houseType: string,
    fundament: string,
    roof: string,
    walls: string,
    waterPipe: string,
    heating: string,
    sewerage: string,
    electricity: string,
    internet: string,
    bedrooms: number,
    bathrooms: number,
    lavatories: number,
    plumbing: string,
    renovation: string,
    furnitureList: string[]
}


export interface ICreateApartsInfoTab {
    houseType: string,
    fundament: string,
    roof: string,
    walls: string,
    waterPipe: string,
    heating: string,
    sewerage: string,
    electricity: string,
    internet: string,
    parking: string,
    parkingPrice: number,
    bedrooms: number,
    bathrooms: number,
    lavatories: number,
    plumbing: string,
    renovation: string,
    furnitureList: string[]
}

export interface ICreateLandInfoTab {
    waterPipe: string,
    heating: string,
    sewerage: string,
    buildings: string,
}



export const ABOUT_TAB_HOUSE_INIT: ICreateHouseAboutTab = {
    name: "",
    country: "",
    city: "",
    index: 0,
    address: "",
    cost: 0,
};

export const ABOUT_TAB_LAND_INIT: ICreateLandAboutTab = {
    name: "",
    country: "",
    city: "",
    address: "",
    cost: 0,
};

export const ABOUT_TAB_APARTMENT_INIT: ICreateApartmentAboutTab = {
    name: "",
    country: "",
    city: "",
    index: 0,
    address: "",
    cost: 0,
    type: "",
    complexName: "",
    floor: 0,
    floorsAmmount: 0,
};

export const GENERALINFO_TAB_HOUSE_INIT: ICreateHouseGeneralInfo = {
    description: "",
    photos: [],
    generalSquare: "",
    houseSquare: "",
    livingSquare: "",
    land: "",
    rooms: 0,
    bathroom: "",
    kitchen: "",
    garage: {
        has: true,
        capacity: "",
        square: "",
    },
    pool: {
        has: true,
        square: "",
    },
    floors: {
        count: 0,
        items: []
    },
}

export const GENERALINFO_TAB_TOWNHOUSE_INIT: ICreateTownhouseGeneralInfo = {
    description: "",
    photos: [],
    generalSquare: "",
    houseSquare: "",
    livingSquare: "",
    land: "",
    rooms: 0,
    isolatedInputs: 0,
    bathroom: "",
    kitchen: "",
    garage: {
        has: true,
        capacity: "",
        square: "",
    },
    pool: {
        has: true,
        square: "",
    },
    floors: {
        count: 0,
        items: []
    },
}

export const GENERALINFO_TAB_LAND_INIT: ICreateLandGeneralInfo = {
    description: "",
    photos: [],
    landGeneralSquare: "",
    cottageVillageName: "",
    landStatus: ""
}

export const GENERALINFO_TAB_APARTS_INIT: ICreateApartsGeneralInfo = {
    description: "",
    photos: [],
    generalSquare: "",
    livingSquare: "",
    ceilingHeight: "",
    rooms: 0,
    bathroom: "",
    kitchen: "",
    customRooms: [],
    interiorDescription: "",
}

export const INFRASTRUCTURE_TAB_HOUSE_INIT: ICreateHouseInfrastructure = {
    description: "",
    view: "",
}

export const INFRASTRUCTURE_TAB_TOWNHOUSE_INIT: ICreateTownhouseInfrastructure = {
    description: "",
    view: "",
}

export const INFRASTRUCTURE_TAB_LAND_INIT: ICreateLandInfrastructure = {
    description: "",
}

export const INFRASTRUCTURE_TAB_APARTS_INIT: ICreateApartsInfrastructure = {
    description: "",
    view: "",
}

export const INFO_TAB_HOUSE_INIT: ICreateHouseInfoTab = {
    houseType: '',
    fundament: '',
    roof: '',
    walls: '',
    waterPipe: '',
    heating: '',
    sewerage: '',
    electricity: '',
    internet: '',
    bedrooms: 0,
    bathrooms: 0,
    lavatories: 0,
    plumbing: '',
    renovation: '',
    furnitureList: [],
    technicalComment: "",
    engineeringComment: "",
    vent: ""
}

export const INFO_TAB_TOWNHOUSE_INIT: ICreateTownhouseInfoTab = {
    houseType: '',
    fundament: '',
    roof: '',
    walls: '',
    waterPipe: '',
    heating: '',
    sewerage: '',
    electricity: '',
    internet: '',
    bedrooms: 0,
    bathrooms: 0,
    lavatories: 0,
    plumbing: '',
    renovation: '',
    furnitureList: [],
}

export const INFO_TAB_APARTS_INIT: ICreateApartsInfoTab = {
    houseType: '',
    fundament: '',
    roof: '',
    walls: '',
    waterPipe: '',
    heating: '',
    sewerage: '',
    electricity: '',
    internet: '',
    bedrooms: 0,
    bathrooms: 0,
    lavatories: 0,
    plumbing: '',
    renovation: '',
    furnitureList: [],
    parking: "",
    parkingPrice: 0
}

export const INFO_TAB_LAND_INIT: ICreateLandInfoTab = {
    waterPipe: "",
    heating: "",
    sewerage: "",
    buildings: "",
}


export const INFRASTRUCTURE_TAB_VIEW_OPTIONS: IOption[] = [
    { value: "park", label: "Двор, Парк" },
    { value: "sea", label: "Набережная, море" },
    { value: "downtown", label: "Центр города, историческая застройка" }
]




