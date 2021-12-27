import React, { FC } from 'react';
import { Filter } from '../../../../../../containers/Filter/Filter';
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import Typography from "../../../../../../shared/Typography/Typography";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import Image from 'next/image'
import css from './Search.module.scss'
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import FavoriteIcon from "../../../../../../../icons/Favorite/Favorite";
import {myLoader} from "../../../../../../../utils/image/image";

const professionalSearch =[
    {
        id:'1',
        nameObject:'3-х этажный коттедж',
        img:'https://i.pinimg.com/736x/25/7e/7c/257e7c44720ad1f5a9246d15299c9812.jpg',
        webAddress:'',
        allSquare:'500 м2',
        datePublish:'31.08.2021',
        nameCompanyPublish:'Estatum',
        country:'Крым',
        city:'Ялта',
        dateUpdate:'03.09.2021',
        phone:'+7 999 765 38 21',
        params:[
            {title:'Цена',value:'10 000 000 Р'},
            {title:'Цена за м2',value:'100 000 Р'},
            {title:'Площадь (жилая/общая)',value:'500/100м2'},
            {title:'Класс',value:'Бизес'},
            {title:'Тип дома',value:'Монолитный'},
            {title:'Бассей',value:'20м2'},
            {title:'Гараж',value:'5м/м'},
        ]
    },
    {
        id:'2',
        nameObject:'3-х этажный коттедж',
        img:'https://i.pinimg.com/736x/25/7e/7c/257e7c44720ad1f5a9246d15299c9812.jpg',
        webAddress:'',
        allSquare:'500 м2',
        datePublish:'31.08.2021',
        nameCompanyPublish:'Estatum',
        country:'Крым',
        city:'Ялта',
        dateUpdate:'03.09.2021',
        phone:'+7 999 765 38 21',
        params:[
            {title:'Цена',value:'10 000 000 Р'},
            {title:'Цена за м2',value:'100 000 Р'},
            {title:'Площадь (жилая/общая)',value:'500/100м2'},
            {title:'Класс',value:'Бизес'},
            {title:'Тип дома',value:'Монолитный'},
            {title:'Бассей',value:'20м2'},
            {title:'Гараж',value:'5м/м'},
        ]
    }
]

const ProfSearch = () => {
    const click = (id:string) =>{
        console.log(id,'click')
    }
    // + Link - url
    return (
        <div>
            <Filter />
            <FilterSearch type={'professional'}/>
            <Typography color={"tertiary"}>Найдено 30 000 объявлений</Typography>
            {
                professionalSearch.map((object,index)=>(
                    <div key={index} className={css.border}>
                        <div className={css.borderImage}>
                            <Image
                                src={object.img}
                                className={css.image}
                                loader={(e)=>myLoader(e.src,e.width,e.quality)}
                                width={126} height={126} alt={''} />
                            <div className={css.buttonPosition}>
                                <BaseButton type={'secondary'} icon={<FavoriteIcon />} onClick={()=>click(object.id)} ></BaseButton>
                            </div>
                        </div>

                        <div className={css.paddingInfo}>
                            <LineV2
                                allSquare={object.allSquare}
                                datePublish={object.datePublish}
                                nameCompanyPublish={object.nameCompanyPublish}
                                nameObject={object.nameObject}
                            />
                            <LineV3
                                country={object.country}
                                city={object.city}
                                dateUpdate={object.dateUpdate}
                                phone={object.phone}
                            />
                            <EnumerationColumn>
                                {
                                    object.params.map((param,index)=>(
                                        <ParamsColumn key={index} title={param.title} value={param.value}/>
                                    ))
                                }
                            </EnumerationColumn>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

type LineV2Type={
    nameObject:string
    allSquare:string
    datePublish:string
    nameCompanyPublish:string
}

const  LineV2 :FC<LineV2Type> = ({nameObject,allSquare,datePublish,nameCompanyPublish}) => {
    return(
        <div className={css.grid_3} >
            <div className={css.df}>
                <Typography weight={"bold"}>{nameObject}</Typography>,
                <Typography weight={"bold"}>{allSquare}</Typography>
            </div>
           <div className={css.df}>
               <Typography color={"tertiary"}>Дата публикации:</Typography>
               <Typography color={"tertiary"}>{datePublish}</Typography>
           </div>
            <div>
                <Typography weight={"bold"}>{nameCompanyPublish}</Typography>
            </div>

        </div>
    )
}
type LineV3Type={
    country:string
    city:string
    dateUpdate:string
    phone:string
}
const  LineV3 :FC<LineV3Type> = ({country,city,dateUpdate,phone}) => {
    return(
        <div className={css.grid_3T} >
            <div className={css.df}>
                <Typography weight={"light"}>Адрес:</Typography>,
                <Typography weight={"bold"}>{country}, {city}</Typography>
            </div>
           <div className={css.df}>
               <Typography color={"tertiary"}>Дата обновления:</Typography>
               <Typography color={"tertiary"}>{dateUpdate}</Typography>
           </div>
            <div>
                <Typography weight={"bold"}>{phone}</Typography>
            </div>

        </div>
    )
}


export default ProfSearch;