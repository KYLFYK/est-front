import {createContext, FC, useContext} from "react"
import { makeAutoObservable } from "mobx";
import {adminAPI} from '../../../../api/cabinet/admin'

class OwnersList {
  constructor() {
    makeAutoObservable(this);
  }

  initialData = {
    error: false,
    loading: true,
    getAllData: [],
  }

  async uploadList() {
    this.initialData.loading = true
    this.initialData.error = false
    const res = await adminAPI.getOwnersUsers()
    if(res === 'Error') {
      this.initialData.error = true
    } else {
      this.initialData.getAllData = res.data.map((d: any) => {
        return ({
          avatar: d.customerProperty?.files?.length > 0 ? d.customerProperty.files[0] : '',
          id: d.id,
          name: d.customerProperty?.name,
          email: d.email,
          phone: d.customerProperty?.phone,
        })
      })
    }
    this.initialData.loading = false
  }

  get() {
    return JSON.parse(JSON.stringify({ ...this.initialData }))
  }

}

const StoreContext = createContext<OwnersList>(
  new OwnersList()
);

const StoreProvider: FC<{ store: OwnersList }> = ({
  children,
  store,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

const useOwnersList = () => {
  return useContext(StoreContext);
};

export {
  OwnersList,
  StoreProvider,
  useOwnersList,
};
