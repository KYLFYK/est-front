import React from 'react';
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import Typography from "../../../../../../shared/Typography/Typography";
import css from './Active.module.scss'
import LinesV1 from "../../../../../../shared/CardObject/Lines/LinesV1";
import LineAddressV1 from "../../../../../../shared/CardObject/Lines/LineAddressV1";
import LineArray from "../../../../../../shared/CardObject/Lines/LineArray";

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
},{
    id: '2',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Продажа',
    name: '5-этажный коттедж',
    price: '30 000 000р',
    mainSpecifications: ['900м', '5 этажей', 'Бассейн', 'Гараж 150м2', 'Терраса 120 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Свобода',
    address: 'Крым, Ялта'
},
]

const searchColor = (status:string) => {
    switch (status){
        case 'Забронирован':return 'nude'
        case 'Свобода':return 'green'
        case 'Продан':return 'tertiary'
        case 'Архив':return 'tertiary'
        default: return 'tertiary'
    }
}

const Active = () => {
    const move = () => {
        console.log('move')
    }
    const del = () => {
        console.log('del')
    }
    return (
        <div>
            <SearchOffice/>
            <FilterSearch/>
            {
                mocActive.map((home) => (
                    <div key={home.id} className={css.borderCard}>
                        <CardObject img={home.img}>
                            <div className={css.paddingCard}>
                                <LinesV1 price={home.price} name={home.name} typeObject={home.type} type={"editPlus"} onClick={move} onDelete={del} />
                                <LineAddressV1 address={home.address}  />
                                <LineArray mainSpecifications={home.mainSpecifications} />
                                <div style={{display: "flex", paddingBottom: '10px'}}>
                                    <Typography weight={"light"} color={"tertiary"} className={css.paddingRight_5}>
                                        Агент:
                                    </Typography>
                                    <Typography color={"tertiary"} className={css.paddingRight_20}>
                                        {home.agent}
                                    </Typography>
                                    <Typography color={"tertiary"} weight={"light"} className={css.paddingRight_5}>
                                        От:
                                    </Typography>
                                    <Typography color={"tertiary"} className={css.paddingRight_20}>
                                        {home.dateStart}
                                    </Typography>
                                    <Typography color={"tertiary"} weight={"light"} className={css.paddingRight_5}>
                                        Статус:
                                    </Typography>
                                    <Typography color={searchColor(home.status)} className={css.paddingRight_20}>
                                        {home.status}
                                    </Typography>
                                    <Typography color={"tertiary"} weight={"light"} className={css.paddingRight_5}>
                                        До:
                                    </Typography>
                                    <Typography color={"tertiary"}>
                                        {home.dateEnd}
                                    </Typography>
                                </div>
                            </div>
                        </CardObject>
                    </div>
                ))
            }
        </div>
    );
};

export default Active;