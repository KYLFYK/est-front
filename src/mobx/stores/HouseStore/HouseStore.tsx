import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import {fullObjectData} from "./HouseConfig";
import {HouseApi} from "../../../api/obj/house";

class HouseStore {
    constructor() {
      makeAutoObservable(this);
    }
    fetching = true
    initialData = {
        images: [
            {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
            {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
            {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
        ],
        object_id: 0,
        lang: "ru",
        name: "",
        type : "house",
        category: "Дом",
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
        info_options: [{  label: "Общая площадь", value: "615 м²"  },{  label: "Общая площадь", value: "615 м²"  }],
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
            general: [],
            founders: [],
            encumbrances: [],
            recomendations: []
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
        },
        status:200
      }


  async fetch(id: number) {
    // this.initialData = Number(id) > 0 ? fullObjectData.filter((fod) => fod.object_id === Number(id))[0] : this.initialData

          const res = await HouseApi.getHouseById(id)

          // this.initialData.status = res.response.data.statusCode === 404 ? res.response.data.statusCode : 200
          this.initialData = res
          this.fetching = false
  }
    get(){
        console.log('mobxHouse',JSON.parse(JSON.stringify(this.initialData)))
    }

}

const StoreContext = createContext<HouseStore>(new HouseStore());

const StoreProvider: FC<{ store: HouseStore}> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStore = () => {
  return useContext(StoreContext);
};

export { HouseStore, StoreProvider, useStore };