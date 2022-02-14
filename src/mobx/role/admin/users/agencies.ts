import { makeAutoObservable } from "mobx";
import { instance } from "../../../../api/instance";

interface IResponseProps {
  address: string;
  description: string;
  id: string | number;
  name: string;
  phone: {
    ord: string;
    value: string;
  }[];
  site: string;
  status: string;
}

interface IResponse {
  agencyProperty: IResponseProps;
  createAt: Date;
  email: string;
  id: string | number;
  isConfirmed: boolean;
  markAsDelete: boolean;
  phone: string;
  role: string;
  updateAt: Date;
}

interface IAdminAgent {
  id: string | number;
  agencyName: string;
  description: string;
  imgUrl?: string;
}

type ListType = IAdminAgent[] | null;

class AgenciesList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: ListType = null;

  uploadList: () => void = async () => {
    try {
      const res = await instance.get<IResponse[]>("agency");
      this.list = res.data.map((el) => ({
        id: el.id,
        description: el.agencyProperty.description,
        agencyName: el.agencyProperty.name,
      }));
      this.loaded = true;
      this.errorOnLoad = false;
    } catch (e) {
      this.loaded = false;
      this.errorOnLoad = true;
    }
  };
}

export const AgencyListStore = new AgenciesList();
