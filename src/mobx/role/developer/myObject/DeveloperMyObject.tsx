import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class DeveloperMyObjectStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData = {
        statistics:{
            byMonth: [
                {
                    name: "Январь 2018",
                    price: "50000",
                },
                {
                    name: "Июль 2018",
                    price: "55000",
                },
                {
                    name: "Январь 2019",
                    price: "56000",
                },
                {
                    name: "Июль 2019",
                    price: "61000",
                },
                {
                    name: "Январь 2020",
                    price: "62000",
                },
                {
                    name: "Июль 2020",
                    price: "67000",
                },
                {
                    name: "Январь 2021",
                    price: "68000",
                },
                {
                    name: "Июль 2021",
                    price: "71000",
                },
            ],
            chartDataBookings:[
                {
                    name: "Студии",
                    value: 55,
                },
                {
                    name: "1к квартиры",
                    value: 35,
                },
                {
                    name: "2к квартиры",
                    value: 26,
                },
                {
                    name: "3к квартиры",
                    value: 18,
                },
            ],
            chartDataPurchases:[
                {
                    name: "Студии",
                    value: 35,
                },
                {
                    name: "1к квартиры",
                    value: 33,
                },
                {
                    name: "2к квартиры",
                    value: 21,
                },
                {
                    name: "3к квартиры",
                    value: 15,
                },
            ],
            option:{
                dates: [
                    {
                        label: "Сентябрь 2021",
                        value: "Сентябрь 2021",
                    },
                    {
                        label: "Октябрь 2021",
                        value: "Октябрь 2021",
                    },
                    {
                        label: "Ноябрь 2021",
                        value: "Ноябрь 2021",
                    },
                    {
                        label: "Декабрь 2021",
                        value: "Декабрь 2021",
                    },
                    {
                        label: "Январь 2022",
                        value: "Январь 2022",
                    },
                ],
                objects: [
                    {
                        label: "ЖК Ленинский",
                        value: "ЖК Ленинский",
                    },
                    {
                        label: "ЖК Ленинский 1",
                        value: "ЖК Ленинский 1",
                    },
                    {
                        label: "ЖК Ленинский 2",
                        value: "ЖК Ленинский 2",
                    },
                    {
                        label: "ЖК Ленинский 3",
                        value: "ЖК Ленинский 3",
                    },
                ],
            },
            revenueMonth:{
                date:'Сентябрь 2021',
                complex:'25 млн ₽',
                house:'5,2 млн ₽',
                allRevenue:'30 млн ₽',
            },
            revenueYear:{
                date:'2021',
                complex:'125 млн ₽',
                house:'15,2 млн ₽',
                allRevenue:'140 млн ₽',
            },
        },
        complex:[
            {
                id: "1902830123",
                img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
                type: "Аренда",
                name: "3-этажный коттедж",
                price: "100 000р/mec",
                mainSpecifications: [
                    "600м",
                    "3 этажа",
                    "Бассейн",
                    "Гараж 150м2",
                    "Терраса 200 m2",
                ],
                agent: "Виталий Панкратов",
                dateStart: "31/08/2021",
                dateEnd: "05/09/21",
                address: "Крым, Ялта",
            },
        ],
        complexObjects:[
            {
                id:'1',
                name:'1-комнатная квартира',
                price:'12 860 000 ₽',
                infoObject:{
                    corpus: {'Корпус':'1'},
                    floor: {'Этаж':'3/15'},
                    area: {'Площадь':'52м2'},
                    status: {'Статус':'Продана'},
                }
            },{
                id:'2',
                name:'2-комнатная квартира',
                price:'17 860 000 ₽',
                infoObject:{
                    corpus: {'Корпус':'2'},
                    floor: {'Этаж':'4/15'},
                    area: {'Площадь':'72м2'},
                    status: {'Статус':'Свободна'},
                }
            },{
                id:'3',
                name:'3-комнатная квартира',
                price:'22 860 000 ₽',
                infoObject:{
                    corpus: {'Корпус':'4'},
                    floor: {'Этаж':'12/15'},
                    area: {'Площадь':'92м2'},
                    status: {'Статус':'Бронь до 12/11/21'},
                }
            },{
                id:'4',
                name:'1-комнатная квартира',
                price:'12 860 000 ₽',
                infoObject:{
                    corpus: {'Корпус':'2'},
                    floor: {'Этаж':'4/15'},
                    area: {'Площадь':'72м2'},
                    status: {'Статус':'Свободна'},
                }
            },{
                id:'5',
                name:'2-комнатная квартира',
                price:'18 860 000 ₽',
                infoObject:{
                    corpus: {'Корпус':'2'},
                    floor: {'Этаж':'4/15'},
                    area: {'Площадь':'72м2'},
                    status: {'Статус':'Свободна'},
                }
            },{
                id:'6',
                name:'1-комнатная квартира',
                price:'12 860 000 ₽',
                infoObject:{
                    corpus: {'Корпус':'1'},
                    floor: {'Этаж':'3/15'},
                    area: {'Площадь':'52м2'},
                    status: {'Статус':'Продана'},
                }
            },
        ],
        house:[
            {
                id: "1902830124",
                img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
                type: "Аренда",
                name: "4-этажный коттедж",
                price: "300 000р/mec",
                mainSpecifications: [
                    "900м",
                    "4 этажа",
                    "Бассейн",
                    "Гараж 250м2",
                    "Терраса 200 m2",
                ],
                agent: "Виталий Панкратов",
                dateStart: "12/04/2020",
                dateEnd: "05/09/21",
                address: "Крым, Алушта",
            },
        ]
    }
    fetch(id:string) {
        console.log("DeveloperMyObjectStore",id)
    }
    get() {
        console.log(JSON.parse(JSON.stringify({ ...this.initialData})))
    }
}

const StoreContext = createContext<DeveloperMyObjectStore>(new DeveloperMyObjectStore());

const StoreProvider: FC<{ store: DeveloperMyObjectStore}> = ({ children, store }) =>  (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreDeveloperMyObjectStore = () => {
    return useContext(StoreContext);
};

export { DeveloperMyObjectStore, StoreProvider, useStoreDeveloperMyObjectStore };