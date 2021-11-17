import { IOption } from "../../shared/lib/interfaces/general"

export const DROPDOWN_FILTER_OPTIONS: IOption[] = [
    {label: "Купить", value: "buy"},
    {label: "Продать", value: "sell"}
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
    {label: "Сортировать: по уменьшению", value: "smaller" },
]
