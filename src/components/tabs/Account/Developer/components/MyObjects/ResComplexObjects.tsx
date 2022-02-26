import React, {FC, useState, useEffect, SetStateAction, Dispatch} from 'react';
import { observer } from "mobx-react-lite";
import BackPage from "../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../shared/Typography/Typography";
import {BaseDropDown} from "../../../../../shared/BaseDropDown/BaseDropDown";
import css from './ResComplexes.module.scss'
import ResApartment from "./ResApartment";
import {useStoreDeveloperMyObjectStore} from "../../../../../../mobx/role/developer/myObject/DeveloperMyObject";

type ResComplexObjectsType={
    onComplex: Dispatch<SetStateAction<boolean>>
    complexId: {id: number, name: string}
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

const ResComplexObjects :FC<ResComplexObjectsType> = observer(({onComplex, complexId}) => {

    const store = useStoreDeveloperMyObjectStore()
    const [corpus, setCompus] = useState<string>(optionCorpus[0].label)

    useEffect(() => {
        store.fetchAllObjectsByComplexId(complexId.id)
    }, [])

    return (
        <div >
            <BackPage onBackPage={() => onComplex(false)} title={complexId.name} />
            <Typography weight={"bold"} className={css.marginB_20}>
                Квартиры и аппартаменты
            </Typography>
            <div style={{display:'flex'}}>
                <BaseDropDown className={css.marginR_10} options={optionCorpus} placeholder={optionCorpus[0].label} onChange={setCompus} value={corpus} />
                <BaseDropDown options={optionFloor} placeholder={optionFloor[0].label} onChange={setCompus} value={corpus} />
            </div>
            <div className={css.grid4}>
                {
                    store.initialData.complexObjects && store.initialData.complexObjects.map(object=>(
                        <ResApartment key={object.id} name={object.name} price={object.price} info={object.infoObject}  />
                    ))
                }
            </div>
        </div>
    );
});

export default ResComplexObjects;