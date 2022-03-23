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
  id: number;
  isConfirmed: boolean;
  markAsDelete: boolean;
  phone: string;
  role: string;
  updateAt: Date;
}

export interface IAdminAgent {
  id: number;
  agencyName: string;
  description: string;
  imgUrl?: string;
  markAsDelete: boolean;
}

type ListType = IAdminAgent[];

class AgenciesList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: ListType = [];

  uploadList: () => void = async () => {
    try {
      const res = await instance.get<IResponse[]>("agency");
      this.list = res.data.map((el) => ({
        id: el.id,
        description: el.agencyProperty.description,
        agencyName: el.agencyProperty.name,
        markAsDelete: el.markAsDelete,
      }));
      this.loaded = true;
      this.errorOnLoad = false;
    } catch (e) {
      this.loaded = false;
      this.errorOnLoad = true;
    }
  };

  handleDelete: (id: number) => void = async (id) => {
    try {
      await instance.delete(`account/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
      this.list = this.list.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            markAsDelete: true,
          };
        } else return el;
      });
    } catch (e) {
      console.error("Delete error", e);
    }
  };

  handleRestore: (id: number) => void = async (id) => {
    try {
      await instance.patch(
        `account/${id}`,
        {
          markAsDelete: false,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
          },
        }
      );

      this.list = this.list.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            markAsDelete: false,
          };
        } else return el;
      });
    } catch (e) {
      console.error("Delete error", e);
    }
  };

  get: () => ListType = () => {
    return JSON.parse(JSON.stringify([...this.list]));
  };
}

export const AgencyListStore = new AgenciesList();
