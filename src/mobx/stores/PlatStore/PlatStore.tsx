import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";
import {fullObjectData} from "./PlatConfig";
import {LandApi, ObjectLandType} from "../../../api/obj/land";

class PlatStore {
    constructor() {
      makeAutoObservable(this);
    }
    fetching = true
    initialData :ObjectLandType= {
        images: [  {
            "url":"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
            "id":0
        },
            {
                "url":"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                "id":1
            },
            {
                "url":"https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
                "id":2
            }],
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
        favorite: false,
        publish: "",
        views: 0,
        agency: "",
        info_options: [{ label: "", value: "" },],
        description_items: [""],
        description_Info: [""],
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
            founders:[],
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


  async fetch(id: number) {

       const res :ObjectLandType  = await  LandApi.getLandById(id)
     // this.initialData = Number(id) > 0 ? fullObjectData.filter((fod) => fod.object_id === Number(id))[0] : this.initialData
      this.initialData = res
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