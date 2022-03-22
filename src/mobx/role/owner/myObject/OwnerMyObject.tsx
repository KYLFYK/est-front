import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class OwnerMyObjectStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData =  {
        objects_active:[
            {
                id: '1',
                img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
                urlObject: '',
                nameObject: '1-этажный коттердж',
                totalArea: '300м2',
                address: 'г.СП-Б , ул.Ленина 18',
                dateUpdate: '31.08.2021',
                datePublish: '31.08.2021',
                params: [
                    {title: 'Показов в поиске', value: '0'},
                    {title: 'Просмотров', value: '509'},
                    {title: 'Избранное', value: '9'},
                ]
            }, {
                id: '2',
                img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
                urlObject: '',
                nameObject: '2-этажный коттердж',
                totalArea: '300м2',
                address: 'г.СП-Б , ул.Ленина 18',
                dateUpdate: '31.08.2021',
                datePublish: '31.08.2021',
                params: [
                    {title: 'Показов в поиске', value: '0'},
                    {title: 'Просмотров', value: '509'},
                    {title: 'Избранное', value: '9'},
                ]
            }
        ],
        objects_archives:[
            {
                id:'1',
                img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
                url:'',
                nameObject:'3-этажный коттедж',
                totalArea:' 300м2',
                address:'г.СП-Б, ул.Ленина 18',
                status:'Черновик',
                rating:[
                    {title:'Показов в поиске',value:'0'},
                    {title:'Просмотров',value:'509'},
                    {title:'Избранное',value:'9'},
                ]
            },{
                id:'2',
                img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
                url:'',
                nameObject:'4-этажный коттедж',
                totalArea:' 400м2',
                address:'г.СП-Б, ул.Ленина 28',
                status:'Отклонено',
                rating:[
                    {title:'Показов в поиске',value:'0'},
                    {title:'Просмотров',value:'509'},
                    {title:'Избранное',value:'9'},
                ]
            }
        ],
        objects_drafts:[{
            id:'1',
            img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
            url:'',
            nameObject:'5-этажный коттедж',
            totalArea:' 300м2',
            address:'г.СП-Б, ул.Ленина 18',
            dateArchive:'31.02.2021',
            rating:[
                {title:'Показов в поиске',value:'0'},
                {title:'Просмотров',value:'509'},
                {title:'Избранное',value:'9'},
            ]
        },{
            id:'2',
            img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
            url:'',
            nameObject:'6-этажный коттедж',
            totalArea:' 400м2',
            address:'г.СП-Б, ул.Ленина 28',
            dateArchive:'31.02.2021',
            rating:[
                {title:'Показов в поиске',value:'0'},
                {title:'Просмотров',value:'509'},
                {title:'Избранное',value:'9'},
            ]
        }],
        objects_applications:[{
            id: '1',
            img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
            urlObject: '',
            nameObject: '7-этажный коттердж',
            address: 'г.СП-Б , ул.Ленина 18',
            dateBook: '31.08.2021',
            price: '100 000 P/mec',
            agentObject: 'Виталий Панкратов',
            mainSpecifications: ['600m2', '3 этажа', 'Бассейн', 'Гараж 50м2', 'Терраса 20м2']
        }, {
            id: '2',
            img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
            urlObject: '',
            nameObject: '8-этажный коттердж',
            address: 'г.СП-Б , ул.Ленина 18',
            dateBook: '31.08.2021',
            price: '100 000 P/mec',
            agentObject: 'Виталий Панкратов',
            mainSpecifications: ['600m2', '3 этажа', 'Бассейн', 'Гараж 50м2', 'Терраса 20м2']
        }]
    }
    fetch(id:string) {

    }
    get() {
        return JSON.parse(JSON.stringify({ ...this.initialData}))
    }
}

const StoreContext = createContext<OwnerMyObjectStore>(new OwnerMyObjectStore());

const StoreProvider: FC<{ store: OwnerMyObjectStore}> = ({ children, store }) =>  (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreOwnerMyObjects = () => {
    return useContext(StoreContext);
};

export { OwnerMyObjectStore, StoreProvider, useStoreOwnerMyObjects };