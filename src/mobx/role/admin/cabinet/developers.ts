import { makeAutoObservable } from "mobx";

interface IAdminDeveloperCard {
  id: string;
  description: string;
  developerName: string;
  imgUrl?: string;
}

type IListType = IAdminDeveloperCard[] | null;

class DevelopersList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: IListType = null;

  uploadList: () => void = async () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = [
      {
        id: "1",
        description: "Девелоперская компания",
        developerName: "Брусника",
        imgUrl: undefined,
      },
      {
        id: "2",
        description: "Девелоперская компания",
        developerName: "Брусника",
        imgUrl: undefined,
      },
      {
        id: "3",
        description: "Девелоперская компания",
        developerName: "Брусника",
        imgUrl: undefined,
      },
      {
        id: "4",
        description: "Девелоперская компания",
        developerName: "Брусника",
        imgUrl: undefined,
      },
      {
        id: "5",
        description: "Инвестиционная строительная компания",
        developerName: "EMAAR",
        imgUrl: undefined,
      },
      {
        id: "6",
        description: "Инвестиционная строительная компания",
        developerName: "EMAAR",
        imgUrl: undefined,
      },
      {
        id: "7",
        description: "Инвестиционная строительная компания",
        developerName: "EMAAR",
        imgUrl: undefined,
      },
      {
        id: "8",
        description: "Инвестиционная строительная компания",
        developerName: "EMAAR",
        imgUrl: undefined,
      },
    ];
  };
}

export const DevelopersListStore = new DevelopersList();
