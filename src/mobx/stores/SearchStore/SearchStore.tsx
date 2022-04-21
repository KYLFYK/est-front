import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import { SearchApi } from "../../../api/search/search";
import { FILTER_ACTIONS_OPTIONS, FILTER_BUILDING_TYPE_OPTIONS, FILTER_PRIVATE_HOUSE_OPTIONS, FILTER_FLOORS_OPTIONS, 
  FILTER_HOUSE_TYPE_OPTIONS, TOGGLE_BUTTONS_OPTIONS_APART, TOGGLE_BUTTONS_OPTIONS_HOUSE, FILTER_IRB_OPTIONS, 
  FILTER_LAND_SPECS_OPTIONS } from "../../../components/containers/Filter/config";

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }
  activeFilter=false
  fetching = true
  sort = 'default'
  setSort(sort: string) {
    this.sort = sort
  } 
  params = {}
  initialData: any = []
  filter = {
    'object-type': FILTER_HOUSE_TYPE_OPTIONS[0].value,
    'building-type': FILTER_BUILDING_TYPE_OPTIONS[0].value,
    floor: undefined,
    'price-from': undefined,
    'price-to': undefined,
    'square-from': undefined,
    'square-to': undefined,
    'rooms-in-apartment': '',
    'rooms-in-house': '',
    'order-type': FILTER_ACTIONS_OPTIONS[0].value,
    searchValue: undefined,
    'privateType': FILTER_PRIVATE_HOUSE_OPTIONS[0].value,
    'floor-from': undefined,
    'floor-to': undefined,
    'building': undefined,
    'benefit': '',
  }
  setFilter(values: any) {
    this.filter = {
    ...this.filter,
    'object-type': values['object-type'],
    'building-type': values['building-type'],
    floor: values.floor,
    'price-from': values['price-from'],
    'price-to': values['price-to'],
    'square-from': values['square-from'],
    'square-to': values['square-to'],
    'rooms-in-apartment': values['rooms-in-apartment'],
    'rooms-in-house': values['rooms-in-house'],
    'order-type': values['order-type'],
    searchValue: values.searchValue,
    'privateType': values['privateType'],
    'floor-from': values['floor-from'],
    'floor-to': values['floor-to'],
    'building': values['building'],
    'benefit': values['benefit'],
    }
  }
  onActiveFilter(){
    this.activeFilter = !this.activeFilter
  }
  setOrderType(value: string | number) {
    this.filter = {...this.filter, 'order-type': value}
  }
  setHouseType(value: string | number) {
    this.filter = {
      ...this.filter, 
      'object-type': value, 
      'building-type': FILTER_BUILDING_TYPE_OPTIONS[0].value,
      'privateType': FILTER_PRIVATE_HOUSE_OPTIONS[0].value, 
      'benefit': '', 
      'building': value === 'land' ? undefined : this.filter['building'],
      'rooms-in-house': '',
      'rooms-in-apartment': '',
    }
  }
  setFloors(value: any) {
    this.filter = {...this.filter, floor: value}
  }
  setRoomsApart(value: any) {
    const selectedPlanningSet = new Set(this.filter['rooms-in-apartment']?.split(','))
    selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
    this.filter = { ...this.filter, 'rooms-in-apartment': Array.from(selectedPlanningSet).filter((s) => s !== '').join() || '', 'rooms-in-house': '' }
  }
  setRoomsHouse(value: any) {
    const selectedPlanningSet = new Set(this.filter['rooms-in-house']?.split(','))
    selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
    this.filter = { ...this.filter, 'rooms-in-house': Array.from(selectedPlanningSet).filter((s) => s !== '').join() || '', 'rooms-in-apartment': '' }
  }
  setBuildingType(value: any) {
    this.filter = { ...this.filter, 'building-type': value }
  }
  setPrivateType(value: any) {
    this.filter = {...this.filter, 'privateType': value}
  }
  setPriceFrom(value: any) {
    this.filter = {...this.filter, 'price-from': value}
  }
  setPriceTo(value: any) {
    this.filter = {...this.filter, 'price-to': value}
  }
  setSquareFrom(value: any) {
    this.filter = {...this.filter, 'square-from': value}
  }
  setSquareTo(value: any) {
    this.filter = {...this.filter, 'square-to': value}
  }
  setPrivateFloorFrom(value: any) {
    this.filter = {...this.filter, 'floor-from': value}
  }
  setPrivateFloorTo(value: any) {
    this.filter = {...this.filter, 'floor-to': value}
  }
  setIRB(value: any) {
    this.filter = {...this.filter, 'building': value}
  }
  setImprovment(value: any) {
    const selectedImprovmentSet = new Set(this.filter['benefit']?.split(','))
    selectedImprovmentSet.has(value) ? selectedImprovmentSet.delete(value) : selectedImprovmentSet.add(value)
    this.filter = { ...this.filter, 'benefit': Array.from(selectedImprovmentSet).join(',') || '' }
  }
  
  setParams(newParams: any) {
    if(newParams['object-type'] === 'apartment' && !newParams['rooms-in-apartment']){
      newParams['rooms-in-apartment'] = 'free_plan,six,five,four,three,two,one,studio'
    }
    if((newParams['object-type'] === 'house' || newParams['object-type'] === 'townhouse') && !newParams['rooms-in-house']){
      newParams['rooms-in-house'] = 'six,five,four,three,two,one'
    }
    this.params = newParams
  }

  getFilter() {
    return JSON.parse(JSON.stringify({ ...this.filter}))
  }

  getInitialData() {
    return Object.values(JSON.parse(JSON.stringify({ ...this.initialData})))
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