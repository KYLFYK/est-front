import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import {fullObjectData} from "./ComplexConfig";

class ComplexStore {
    constructor() {
      makeAutoObservable(this);
    }
    fetching = true
    initialData = {
        images: [{url: "", id: 0},],
        object_id: 0,
        lang: "ru",
        name: "",
        type: "residential-complex",
        category: "Жилищный комплекс",
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
        object_specs: [{
          subtitle: "",
          specificationsItems: [{
            value: "",
            label: { title: "", text: "" },
          }]
        }],
        object_developer_info: {
          name: "",
          developerType: "",
          logo: "",
          risks: false,
          leasedAmmount: "",
          inProgressAmmount: "",
          tabsData: {
            about: [""],
            contacts: [{value: "", label: { title: "", text: "" }}],
            requisits: [{value: "", label: { title: "", text: "" }}],
            owners: {
                company: {
                  defaultInfo: [{value: "", label: {title: "", text: ""}}],
                  numericInfo: [{value: "", label: {title: "", text: ""}}]
                },
                goverment: [{value: "", label: { title: "", text: "" }}]
            },
            activities: {primary: [""], secondary: [""]},
            news: [{
              link: "",
              date: new Date(),
              title: "",
              description: "",
              icon: "",
              id: "",
            }],
            statistics: [{value: "", label: [{ title: "", text: ""}]}],
            risks: [{value: "", label: {title: "", text: ""}}]
          }
        },
        schedule: [{label: '', value: '', title: ''},],
        planningList: [{ image: '', price: 0, title: "", housing: 0, deadline: "", floor: 0 }]
      }


  fetch(id: string | string[] | undefined) {
    this.initialData = Number(id) > 0 ? fullObjectData.filter((fod) => fod.object_id === Number(id))[0] : this.initialData
    this.fetching = false
  }
}

const StoreContext = createContext<ComplexStore>(new ComplexStore());

const StoreProvider: FC<{ store: ComplexStore}> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStore = () => {
  return useContext(StoreContext);
};

export { ComplexStore, StoreProvider, useStore };