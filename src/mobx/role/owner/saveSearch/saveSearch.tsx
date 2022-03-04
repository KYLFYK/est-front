import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class OwnerSaveSearchStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        search: [
            {
                id: '1',
                nameObject: 'Покупка, 3-этажный коттедж, Крым, до 10 000 000 Р',
                locations: 'Крым, Ялта',
                ads: 100,
                alertStatus: 'none'
            },
            {
                id: '2',
                nameObject: 'Аренда, 2-комнатная квартира, Спб, до 40 000 Р',
                locations: 'СПб, м.Лесная',
                ads: 0,
                alertStatus: 'day'
            }]
    }

    fetch(id: string) {
        console.log("DeveloperCabinetStore", id)
    }

    get() {
        return JSON.parse(JSON.stringify({...this.initialData}))
    }
}

const StoreContext = createContext<OwnerSaveSearchStore>(new OwnerSaveSearchStore());

const StoreProvider: FC<{ store: OwnerSaveSearchStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreOwnerSaveSearch = () => {
    return useContext(StoreContext);
};

export {OwnerSaveSearchStore, StoreProvider, useStoreOwnerSaveSearch};