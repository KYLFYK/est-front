import { IOption } from "../../../utils/interfaces/general";

export const TOGGLE_BUTTONS_OPTIONS_APART: IOption[] = [
    {label: "Студия", value: "studio"},
    {label: "1", value: "one"},
    {label: "2", value: "two"},
    {label: "3", value: "three"},
    {label: "4", value: "four"},
    {label: "5", value: "five"},
    {label: "6", value: "six"},
    {label: "Свободная планировка", value: "free_plan"},
]

export const TOGGLE_BUTTONS_OPTIONS_HOUSE: IOption[] = [
    {label: "комнат 1", value: "one"},
    {label: "2", value: "two"},
    {label: "3", value: "three"},
    {label: "4", value: "four"},
    {label: "5", value: "five"},
    {label: "6", value: "six"},
]

export const FILTER_ACTIONS_OPTIONS: IOption[] = [
    {value: "buy", label: "Купить"},
    {value: "sale", label: "Продать"},
    //{value: "rent", label: "Снять"},
]

export const FILTER_HOUSE_TYPE_OPTIONS: IOption[] = [
    {value: "apartment", label: "Квартиру"},
    {value: "house", label: "Дом"},
    {value: "land", label: "Участок"},
]

export const FILTER_PRIVATE_HOUSE_OPTIONS: IOption[] = [
    {value: "house", label: "Дом"},
    {value: "townhouse", label: "Таунхаус"},
]

export const FILTER_BUILDING_TYPE_OPTIONS: IOption[] = [
    {value: "new", label: "Новостройка"},
    {value: "old", label: "Вторичное"},
]

export const FILTER_FLOORS_OPTIONS: IOption[] = [
    {value: "not_last_not_firts", label: "Не первый этаж, не последний этаж, с балконом"},
    {value: "first", label: "Первый этаж"},
    {value: "last", label: "Последний этаж"},
]

export const FILTER_IRB_OPTIONS: IOption[] = [
    {value: "true", label: "ИЖС"},
    {value: "false", label: "Без ИЖС"},
]

export const FILTER_LAND_SPECS_OPTIONS: IOption[] = [
    {value: "electric", label: "Электричество"},
    {value: "gas", label: "Газ"},
    {value: "water", label: "Вода"},
    {value: "canalization", label: "Канализация"},
]

export const FILTER_HOUSE_TYPES: IOption[] = [
    {value: "apartment", label: "Квартиру"},
    {value: "house", label: "Дом"},
    {value: "land", label: "Участок"},
    {value: "townhouse", label: "Таунхаус"},
    {value: "complex", label: "Жилой комплекс"}
]

