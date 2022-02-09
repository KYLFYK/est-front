import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import { SearchApi } from "../../../api/search/search"

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }
  fetching = true
  sort = 'default'
  setSort(sort: string) {
    this.sort = sort
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

  get() {
    return JSON.parse(JSON.stringify({ ...this.initialData}))
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

const useStore = () => {
  return useContext(StoreContext);
};

export { SearchStore, StoreProvider, useStore };