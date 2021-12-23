import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";

class ApartmentStore {
    initialData = {
        images: [],
        object_id: "",
        lang: "ru",
        name: "",
        type: "apartment",
        category: "Апартаменты",
        address: "",
        city: "",
        lat: 0,
        lng: 0,
        price: "",
        sort: null,
        planning: "",
        secondary_type: "",
        total_area: "",
        floor: "",
        total_floors: "",
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
              date: "",
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

  constructor() {
    makeAutoObservable(this);
  }

  fetch() {
    this.initialData.name = '111'
  }
  unfetch() {
    this.initialData.name = ''
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