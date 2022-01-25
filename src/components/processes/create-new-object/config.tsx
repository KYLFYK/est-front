import { IOption } from "../../../utils/interfaces/general";
import { FoundersTypes } from "../../../utils/interfaces/objects";


export const INFRASTRUCTURE_TAB_VIEW_OPTIONS: IOption[] = [
    { value: "park", label: "Двор, парк" },
    { value: "sea", label: "Набережная, море" },
    { value: "downtown", label: "Центр города, историческая застройка" }
]


export const INFO_TAB_HOUSE_TYPE: IOption[] = [
    { value: "Каменный", label: "Каменный" },
    { value: "Деревянный", label: "Деревянный" },
    { value: "Каркасный", label: "Каркасный" },
]
export const INFO_TAB_bathroom_TYPE: IOption[] = [
    { value: "Раздельный", label: "Раздельный" },
    { value: "Совмещённый", label: "Совмещённый" },
    { value: "Раздельный,Совмещённый", label: "Раздельный,Совмещённый" },
]
export const INFO_TAB_repair_TYPE: IOption[] = [
    { value: "Евро", label: "Евро" },
    { value: "Дизайнерский", label: "Дизайнерский" },
    { value: "Косметический", label: "Косметический" },
]
export const INFO_TAB_wall_TYPE: IOption[] = [
    { value: "Каменные", label: "Каменные" },
    { value: "Каменные с утеплением", label: "Каменные с утеплением" },
    { value: "Каменные с утеплением и облицовочный кирпичём", label: "Каменные с утеплением и облицовочный кирпичём" },
    { value: "Деревянные", label: "Деревянные" },
    { value: "Деревянные с утеплением", label: "Деревянные с утеплением" },
    { value: "Деревянные с облицовочный кирпичём", label: "Деревянные с облицовочный кирпичём" },
    { value: "Мазанка", label: "Мазанка" },
    { value: "Мазанка с утеплением", label: "Мазанка с утеплением" },
    { value: "Мазанка с облицовочный кирпичём", label: "Мазанка с облицовочный кирпичём" }
]
export const INFO_TAB_foundation_TYPE: IOption[] = [
    { value: "Столбчатый", label: "Столбчатый" },
    { value: "Свайный", label: "Свайный" },
    { value: "Ленточный", label: "Ленточный" },
    { value: "Плитный (ЖБП)", label: "Плитный (ЖБП)" },
]
export const INFO_TAB_roof_TYPE: IOption[] = [
    { value: "Плоская", label: "Плоская" },
    { value: "Плоская эксплуатируемая", label: "Плоская эксплуатируемая" },
    { value: "Скатная кровля", label: "Скатная кровля" },
]

export const INFO_TAB_ELECTRICITY_TYPE: IOption[] = [
    { value: "Центральное", label: "Центральное" },
    { value: "Дизельный генератор", label: "Дизельный генератор" },
    { value: "Солнечные панели", label: "Солнечные панели" },
]
export const INFO_TAB_ventilation_TYPE: IOption[] = [
    { value: "Приточно вытяжная система", label: "Центральное" },
    { value: "Естественная", label: "Естественная" },
    { value: "Смешанная", label: "Смешанная" },
]
export const INFO_TAB_internet_TYPE: IOption[] = [
    { value: "Проводной", label: "Проводной" },
    { value: "Спутниковый", label: "Спутниковый" },
    { value: "Мобильный", label: "Мобильный" },
]
export const INFO_TAB_SEWAGE_SYSTEM_TYPE: IOption[] = [
    { value: "Центральная", label: "Центральная" },
    { value: "Септик", label: "Септик" },
    { value: "Яма", label: "Яма" },
]

export const INFO_TAB_HEATING_TYPE: IOption[] = [
    { value: "Центральное", label: "Центральное" },
    { value: "Газ", label: "Газ" },
    { value: "Газовый котёл", label: "Газовый котёл" },
    { value: "Электрическое", label: "Электрическое" },
    { value: "Дизельный котёл", label: "Дизельный котёл" },
]
export const INFO_TAB_WATER_SUPPLY_TYPE: IOption[] = [
    { value: "Центральный", label: "Центральный" },
    { value: "Автономный", label: "Автономный" },
    { value: "Скважина", label: "Скважина" },
]

export const INFO_TAB_HOUSE_FURNITURE: IOption[] = [
    {value: "fridge", label: "Холодильник"},
    {value: "washer", label: "Стиральная машина"},
    {value: "dishwasher", label: "Посудомоечная машина"},
    {value: "airCondition", label: "Кондиционер"},
    {value: "TV", label: "Телевизор"},
    {value: "roomsFurniture", label: "Мебель в комнатах"},
    {value: "bed", label: "Кровать"},
    {value: "sofa", label: "Диван"},
    {value: "cupboard", label: "Шкаф"}
]

export const LEGAL_PURITY_TAB_OWNER_TYPES: IOption<string, FoundersTypes>[] = [
    {value: FoundersTypes.SINGLE, label: "Единоличный собственник"},
    {value: FoundersTypes.PAIR, label: "2 владельца"}
]


