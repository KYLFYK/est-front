import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { ApartmentApi } from "../../../../api/obj/apartment";
import { HouseApi } from "../../../../api/obj/house";
import { datetoDayFormat } from "../../../../lib/mapping/objectDates";

import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg";

export interface IObject {
  id: number;
  img: {
    src: string;
    height: number;
    width: number;
  };
  type: string;
  name: string;
  price: string;
  mainSpecifications: Array<string>;
  markAsDelete: boolean;
  agent: {
    adminProperty: null;
    agencyProperty: number;
    agentProperty: null;
    bankProperty: null;
    createAt: string;
    customerProperty: null;
    developerProperty: null;
    email: string;
    id: number;
    isConfirmed: boolean;
    markAsDelete: boolean;
    phone: string;
    role: string;
    updateAt: string;
  } | null;
  dateStart: string;
  dateEnd: string;
  status: {
    id: number;
    status: string;
  } | null;
  address: string;
}

class AgentAdsStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialData: {
    loading: boolean;
    data: IObject[];
  } = {
    loading: true,
    data: [
      {
        id: 0,
        img: imgMoc,
        type: "",
        name: "",
        markAsDelete: false,
        price: "",
        mainSpecifications: ["", "", "", "", ""],
        agent: {
          adminProperty: null,
          agencyProperty: 3,
          agentProperty: null,
          bankProperty: null,
          createAt: "2022-02-25T18:27:41.107Z",
          customerProperty: null,
          developerProperty: null,
          email: "Kyler22@example.com",
          id: 24,
          isConfirmed: true,
          markAsDelete: false,
          phone: "711-426-3807",
          role: "agency",
          updateAt: "2022-02-25T18:27:41.107Z",
        },
        dateStart: "",
        dateEnd: "",
        status: null,
        address: "",
      },
    ],
  };

  async fetch() {
    const loadAllData: () => any = async () => {
      let i = 0;
      let obj: any = [];
      let res;
      do {
        res = await ApartmentApi.getAllApartment(i * 10, 10);
        obj = obj ? [...obj, ...res?.data] : [...res?.data];
        i++;
      } while (res?.data?.length >= 10);
      i = 0;
      do {
        res = await HouseApi.getAllHouse(i * 10, 10);
        obj = obj ? [...obj, ...res?.data] : [...res?.data];
        i++;
      } while (res?.data?.length >= 10);

      return obj;
    };

    const fetchResult = await loadAllData();

    console.log(fetchResult);

    this.initialData.data = fetchResult.map((o: any, i: number) => ({
      id: o.id,
      img: imgMoc,
      type: o.objectType,
      name: o.name,
      price: o.price,
      mainSpecifications: o.guides
        .filter((el: any) => el.type_en === "furniture")
        .map((el: any) => el.value),
      agent: o.owner,
      dateStart: datetoDayFormat(o.createAt, "Cabinet"),
      dateEnd: "",
      status: o.status,
      address: o.address,
      markAsDelete: o.markAsDelete,
    }));

    this.initialData.loading = false;
  }

  get() {
    return JSON.parse(JSON.stringify({ ...this.initialData }));
  }
}

const StoreContext = createContext<AgentAdsStore>(new AgentAdsStore());

const StoreProvider: FC<{ store: AgentAdsStore }> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

const useAgentAdsStore = () => {
  return useContext(StoreContext);
};

export { AgentAdsStore, StoreProvider, useAgentAdsStore };
