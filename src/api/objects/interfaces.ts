import { IGeneralObjectResponse, IGeneralResponse, TServerLanguages } from "../../utils/interfaces/general";

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
    public images: IObjectImage[]
    public object_id: number
    public lang: TServerLanguages
    public name: string | null
    public description: string | null
    public type: ObjectTypes | null
    public address: string | null
    public city: string | null
    public lat: number | null
    public lng: number | null
    public price: number | null
    public sort: number | null 
    public planning: string | null
    public secondary_type: string
    public total_area: number | null
    public floor: number | null
    public total_floors: number | null

    constructor(
        images: IObjectImage[] = [],
        object_id: number = 0,
        lang: TServerLanguages = 'ru',
        name: string | null = 'Дом',
        description: string | null = "Описание...",
        type: ObjectTypes | null = null,
        address: string | null = "Ул. Неизвестная",
        city: string | null = "Крым",
        lat: number | null = 0,
        lng: number | null = 0,
        price: number | null = 90000,
        sort: number | null = null,
        planning: string | null = null,
        secondary_type: string = '',
        total_area: number | null = null,
        floor: number | null = 0,
        total_floors: number | null = 0
        ) { 
            this.images = images
            this.object_id = object_id
        this.lang = lang,
        this.name = name,
        this.description = description,
        this.type = type,
        this.address = address
        this.city = city
        this.lat = lat
        this.lng = lng
        this.price = price
        this.sort = sort
        this.planning = planning
        this.secondary_type = secondary_type
        this.total_area = total_area
        this.floor = floor
        this.total_floors = total_floors
        }
}

export interface IObjectResponse extends IGeneralResponse<IGeneralObjectResponse<IObjectEntry>> {}

