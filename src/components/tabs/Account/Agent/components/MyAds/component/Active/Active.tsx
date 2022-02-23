import React, {useEffect} from 'react'
import {observer} from "mobx-react-lite"

import MyAdsContainer from "../../../Others/MyAdsContainer/MyAdsContainer"
import {useAgentAdsStore} from '../../../../../../../../mobx/role/agent/ads/AgentAds'

const mocActive = [{
    id: '1',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Аренда',
    name: '3-этажный коттедж',
    price: '100 000р/mec',
    mainSpecifications: ['600м', '3 этажа', 'Бассейн', 'Гараж 50м2', 'Терраса 20 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Забронирован',
    address: 'Крым, Ялта'
}, {
    id: '2',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Продажа',
    name: '5-этажный коттедж',
    price: '30 000 000р',
    mainSpecifications: ['900м', '5 этажей', 'Бассейн', 'Гараж 150м2', 'Терраса 120 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Свободна',
    address: 'Крым, Ялта'
}, {
    id: '3',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Аренда',
    name: '5-этажный коттедж',
    price: '30 000 000р',
    mainSpecifications: ['900м', '5 этажей', 'Бассейн', 'Гараж 150м2', 'Терраса 120 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Забронирован',
    address: 'Крым, Ялта'
},
]

const MyAdsActive = observer(() => {
    const adsStore = useAgentAdsStore();
    useEffect(() => {
        adsStore.fetch()
    }, [])
    return (
        adsStore.get().loading 
        ? <h1>Loading...</h1> 
        : <MyAdsContainer objects={adsStore.get().data.filter((d: any, i: number) => d.agent === 28)} menu={'active'}/>
    );
});

export default MyAdsActive;