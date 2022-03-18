import { makeAutoObservable } from "mobx";
import { IFile, IOwner, loadAllData } from "../../agent/ads/AgentAds";
import { IGuide } from "../../../stores/objects/GuidesStore";
import { IObjType } from "../../../../components/tabs/Account/Agent/components/Others/MyAdsContainer/MyAdsContainer";
import { ObjectTypes } from "../../../../utils/interfaces/objects";

interface ILocation {
  id: number;
  name: string;
}

interface IComplex {
  address: string;
  createAt: string;
  description: string;
  id: number;
  latitude: number;
  longitude: number;
  markAsDelete: boolean;
  name: string;
  objectType: string;
  postcode: string;
  updateAt: string;
  views: number;
}

interface IResponse {
  address: string;
  complex: null | IComplex;
  createAt: string;
  description: string;
  id: number;
  latitude: number;
  longitude: number;
  markAsDelete: boolean;
  name: string;
  objType: ObjectTypes;
  objectType: IObjType;
  postcode: string;
  price: number;
  updateAt: string;
  views: number;
  country: ILocation;
  region: ILocation;
  files: IFile[];
  owner: IOwner;
  status: {
    id: number;
    status: string;
  };
  guides: IGuide[];
}

class AllAdsStoreEx {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  adsList: IResponse[] | null = null;

  async uploadAllAds() {
    try {
      this.adsList = await loadAllData();
      this.loaded = true;
      this.errorOnLoad = false;
    } catch (e) {
      this.errorOnLoad = true;
      this.loaded = false;
    }
  }
}

export const AllAdsStore = new AllAdsStoreEx();