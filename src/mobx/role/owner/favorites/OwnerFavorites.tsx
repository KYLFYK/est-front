import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class OwnerFavoritesStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        favourites: [
            {
                url: '',
                id: '1',
                image: 'https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg',
                objectInfo: {
                    typeObject: 'house',
                    totalArea: '500m2',
                    name: '3-этажный коттедж',
                    fromPublic: 'Estatum',
                    datePublic: '31.08.2021',
                    country: 'Крым',
                    city: 'Ялта',
                    dateUpdate: '31.08.2021',
                    phone: '+7 999 444 33 11',

                    developerName: '',
                    allApartment: '',
                    developerCompany: '',
                    street: '',
                    countApartmentAgent: '',
                    stageConstruction: '',
                    params: [
                        {title: 'Цена', value: '10 000 000 Р'},
                        {title: 'Цена за м2', value: '100 000 Р'},
                        {title: 'Площадь (жилая/общая)', value: '500/100м2'},
                        {title: 'Класс', value: 'Бизес'},
                        {title: 'Тип дома', value: 'Монолитный'},
                        {title: 'Бассей', value: '20м2'},
                        {title: 'Гараж', value: '5м/м'},
                    ]
                }
            },
            {
                url: '',
                id: '2',
                image: 'https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg',
                objectInfo: {
                    typeObject: 'house',
                    totalArea: '500m2',
                    name: '3-этажный коттедж',
                    fromPublic: 'Estatum',
                    datePublic: '31.08.2021',
                    country: 'РФ',
                    city: 'Москва',
                    dateUpdate: '31.08.2021',
                    phone: '+7 999 444 33 11',

                    developerName: 'ЖК Ленинский',
                    allApartment: '117 квартир от застройщика',
                    developerCompany: 'Брусничка',
                    street: 'Ленина 10',
                    countApartmentAgent: '50 квартир',
                    stageConstruction: 'Сдан',
                    params: [
                        {title: 'Студия от 30м2', value: 'от 3млн.Р'},
                        {title: '1-комн. от 35.1 м2', value: 'от 3.5млн.Р'},
                        {title: '2-комн. от 55.2 м2', value: 'от 5млн.Р'},
                        {title: '3-комн. от 67.2 м2', value: 'от 7млн.Р'},
                        {title: 'Тип дома', value: 'Монолитный'},
                    ]
                }
            }
        ]
    }

    fetch(id: string) {
        console.log("DeveloperCabinetStore", id)
    }

    get() {
        return JSON.parse(JSON.stringify({...this.initialData}))
    }
}

const StoreContext = createContext<OwnerFavoritesStore>(new OwnerFavoritesStore());

const StoreProvider: FC<{ store: OwnerFavoritesStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreOwnerFavorites = () => {
    return useContext(StoreContext);
};

export {OwnerFavoritesStore, StoreProvider, useStoreOwnerFavorites};