import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import { SearchApi } from "../../../api/search/search";
import { FILTER_ACTIONS_OPTIONS, FILTER_APARTMENT_TYPE_OPTIONS, FILTER_PRIVATE_HOUSE_OPTIONS, FILTER_FLOORS_OPTIONS, 
  FILTER_HOUSE_TYPE_OPTIONS, TOGGLE_BUTTONS_OPTIONS_APART, TOGGLE_BUTTONS_OPTIONS_HOUSE, FILTER_IRB_OPTIONS, 
  FILTER_LAND_SPECS_OPTIONS } from "../../../components/containers/Filter/config";

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  views = {
    filter: false,
    map: false,
    grid: true,
  }
  widthBrowser = 1280
  fetching = true
  sort = 'default'
  setSort(sort: string) {
    this.sort = sort
  } 
  params = {}
  initialData: any = {}
  filter = {
    //дом/квартира/участок
    'type__slug': FILTER_HOUSE_TYPE_OPTIONS[0].value,
    //не найдено - новостройка/вторичка
    'building-type': FILTER_APARTMENT_TYPE_OPTIONS[0].value,
    //не найдено текстовое поле - мультивыбор первый/последний этаж и т.д
    'floor__in': [] as Array<any>,
    //цена от
    'price__gte': undefined,
    //цена до
    'price__lte': undefined,

    'params__reality_object_param__slug": "Total_area", "params__value_int__gte': undefined,
    'params__reality_object_param__slug": "Total_area", "params__value_int__lte': undefined,
    //количество комнат - требуются правки с сериалайзер
    'rooms-in-apartment__in': [] as Array<any>,
    //купить/продать
    "advert_type": FILTER_ACTIONS_OPTIONS[0].value,
    //поиск по названию
    "name__contains": undefined,
    //не найдено - уточняющий мультивыбор Дом/Таунхаус/Коттедж
    'privateType__in': [] as Array<any>,

    'params__reality_object_param__slug": "Floors", "params__value_int__gte': undefined,
    'params__reality_object_param__slug": "Floors", "params__value_int__lte': undefined,
    //ИЖС или садоводство 
    'params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text': undefined,
    //мульти благоустройство - требуются правки с сериалайзер
    'params__reality_object_param__slug__in': [] as Array<any>,
    //мульти тип дома - требуются правки с сериалайзер
    'houseType__in': [] as Array<any>,
  }
  setFilter(values: any) {
    this.filter = {
    ...this.filter,
    'type__slug': values['type__slug'],
    'building-type': values['building-type'],
    'floor__in': values['floor__in'],
    'price__gte': values['price__gte'],
    'price__lte': values['price__lte'],
    'params__reality_object_param__slug": "Total_area", "params__value_int__gte': values['params__reality_object_param__slug": "Total_area", "params__value_int__gte'],
    'params__reality_object_param__slug": "Total_area", "params__value_int__lte': values['params__reality_object_param__slug": "Total_area", "params__value_int__lte'],
    'rooms-in-apartment__in': values['rooms-in-apartment__in'],
    "advert_type": values['advert_type'],
    "name__contains": values['name__contains'],
    'privateType__in': values['privateType__in'],
    'params__reality_object_param__slug": "Floors", "params__value_int__gte': values['params__reality_object_param__slug": "Floors", "params__value_int__gte'],
    'params__reality_object_param__slug": "Floors", "params__value_int__lte': values['params__reality_object_param__slug": "Floors", "params__value_int__lte'],
    'params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text': values['params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text'],
    'params__reality_object_param__slug__in': values['params__reality_object_param__slug__in'],
    'houseType__in': values['houseType__in'],
    }
  }
  setView(value: 'map' | 'grid' | 'filter'){
    if(value === 'map'){
      this.views = {
        filter: false,
        map: true,
        grid: false,
      }
    }
    if(value === 'grid'){
      this.views = {
        filter: false,
        map: false,
        grid: true,
      }
    }
    if(value === 'filter'){
      this.views = {
        filter: true,
        map: false,
        grid: false,
      }
    }
  }

  get() {
    return JSON.parse(JSON.stringify({ ...this}))
  }

  onWidthBrowser(width: number){
    this.widthBrowser = width
  }

  setOrderType(value: string | number) {
    this.filter = {...this.filter, "advert_type": value}
  }
  setHouseType(value: string | number) {
    console.log('value', value)
    this.filter = {
      ...this.filter, 
      'type__slug': value, 
      'building-type': FILTER_APARTMENT_TYPE_OPTIONS[0].value,
      'privateType__in': [],
      'params__reality_object_param__slug__in': [], 
      'params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text': value !== 'land' ? undefined : this.filter['params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text'],
      'rooms-in-apartment__in': [],
    }
  }
  setFloors(value: any) {
    const selectedImprovmentSet = new Set(this.filter['floor__in'])
    selectedImprovmentSet.has(value) ? selectedImprovmentSet.delete(value) : selectedImprovmentSet.add(value)
    this.filter = { ...this.filter, 'floor__in': Array.from(selectedImprovmentSet) }
  }
  setRoomsApart(value: any) {
    const selectedPlanningSet = new Set(this.filter['rooms-in-apartment__in'])
    selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
    this.filter = { ...this.filter, 'rooms-in-apartment__in': Array.from(selectedPlanningSet) }
  }
  setSearchField(value: any) {
    this.filter = { ...this.filter, "name__contains": value }
  }
  setBuildingType(value: any) {
    this.filter = { ...this.filter, 'building-type': value }
  }
  setPrivateType(value: any) {
    const selectedPlanningSet = new Set(this.filter['privateType__in'])
    selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
    this.filter = { ...this.filter, 'privateType__in': Array.from(selectedPlanningSet) }
  }
  setPriceFrom(value: any) {
    this.filter = {...this.filter, 'price__gte': value}
  }
  setPriceTo(value: any) {
    this.filter = {...this.filter, 'price__lte': value}
  }
  setSquareFrom(value: any) {
    this.filter = {...this.filter, 'params__reality_object_param__slug": "Total_area", "params__value_int__gte': value}
  }
  setSquareTo(value: any) {
    this.filter = {...this.filter, 'params__reality_object_param__slug": "Total_area", "params__value_int__lte': value}
  }
  setPrivateFloorFrom(value: any) {
    this.filter = {...this.filter, 'params__reality_object_param__slug": "Floors", "params__value_int__gte': value}
  }
  setPrivateFloorTo(value: any) {
    this.filter = {...this.filter, 'params__reality_object_param__slug": "Floors", "params__value_int__lte': value}
  }
  setIRB(value: any) {
    this.filter = {...this.filter, 'params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text': value}
  }
  setForHouseType(value: any) {
    const selectedImprovmentSet = new Set(this.filter['houseType__in'])
    selectedImprovmentSet.has(value) ? selectedImprovmentSet.delete(value) : selectedImprovmentSet.add(value)
    this.filter = { ...this.filter, 'houseType__in': Array.from(selectedImprovmentSet) }
  }
  setImprovment(value: any) {
    const selectedImprovmentSet = new Set(this.filter['params__reality_object_param__slug__in'])
    selectedImprovmentSet.has(value) ? selectedImprovmentSet.delete(value) : selectedImprovmentSet.add(value)
    this.filter = { ...this.filter, 'params__reality_object_param__slug__in': Array.from(selectedImprovmentSet) }
  }
  
  setParams(newParams: any) {
    this.params = newParams
  }

  getFilter() {
    return JSON.parse(JSON.stringify({ ...this.filter}))
  }

  getInitialData() {
    return JSON.parse(JSON.stringify({ ...this.initialData}))
  }

  getParams() {
    return JSON.parse(JSON.stringify({ ...this.params}))
  }

  async fetch() {
    this.fetching = true
    const res = SearchApi.getFilteredObj(this.params)
    this.initialData = await res
    this.fetching = false
  }
}

const StoreContext = createContext<SearchStore>(new SearchStore());

const StoreProvider: FC<{ store: SearchStore}> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useSearchStore = () => {
  return useContext(StoreContext);
};

export { SearchStore, StoreProvider, useSearchStore };