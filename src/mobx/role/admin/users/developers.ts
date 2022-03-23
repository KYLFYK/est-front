import { makeAutoObservable } from "mobx";
import { instance } from "../../../../api/instance";

export interface IAdminDeveloperCard {
  id: string | number;
  description: string | null;
  developerName: string;
  imgUrl?: string;
  markAsDelete: boolean;
}

interface IResponseProps {
  INN: string;
  KPP: string;
  OGRN: string;
  OKATO: string;
  OKFS: string;
  OKOGU: string;
  OKOPF: string;
  OKPO: string;
  OKTMO: string;
  address: string;
  authorizedCapital: number;
  branch: number;
  completedBuildingAmount: number;
  completedComplexAmount: number;
  description: string;
  enterpriseSize: number;
  extraOccupations: {
    ord: number;
    value: string;
  }[];
  founders: string;
  id: number;
  inProgressBuildingAmount: number;
  inProgressComplexAmount: number;
  leaderName: string;
  legalAddress: string;
  legalFullName: string;
  logo: string;
  mainOccupation: string;
  name: string;
  netAssets: number;
  netProfit: number;
  numberOfStaff: number;
  registeringAuthorityLocated: null | string;
  registrationAuthorityAddress: null | string;
  registrationAuthorityName: null | string;
  registrationDate: null | string;
  revenue: number;
  risks: null | string;
  site: null | string;
  status: null | string;
  type: string;
}

interface IResponse {
  developerProperty: IResponseProps;
  createAt: Date;
  email: string;
  id: string | number;
  isConfirmed: boolean;
  markAsDelete: boolean;
  phone: string;
  role: string;
  updateAt: Date;
}

type IListType = IAdminDeveloperCard[];

class DevelopersList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: IListType = [];

  uploadList: () => void = async () => {
    try {
      const res = await instance.get<IResponse[]>("developer");
      this.list = res.data.map((el) => ({
        id: el.id,
        description: el.developerProperty.description,
        developerName: el.developerProperty.name,
        imgUrl: el.developerProperty.logo,
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

  get: () => IListType = () => {
    return JSON.parse(JSON.stringify([...this.list]));
  };
}

export const DevelopersListStore = new DevelopersList();
