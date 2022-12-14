import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import { ApartmentApi } from "src/api/obj/apartment";
import {ApartmensData} from "./ApartamentConfig";

class ApartmentStore {
    constructor() {
      makeAutoObservable(this);
    }
    fetching = true
    get() {
      return JSON.parse(JSON.stringify({...this.initialData}))
    }
    initialData = {
        images: [{url: "", id: 0},],
        object_id: 0,
        lang: "ru",
        name: "",
        type: "apartment",
        category: "Апартаменты",
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
        online_tour: {
          threeD_tour: {url: ""},
          vr_tour: {url: ""}
        },
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
        },
        object_developer_info : {
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
        }
    }

    fetch(id: string | string[] | undefined) {
      ApartmentApi.getAllApartment(0, 1)
      ApartmentApi.getApartmentById(id)
      this.initialData = Number(id) > 0 ? ApartmensData.filter((fod) => fod.object_id === Number(id))[0] : this.initialData
      this.fetching = false
    }
}

const StoreContext = createContext<ApartmentStore>(new ApartmentStore());

const StoreProvider: FC<{ store: ApartmentStore}> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStore = () => {
  return useContext(StoreContext);
};

export { ApartmentStore, StoreProvider, useStore };