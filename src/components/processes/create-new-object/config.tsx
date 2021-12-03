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
export interface ICreateApartmentAboutTab {
    name: "",
    country: "",
    city: "",
    address: "",
    cost: "",
    index: "",
    type: "",
    complexName: "",
    floor: "",
    floorsAmmount?: "",
}

export interface ICreateHouseAboutTab {
    name: "",
    country: "",
    city: "",
    address: "",
    cost: "",
    index: "",
}

export interface ICreateLandAboutTab {
    name: "",
    country: "",
    city: "",
    address: "",
    cost: "",
}

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



export const ABOUT_TAB_HOUSE_INIT: ICreateHouseAboutTab = {
    name: "",
    country: "",
    city: "",
    index: "",
    address: "",
    cost: "",
};

export const ABOUT_TAB_LAND_INIT: ICreateLandAboutTab = {
    name: "",
    country: "",
    city: "",
    address: "",
    cost: "",
};

export const ABOUT_TAB_APARTMENT_INIT: ICreateApartmentAboutTab = {
    name: "",
    country: "",
    city: "",
    index: "",
    address: "",
    cost: "",
    type: "",
    complexName: "",
    floor: "",
    floorsAmmount: "",
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


