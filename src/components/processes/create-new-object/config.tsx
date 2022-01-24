import { IOption } from "../../../utils/interfaces/general";
import { FoundersTypes } from "../../../utils/interfaces/objects";


export const INFRASTRUCTURE_TAB_VIEW_OPTIONS: IOption[] = [
    { value: "park", label: "Двор, парк" },
    { value: "sea", label: "Набережная, море" },
    { value: "downtown", label: "Центр города, историческая застройка" }
]


export const INFO_TAB_HOUSE_TYPE: IOption[] = [
    { value: "Монолитный", label: "Монолитный" },
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


