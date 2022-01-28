import { IOption } from "../../../utils/interfaces/general"

export const DROPDOWN_FILTER_OPTIONS: IOption[] = [
    {label: "Купить", value: "buy"},
    {label: "Продать", value: "sell"}
]
export const DROPDOWN_COUNTRY_OPTIONS: IOption[] = [
    {label: "Россия", value: "Russia"}
]
export const DROPDOWN_CITY_OPTIONS: IOption[] = [
    {label: "Сочи", value: "Sochi"},
    {label: "Крым", value: "Crimea"},
    {label: "Москва", value: "Moscow"}
]
const dropDownArray = [
    { type :'country',
        dropdown:[
            {label: "Россия", value: "RF"},
            {label: "Украина", value: "YKR"},
            {label: "Беларусь", value: "BL"}
        ]
    },{ type :'sity',
        dropdown:[
            {label: "Сочи", value: "Sochi"},
            {label: "Крым", value: "Crimea"},
            {label: "Москва", value: "Moscow"}
        ]
    }
]

export const TOGGLE_BUTTONS_OPTIONS: IOption[] = [
    {label: "Студия", value: "studio"},
    {label: "1", value: "one"},
    {label: "2", value: "two"},
    {label: "3", value: "three"},
    {label: "4+", value: "fourPlus"},
    {label: "Свободная планировка", value: "free"},
]

export const DROPDOWN_PLACEHOLDER = 'Выберите опцию'

export const SORT_FILTER_OPTIONS: IOption[] = [
    {label: "Сортировать: по умолчанию", value: "default" },
    {label: "Сортировать: по возрастанию", value: "bigger" },
    {label: "Сортировать: по убыванию", value: "smaller" },
]
