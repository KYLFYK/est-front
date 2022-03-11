import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import {
  cabinetAPI,
  CabinetDeveloperType,
} from "../../../../api/cabinet/cabinet";

class OwnerCabinetStore {
  constructor() {
    makeAutoObservable(this);
  }
  initialData = {
    name:'',
    dateBirth:"",
    phone: "",
    email: "",
    password: "",
    image:
      "https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg",
  };

  async fetch() {
    const res: CabinetDeveloperType = await cabinetAPI.getCabinetDeveloper();
    this.initialData.name = "Иван Иванов";
    this.initialData.dateBirth = "10.12.1994";
    this.initialData.email = 'ivanov@mail.ru';
    this.initialData.phone = '+7 999 888 77 22';
  }

  get() {
    console.log(JSON.parse(JSON.stringify({ ...this.initialData })));
  }
}

const StoreContext = createContext<OwnerCabinetStore>(new OwnerCabinetStore());

const StoreProvider: FC<{ store: OwnerCabinetStore }> = ({
  children,
  store,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

const useStoreOwnerCabinet = () => {
  return useContext(StoreContext);
};

export { OwnerCabinetStore, StoreProvider, useStoreOwnerCabinet };
