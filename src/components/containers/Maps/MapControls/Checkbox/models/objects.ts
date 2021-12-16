import { IObjectEntry } from "../../../../../../api/objects/interfaces";

export interface IObjectPayback {
    month_rent_price: null | number,
    year_maintenance_cost: null | number,
    months_per_year_rent: null | number,
}

export interface IObjectEncumbrance {
    status: "warn" | "ok",
    name: string
}

export interface IObjectAboutItem {
    name: string,
    icon: string,
    value: string,
    descr: string | null,
}

export interface IObjectAbout {
    title: string,
    items: IObjectAboutItem[]
}

export interface IObjectInfrastructure {
    title: string,
    descr: null | string
}

export interface IObjectSpecification {
    name: string,
    title: string,
    value: string,
    on_frontpage: number,
}

export interface IObjectGeoData {
    lat: number,
    lng: number,
}

export interface IObjectAddress {
    street: string,
    city: string,
    geo: IObjectGeoData
}

export interface IObjectTour {
    url: string,
    comment: string,
}

export enum ObjectTypes {
    HOUSE = "house",
    APARTMENTS = "apartment",
    RC = "residential-complex",
    PLAT = "plat",
    MUSEUM = "Museum",
    PARK = "Park",
    BEACH = "Beach",
    MEDICINE = "Medicine",
    RESTRAUNT = "Restraunt",
    SPA = 'Spa',
    DOLPHIN = 'Dolphin',
    AQUAPARK = 'Aquapark',
    ZOO = 'Zoo',
    CINEMA = 'Cinema',
    THEATER = 'Theater',
    PALACE = 'Palace',
    CUSTOM_TYPE = "Attractions",
}

export interface IAllPlaces {
    ru: IObjectEntry[],
    cn: IObjectEntry[]
}

export interface IMapObjectDistance {
    dist: string,
    object_id: number,
    time: string,
}
