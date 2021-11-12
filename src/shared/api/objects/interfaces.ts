import { IGeneralObjectResponse, IGeneralResponse, TServerLanguages } from "../../lib/interfaces/general";

interface IObjectImage {
    id: number,
    url: string,
}

export enum ObjectTypes {
    VILLA = "villa",
    APARTMENTS = "apartment",
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

export class IObjectEntry {
    constructor(
        public images: IObjectImage[] = [],
        public object_id: number = 0,
        public lang: TServerLanguages = 'ru',
        public name: string | null = 'Дом',
        public description: string | null = "Описание...",
        public type: ObjectTypes | null = null,
        public address: string | null = "Ул. Неизвестная",
        public city: string | null = "Крым",
        public lat: number | null = 0,
        public lng: number | null = 0,
        public price: number | null = 90000,
        public sort: number | null = null,
        public planning: string | null = null,
        public secondary_type: string = '',
        public total_area: number | null = null,
        public floor: number | null = 0,
        public total_floors: number | null = 0
        ) { }
}

export interface IObjectResponse extends IGeneralResponse<IGeneralObjectResponse<IObjectEntry>> {}

