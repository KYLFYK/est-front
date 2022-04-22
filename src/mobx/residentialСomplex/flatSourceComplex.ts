import { makeAutoObservable } from "mobx";
import { instance } from "../../api/instance";
import { IUploadedFile } from "../stores/CreateObjectStores/CreateObjectStore";
import { IGuide } from "../stores/objects/GuidesStore";

export interface IComplex {
  address: string;
  category: string;
  city: string;
  cityId: number;
  country: string;
  countryId: number;
  description: string;
  favorite: boolean;
  lang: null;
  lat: number;
  lng: number;
  name: string;
  object_id: any;
  orderType: string;
  planning: string;
  postcode: string;
  publish: string;
  sort: null;
  total_floors: number;
  type: "complex";
  views: number;
  images: IUploadedFile[];
  info_options?: [
    {
      amountBuildings: number;
      amountFloors: number;
      amountObjects: number;
      areaObjectMax: number;
      areaObjectMin: number;
      heightCeilings: number;
      id: number;
      infrastructure: string;
      priceObjectMax: number;
      priceObjectMin: number;
    }
  ];
  object_developer_info: {
    createAt: string;
    email: string;
    id: number;
    isConfirmed: boolean;
    markAsDelete: boolean;
    phone: string;
    role: string;
    updateAt: string;
  };
  object_specs?: IGuide[];
  planningList: {
    buildingNumber: number;
    deadline: string;
    floor: number;
    id: number;
    name: string;
    price: number;
    file: IUploadedFile[];
  }[];
  schedule: {
    date: string;
    description: string;
    file: IUploadedFile[];
    id: number;
  }[];
}

class FlatSourceComplex {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  complexData: IComplex | null = null;
  complexId: string | null = null;

  async fetchComplex(id: string) {
    try {
      const response = await instance.get<IComplex>(`complex/${id}`);
      this.complexData = response.data;
      this.complexId = id;
      this.loaded = true;
    } catch (e) {
      this.complexId = null;
      console.error("Complex fetch error", e);
    }
  }
}

export const FlatSourceComplexStore = new FlatSourceComplex();
