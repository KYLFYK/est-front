import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";

class BreadcrumbsStore {
  constructor() {
    makeAutoObservable(this);
  }
  
  breadcrumbs = ['', '', '']

  addBreadCrumbs(newCrumbs: string, position: number) {
    this.breadcrumbs[position] = newCrumbs
  }

  get() {
    return JSON.parse(JSON.stringify(this.breadcrumbs))
  }
}

const StoreContext = createContext<BreadcrumbsStore>(new BreadcrumbsStore());

const StoreProvider: FC<{ store: BreadcrumbsStore}> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useBreadcrumbsStore = () => {
  return useContext(StoreContext);
};

export { BreadcrumbsStore, StoreProvider, useBreadcrumbsStore };