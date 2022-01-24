import { IOption } from "../../../utils/interfaces/general";

export const TOGGLE_BUTTONS_OPTIONS: IOption[] = [
    {label: "Студия", value: "studio"},
    {label: "1", value: "one"},
    {label: "2", value: "two"},
    {label: "3", value: "three"},
    {label: "4", value: "four"},
    {label: "Свободная планировка", value: "free_plan"},
]

export const FILTER_ACTIONS_OPTIONS: IOption[] = [
    {value: "buy", label: "Купить"},
    {value: "sale", label: "Продать"}
]

export const FILTER_HOUSE_TYPE_OPTIONS: IOption[] = [
    {value: "apartment", label: "Квартиру"},
    {value: "villa", label: "Виллу"},
    {value: "aparts", label: "Апартаменты"},
    {value: "place", label: "Участок"}
]
export const FILTER_BUILDING_TYPE_OPTIONS: IOption[] = [
    {value: "new", label: "Новостройка"},
    {value: "secondary", label: "Вторичное"},
]

export const FILTER_FLOORS_OPTIONS: IOption[] = [
    {value: "not_last_not_firts", label: "Не первый этаж, не последний этаж, с балконом"},
    {value: "first", label: "Первый этаж"},
    {value: "last", label: "Последний этаж"}
]
