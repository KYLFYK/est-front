import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import {fullObjectData} from "./PlatConfig";

class PlatStore {
    constructor() {
      makeAutoObservable(this);
    }
    fetching = true
    initialData = {
        images: [{url: "", id: 0},],
        object_id: 0,
        lang: "ru",
        name: "",
        type : "plat",
        category: "Участок",
        address: "",
        city: "",
        lat: 1,
        lng: 1,
        price: 0,
        sort: null,
        planning: "",
        secondary_type: "",
        total_area: 0,
        floor: 0,
        total_floors: 0,
        favorite: false,
        publish: "",
        views: "",
        agency: "",
        info_options: [{ label: "", value: "" },],
        description_items: [""],
        object_specs: [{
          subtitle: "",
          specificationsItems: [{
            value: "",
            label: { title: "", text: "" },
          }]
        }],
        legalPurityData: {
          encumbrances: false,
          risks: false,
          tabsData: {
            general: [
              {
                value: "",
                description: "",
                label: [{ title: "", text: ""}],
              },
            ],
            founders: [
              {
                value: "",
                label: [{ title: "", text: ""}],
              },
              {
                value: "",
                description: "",
                label: [{title: "", text: ""}],
              },
            ],
            encumbrances: [
              {
                title: "",
                encumbrances: [
                  {
                    status: 0,
                    description: "",
                    text: "",
                  },
                ],
              },
            ],
            recomendations: [{value: "", label: ""}]
          }
        }
      }


  fetch(id: string | string[] | undefined) {
    this.initialData = Number(id) > 0 ? fullObjectData.filter((fod) => fod.object_id === Number(id))[0] : this.initialData
    this.fetching = false
  }
}

const StoreContext = createContext<PlatStore>(new PlatStore());

const StoreProvider: FC<{ store: PlatStore}> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStore = () => {
  return useContext(StoreContext);
};

export { PlatStore, StoreProvider, useStore };