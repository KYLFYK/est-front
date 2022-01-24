import { makeAutoObservable } from "mobx";

interface IAdminOwners {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  email: string;
  phoneHumber: string;
}

const InitialData: IAdminOwners[] = [
  {
    id: "1",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "2",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "3",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "4",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "5",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "6",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "7",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
  {
    id: "8",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivanivanov@inbox.ru",
    phoneHumber: "+7 999 249 86 49",
  },
];

class OwnersList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: IAdminOwners[] | null = null;

  uploadList: () => void = async () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = InitialData;
  };
}

export const OwnersListStore = new OwnersList();
