import { makeAutoObservable } from "mobx";
import { instance } from "../../../api/instance";
import { AxiosResponse } from "axios";

interface DataResponse {
  id: number;
  name: string;
}

const fetchCities: () => Promise<AxiosResponse<DataResponse[]>> = async () => {
  return await instance.get("city");
};

const fetchRegions: () => Promise<AxiosResponse<DataResponse[]>> = async () => {
  return await instance.get("region");
};

const fetchCountry: () => Promise<AxiosResponse<DataResponse[]>> = async () => {
  return await instance.get("country");
};

class AddressGuidesStore {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  cities: null | DataResponse[] = null;
  regions: null | DataResponse[] = null;
  countries: null | DataResponse[] = null;

  async loadData() {
    try {
      const result = await Promise.all([
        fetchCities(),
        fetchRegions(),
        fetchCountry(),
      ]);

      this.cities = result[0].data;
      this.regions = result[1].data;
      this.countries = result[2].data;
    } catch (e) {
      this.errorOnLoad = true;
      this.loaded = false;
    }
  }
}

export const AddressGuides = new AddressGuidesStore();
