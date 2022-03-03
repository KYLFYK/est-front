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
    firstName: "",
    secondName: "",
    dateBirth: "",
    phone: "",
    email: "",
    password: "",
    image:
      "https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg",
  };

  async fetch() {
    const res: CabinetDeveloperType = await cabinetAPI.getCabinetDeveloper();
    this.initialData.firstName = res.data.email;
    this.initialData.secondName = "";
    this.initialData.email = res.data.email;
    this.initialData.phone = res.data.phone;
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
