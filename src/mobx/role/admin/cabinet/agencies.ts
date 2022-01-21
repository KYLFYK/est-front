import { makeAutoObservable } from "mobx";

interface IAdminAgent {
  id: string;
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
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = [
      {
        id: "1",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "2",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "3",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "4",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "5",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "6",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "7",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
      {
        id: "8",
        description: "Агентство элитной недвижимости",
        agencyName: "Deal",
      },
    ];
  };
}

export const AgencyListStore = new AgenciesList();
