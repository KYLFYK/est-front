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