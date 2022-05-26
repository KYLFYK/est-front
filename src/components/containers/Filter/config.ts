import { IOption } from "../../../utils/interfaces/general";

export const TOGGLE_BUTTONS_OPTIONS_APART: IOption[] = [
  { label: "Студия", value: "studio" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "4+", value: "four" },
  //{ label: "5", value: "five" },
  //{ label: "6", value: "six" },
  { label: "Свободная планировка", value: "free_plan" },
];

export const TOGGLE_BUTTONS_OPTIONS_APART_MOBILE: IOption[] = [
  { label: "Студия", value: "studio" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3+", value: "three" },
  { label: "Своб. план.", value: "free_plan" },
];

export const TOGGLE_BUTTONS_OPTIONS_HOUSE: IOption[] = [
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "4", value: "four" },
  { label: "5", value: "five" },
  { label: "6", value: "six" },
];

export const FILTER_ACTIONS_OPTIONS: IOption[] = [
  { value: "buy", label: "Купить" },
  { value: "sell", label: "Продать" },
  //{value: "rent", label: "Снять"},
];

export const FILTER_HOUSE_TYPE_OPTIONS: IOption[] = [
  { value: "apartment", label: "Квартиру" },
  { value: "house", label: "Дом" },
  { value: "land", label: "Участок" },
  //{ value: "cottages", label: "Коттеджный посёлок" },
];

export const FILTER_PRIVATE_HOUSE_OPTIONS: IOption[] = [
  { value: "house", label: "Дом" },
  { value: "townhouse", label: "Таунхаус" },
  { value: "cottage", label: "Коттедж" },
];

export const FILTER_APARTMENT_TYPE_OPTIONS: IOption[] = [
  { value: "new", label: "Новостройка" },
  { value: "old", label: "Вторичное" },
];

export const FILTER_FORHOUSE_TYPE_OPTIONS: IOption[] = [
  { value: "brick", label: "Кирпичный" },
  { value: "monolithic", label: "Монолитный" },
  { value: "panel", label: "Панельный" },
  { value: "brick-monolithic", label: "Кирпично-монолитный" },
  { value: "blocky", label: "Блочный" },
  { value: "wooden", label: "Деревянный" },
  { value: "reinforced_concrete", label: "Железобетонный" },
];

export const FILTER_FLOORS_OPTIONS: IOption[] = [
  {
    value: "not_last_not_firts",
    label: "Не первый этаж, не последний этаж, с балконом",
  },
  { value: "first", label: "Первый этаж" },
  { value: "last", label: "Последний этаж" },
];

export const FILTER_IRB_OPTIONS: IOption[] = [
  { value: "Да", label: "ИЖС" },
  { value: "Нет", label: "В садоводстве" },
];

export const FILTER_LAND_SPECS_OPTIONS: IOption[] = [
  { value: "electric", label: "Электричество" },
  { value: "gas", label: "Газ" },
  { value: "water", label: "Вода" },
  { value: "canalization", label: "Канализация" },
];

export const FILTER_HOUSE_TYPES: IOption[] = [
  { value: "apartment", label: "Квартиру" },
  { value: "house", label: "Дом" },
  { value: "land", label: "Участок" },
  { value: "townhouse", label: "Таунхаус" },
  { value: "complex", label: "Жилой комплекс" },
  { value: "cottages", label: "Коттеджный посёлок" },
];

export const FILTER_POSITIONS_API_TYPES: IOption[] = [
  { value: "params__reality_object_param__advert_type", label: "Тип сделки" },
  { value: "params__reality_object_param__type__slug", label: "Тип объекта" },
  { value: "benefit__in", label: "Благоустройство" },
];