import React, {FC, useState} from 'react';
import BackPage from "../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../shared/Typography/Typography";
import {BaseDropDown} from "../../../../../shared/BaseDropDown/BaseDropDown";
import css from './ResComplexes.module.scss'
import ResApartment from "./ResApartment";

type ResComplexObjectsType={
    onComplex:()=>void
}

const optionCorpus =[
    {value:'1',label:'Корпус 1'},
    {value:'2',label:'Корпус 2'},
    {value:'3',label:'Корпус 3'},
]
const optionFloor =[
    {value:'1 ',label:'1 этаж'},
    {value:'2',label:'2 этаж'},
    {value:'3',label:'3 этаж'},
    {value:'3',label:'4 этаж'},
    {value:'3',label:'5 этаж'},
]

const infoObject={
    corpus: {'Корпус':'1'},
    floor: {'Этаж':'3/15'},
    area: {'Площадь':'52м2'},
    status: {'Статус':'Продана'},
}
const infoObject1={
    corpus: {'Корпус':'2'},
    floor: {'Этаж':'4/15'},
    area: {'Площадь':'72м2'},
    status: {'Статус':'Свободна'},
}
const infoObject2={
    corpus: {'Корпус':'4'},
    floor: {'Этаж':'12/15'},
    area: {'Площадь':'92м2'},
    status: {'Статус':'Бронь до 12/11/21'},
}
const ResComplexObjects :FC<ResComplexObjectsType> = ({onComplex}) => {
    const [corpus, setCompus]=useState<string>(optionCorpus[0].label)
    return (
        <div >
            <BackPage onBackPage={onComplex} title={'ЖК Ленинский'} />
            <Typography weight={"bold"} className={css.marginB_20}>
                Квартиры и аппартаменты
            </Typography>
            <div style={{display:'flex'}}>
                <BaseDropDown className={css.marginR_10} options={optionCorpus} placeholder={optionCorpus[0].label} onChange={setCompus} value={corpus} />
                <BaseDropDown options={optionFloor} placeholder={optionFloor[0].label} onChange={setCompus} value={corpus} />
            </div>
            <div className={css.grid4}>
                <ResApartment name={'1-комнатная квартира'} price={'12 860 000'} info={infoObject}  />
                <ResApartment name={'1-комнатная квартира'} price={'12 860 000'} info={infoObject1}  />
                <ResApartment name={'1-комнатная квартира'} price={'12 860 000'} info={infoObject2}  />
                <ResApartment name={'1-комнатная квартира'} price={'12 860 000'} info={infoObject2}  />
                <ResApartment name={'1-комнатная квартира'} price={'12 860 000'} info={infoObject1}  />
                <ResApartment name={'1-комнатная квартира'} price={'12 860 000'} info={infoObject}  />
            </div>
        </div>
    );
};

export default ResComplexObjects;