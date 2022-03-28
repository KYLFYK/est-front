import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { ApartmentApi } from "../../../../api/obj/apartment";
import { HouseApi } from "../../../../api/obj/house";
import { datetoDayFormat } from "../../../../lib/mapping/objectDates";
import { IGuide } from "../../../stores/objects/GuidesStore";
import { LandApi } from "../../../../api/obj/land";

import imgMoc from "../../../../components/tabs/Account/Agent/components/PersonalCabinetTab/AccountInfo/logoFalse.svg";
import { ObjectTypes } from "../../../../utils/interfaces/objects";
import { markAsDeleted } from "../../../../api/obj/markAsDeleted";
import { reestablishObject } from "../../../../api/obj/reestablishObject";
import { IUploadedFile } from "../../../stores/CreateObjectStores/CreateObjectStore";
import { ComplexApi } from "../../../../api/obj/complex";

export const loadAllData: () => any = async () => {
  let i = 0;
  let obj: any = [];
  let res;

  do {
    res = await ApartmentApi.getAllApartment(i * 10, 10);
    obj = obj
      ? [
          ...obj,
          ...res?.data.map((el: any) => ({
            ...el,
            objType: ObjectTypes.APARTMENTS,
          })),
        ]
      : res?.data.map((el: any) => ({
          ...el,
          objType: ObjectTypes.APARTMENTS,
        }))
      ? [
          ...res?.data.map((el: any) => ({
            ...el,
            objType: ObjectTypes.APARTMENTS,
          })),
        ]
      : [];
    i++;
  } while (res?.data?.length >= 10);
  i = 0;
  do {
    res = await HouseApi.getAllHouse(i * 10, 10);
    obj = obj
      ? [
          ...obj,
          ...res?.data?.map((el: any) => ({
            ...el,
            objType: ObjectTypes.HOUSE,
          })),
        ]
      : res?.data?.map((el: any) => ({
          ...el,
          objType: ObjectTypes.HOUSE,
        }))
      ? [
          ...res?.data?.map((el: any) => ({
            ...el,
            objType: ObjectTypes.HOUSE,
          })),
        ]
      : [];
    i++;
  } while (res?.data?.length >= 10);
  i = 0;
  do {
    res = await LandApi.getAllLand(i * 10, 10);
    obj = obj
      ? [
          ...obj,
          ...Array.from(res?.data)?.map((el: any) => ({
            ...el,
            objType: ObjectTypes.LAND,
          })),
        ]
      : res?.data?.map((el: any) => ({
          ...el,
          objType: ObjectTypes.LAND,
        }))
      ? [
          ...res?.data?.map((el: any) => ({
            ...el,
            objType: ObjectTypes.LAND,
          })),
        ]
      : [];
    i++;
  } while (res?.data?.length >= 10);
  i = 0;
  do {
    res = await ComplexApi.getAllComplex(i * 10, 10);

    if (res?.data && Array.isArray(res.data)) {
      obj = obj
        ? [
            ...obj,
            ...res?.data?.map((el: any) => ({
              ...el,
              objType: ObjectTypes.RESCOMPLEX,
            })),
          ]
        : res?.data.map((el: any) => ({
            ...el,
            objType: ObjectTypes.RESCOMPLEX,
          }))
        ? [
            ...res?.data?.map((el: any) => ({
              ...el,
              objType: ObjectTypes.RESCOMPLEX,
            })),
          ]
        : [];
      i++;
    } else {
      break;
    }
  } while (res?.data?.length >= 10);

  return obj;
};

export interface IFile extends IUploadedFile {
  createAt: string;
  updateAt: string;
  id: number;
}

export interface IOwner {
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
}

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
  files: IFile[];
  agent: IOwner | null;
  dateStart: string;
  dateEnd: string;
  status: {
    id: number;
    status: string;
  } | null;
  address: string;
  objType: ObjectTypes;
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
        files: [],
        address: "",
        objType: 0,
      },
    ],
  };

  setLoading() {
    this.initialData.loading = true;
  }

  async fetch() {
    const fetchResult = await loadAllData();

    this.initialData.data = fetchResult.map((o: any) => ({
      id: o.id,
      img: imgMoc,
      type: o.objectType,
      name: o.name,
      price: o.price,
      mainSpecifications: o.guides
        .filter(
          (el: IGuide) =>
            el.type_en === "safety" ||
            el.type_en === "furniture" ||
            el.type_en === "buildings"
        )
        .map((el: any) => el.value),
      agent: o.owner,
      dateStart: datetoDayFormat(o.createAt, "Cabinet"),
      dateEnd: "",
      status: o.status,
      address: o.address,
      markAsDelete: o.markAsDelete,
      files: o.files,
      objType: o.objType,
    }));

    this.initialData.loading = false;
  }

  async markAsDeleted(id: number, type: ObjectTypes) {
    try {
      await markAsDeleted(id, type);

      this.initialData.data = this.initialData.data.map((el) => {
        if (el.id === id && el.objType === type) {
          return {
            ...el,
            markAsDelete: true,
          };
        } else return el;
      });
    } catch (e) {
      console.error("Delete error", e);
    }
  }

  async reestablishObj(id: number, type: ObjectTypes) {
    try {
      await reestablishObject(id, type);

      this.initialData.data = this.initialData.data.map((el) => {
        if (el.id === id && el.objType === type) {
          return {
            ...el,
            markAsDelete: false,
          };
        } else return el;
      });
    } catch (e) {
      console.error("Reestablish error", e);
    }
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
