import { ICreateApartmentAboutTab, ICreateApartsGeneralInfo, ICreateApartsInfoTab, ICreateApartsInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateApartmentStoreType";
import { ICreateHouseAboutTab, ICreateHouseGeneralInfo, ICreateHouseInfoTab, ICreateHouseInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType";
import { ICreateLandAboutTab, ICreateLandGeneralInfo, ICreateLandInfoTab, ICreateLandInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateTownhouseGeneralInfo, ICreateTownhouseInfoTab, ICreateTownhouseInfrastructure } from "../../../mobx/types/CreateObjectStoresTypes/CreateTownhouseStoreType";
import { IOption } from "../../../utils/interfaces/general";

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

//
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


//
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

//
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




