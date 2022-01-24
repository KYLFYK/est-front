import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class DeveloperCabinetStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData = {
        account:{id: '1',
        src: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
        profileForm: {
            name: "Брусника",
            type: "Девелоперская компания",
            address: "5 лет",
            phone: "+7 (123) 456-78-90",
            email: "email@mail.ru",
            site: "brusnika.ru",
            description:
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
        },
    },
        setting:{
            phoneNumber: "+7 (123) 456-78-90",
            login: "brusnika",
            oldPassword: "12345678",
            newPassword: "1234567890",
            noticePhone: "+7 (123) 456-78-90",
            noticeEmail: "email@email.ru",
        }
    }
    fetch(id:string) {
        console.log("DeveloperCabinetStore",id)
    }
    get() {
        console.log(JSON.parse(JSON.stringify({ ...this.initialData})))
    }
}

const StoreContext = createContext<DeveloperCabinetStore>(new DeveloperCabinetStore());

const StoreProvider: FC<{ store: DeveloperCabinetStore}> = ({ children, store }) =>  (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreDeveloperCabinet = () => {
    return useContext(StoreContext);
};

export { DeveloperCabinetStore, StoreProvider, useStoreDeveloperCabinet };