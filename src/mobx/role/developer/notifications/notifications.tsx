import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class DeveloperNotificationsStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        notifications: [
            {
                id: '1', 
                date: '22.03.2021',
                time: '17:30', 
                message: 'Автоматическое возобновление публикаций выключено', 
                read: false
            },
            {
                id: '2',
                date: '22.03.2021',
                time: '15:30',
                message: 'Автоматическое возобновление публикаций выключено',
                read: false
            },
            {
                id: '3', 
                date: '21.03.2021',
                time: '13:30',
                message: 'Автоматическое возобновление публикаций выключено', 
                read: true
            },
            {
                id: '4', 
                date: '20.03.2021',
                time: '11:30', 
                message: 'Автоматическое возобновление публикаций выключено', 
                read: true
            },
        ]
    }

    fetch(id: string) {
        console.log("DeveloperMyObjectStore", id)
    }

    get() {
        return JSON.parse(JSON.stringify({...this.initialData}))
    }
}

const StoreContext = createContext<DeveloperNotificationsStore>(new DeveloperNotificationsStore());

const StoreProvider: FC<{ store: DeveloperNotificationsStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreDeveloperNotificationsStore = () => {
    return useContext(StoreContext);
};

export {DeveloperNotificationsStore, StoreProvider, useStoreDeveloperNotificationsStore};