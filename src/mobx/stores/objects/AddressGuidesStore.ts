import { makeAutoObservable } from "mobx";
import { instance } from "../../../api/instance";
import { AxiosResponse } from "axios";

interface DataResponse {
  id: number;
  name: string;
}

interface ExtendedResponse extends DataResponse {
  region: DataResponse;
}

const fetchCities: () => Promise<AxiosResponse<ExtendedResponse[]>> =
  async () => {
    return await instance.get("city");
  };

const fetchRegions: () => Promise<AxiosResponse<DataResponse[]>> = async () => {
  return await instance.get("region");
};

const fetchCountry: () => Promise<AxiosResponse<DataResponse[]>> = async () => {
  return await instance.get("country");
};

export class AddressGuidesStore {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  cities: null | ExtendedResponse[] = null;
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
      this.loaded = true;
      this.errorOnLoad = false;
    } catch (e) {
      this.errorOnLoad = true;
      this.loaded = false;
    }
  }

  getСities() {
    return JSON.parse(JSON.stringify(this.cities))
  }
  getRegions() {
    return JSON.parse(JSON.stringify(this.regions))
  }
  getCountries() {
    return JSON.parse(JSON.stringify(this.countries))
  }
}

export const AddressGuides = new AddressGuidesStore();
