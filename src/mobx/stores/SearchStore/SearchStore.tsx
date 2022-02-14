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
  fetching = true
  sort = 'default'
  setSort(sort: string) {
    this.sort = sort
  } 
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
    'benefit': undefined,
  }

  setOrderType(value: string) {
    this.filter = {...this.filter, 'order-type': value}
  }
  setHouseType(value: string) {
    this.filter = {
      ...this.filter, 
      'object-type': value, 
      'building-type': FILTER_BUILDING_TYPE_OPTIONS[0].value,
      'privateType': FILTER_PRIVATE_HOUSE_OPTIONS[0].value, 
      'benefit': undefined, 
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

  getFilter() {
    return JSON.parse(JSON.stringify({ ...this.filter}))
  }

  params = {}
  initialData: any = []
  
  setParams(newParams: any) {
    if(newParams['object-type'] === 'apartment' && !newParams['rooms-in-apartment']){
      newParams['rooms-in-apartment'] = 'free_plan,six,five,four,three,two,one,studio'
    }
    if((newParams['object-type'] === 'house' || newParams['object-type'] === 'townhouse') && !newParams['rooms-in-house']){
      newParams['rooms-in-house'] = 'six,five,four,three,two,one'
    }
    this.params = newParams
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