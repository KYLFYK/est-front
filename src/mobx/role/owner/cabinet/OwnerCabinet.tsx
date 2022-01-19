import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class OwnerCabinetStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData =  {
        firstName:'Иван',
        secondName:'Иванов',
        dateBirth:'10.12.1994',
        phone:'+7 999 888 66 11',
        email:'ivanov@estatum.com',
        password:'lsadf21kf',
        image:'https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg'
    }
    fetch(id:string) {
        console.log("DeveloperCabinetStore",id)
    }
    get() {
        console.log(JSON.parse(JSON.stringify({ ...this.initialData})))
    }
}

const StoreContext = createContext<OwnerCabinetStore>(new OwnerCabinetStore());

const StoreProvider: FC<{ store: OwnerCabinetStore}> = ({ children, store }) =>  (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreOwnerCabinet = () => {
    return useContext(StoreContext);
};

export { OwnerCabinetStore, StoreProvider, useStoreOwnerCabinet };