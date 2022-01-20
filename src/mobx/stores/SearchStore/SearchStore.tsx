import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import { SearchApi } from "../../../api/search/search"

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }
  fetching = true
  params = {
    objectType: 'apartment', 
    actionType: 'sale', 
    secondaryType: 'secondary', 
    planning: 'free_plan',
  }
  initialData: any = []
  async fetch() {
    const res = SearchApi.getFilteredObj({
      'object-type': 'apartment', 
      'order-type': 'sale', 
      'building-type': 'secondary', 
      'rooms': 'free_plan',
    })
    this.initialData = await res
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