import React, { FC } from 'react';
import Typography from "../../../../../shared/Typography/Typography";
import {SearchOffice} from "../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import CardOwner, {ObjectInfoType} from "./CardOwner";

type FavouritesType={
    count?:number
}

type CardOwnerTypeMoc={
    url:string
    id:string
    image: string
    objectInfo: ObjectInfoType
}

const objectInfo :CardOwnerTypeMoc={
    url:'',
    id:'1',
    image:'https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg',
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
}
const objectInfo1:CardOwnerTypeMoc ={
    url:'',
    id:'2',
    image:'https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg',
    objectInfo:{
        typeObject:'house',
        totalArea:'500m2',
        name:'3-этажный коттедж',
        fromPublic:'Estatum',
        datePublic:'31.08.2021',
        country:'РФ',
        city:'Москва',
        dateUpdate:'31.08.2021',
        phone:'+7 999 444 33 11',

        developerName:'ЖК Ленинский',
        allApartment:'117 квартир от застройщика',
        developerCompany:'Брусничка',
        street:'Ленина 10',
        countApartmentAgent:'50 квартир',
        stageConstruction:'Сдан',
        params:[
            {title: 'Студия от 30м2', value: 'от 3млн.Р'},
            {title: '1-комн. от 35.1 м2', value: 'от 3.5млн.Р'},
            {title: '2-комн. от 55.2 м2', value: 'от 5млн.Р'},
            {title: '3-комн. от 67.2 м2', value: 'от 7млн.Р'},
            {title: 'Тип дома', value: 'Монолитный'},
        ]
    }
}
const arrayObject:Array<CardOwnerTypeMoc> =[objectInfo,objectInfo1]

const Favourites :FC<FavouritesType>= ({count=0}) => {
    return (
        <div>
            <Typography weight={"bold"}>
                Мои избранные объявление
            </Typography>
            <SearchOffice type={'owner'} />
            <FilterSearch type={'owner'}/>
            <Typography color={"tertiary"}>
                {
                    count > 0
                    && count + ' объявления'
                }
            </Typography>
            {
                arrayObject.map((object,index)=>{
                        return <CardOwner
                            key={index}
                            id={object.id}
                            url={object.url}
                            objectInfo={object.objectInfo}
                            image={object.image}/>
                })
            }
        </div>
    );
};

export default Favourites;