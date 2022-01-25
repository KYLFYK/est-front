import React, { ChangeEvent } from "react"
import { observer } from "mobx-react-lite"
import { useRouter } from 'next/router'
import { ISearchParamsModel } from "../../../utils/interfaces/search"
import { BaseDropDown } from "../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../shared/BaseInput/Input"
import BaseButton from "../../shared/BaseButton/BaseButtons"
import { CompareInput } from "../../shared/CompareInput/CompareInput"
import InputsUnion from "../../shared/InputsUnion/InputsUnion"
import { ToggleButtons } from "../../shared/ToggleButtons/ToggleButtons"
import { FILTER_ACTIONS_OPTIONS, FILTER_BUILDING_TYPE_OPTIONS, FILTER_PRIVATE_HOUSE_OPTIONS, FILTER_FLOORS_OPTIONS, 
    FILTER_HOUSE_TYPE_OPTIONS, TOGGLE_BUTTONS_OPTIONS, FILTER_IRB_OPTIONS, FILTER_LAND_SPECS_OPTIONS } from "./config"
import { useStore } from "src/mobx/stores/SearchStore/SearchStore"

import s from './Filter.module.scss'

import {makeStyles} from "@material-ui/core";

interface Props {
    location?: 'start' | 'search'
    initialValues?: ISearchParamsModel
}

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: 1,
        backgroundColor: "#fff",
        width: 200,
        borderRadius: 8,
        border: '0px solid #CAD1DA',
        "&::before": {
            display: 'none'
        },
        "&.MuiInput-underline::after": {
            display: 'none'
        },
        "& > .MuiSelect-root": {
            padding: '10px 15px 10px 12px !important',
            "&:focus": {
                backgroundColor: 'inherit'
            }
        }
    }
}
))

export const Filter: React.FC<Props> = observer(({ location, initialValues }) => {

    const router = useRouter()
    const store = useStore()
    const classes = useStyles()

    const [values, setValues] = React.useState<any>({
        'object-type': FILTER_HOUSE_TYPE_OPTIONS[0].value,
        'building-type': undefined,
        floor: undefined,
        'price-from': undefined,
        'price-to': undefined,
        'square-from': undefined,
        'square-to': undefined,
        rooms: undefined,
        'order-type': FILTER_ACTIONS_OPTIONS[0].value,
        searchValue: undefined,
        privateType: FILTER_PRIVATE_HOUSE_OPTIONS[0].value,
        'floor-from': undefined,
        'floor-to': undefined,
        'irb': undefined,
        'improvement': undefined,
    })
    console.log(values)
    const params: any = Object.entries(values).reduce((acc, cur, i): any => {
        if(cur[1]) {
            //@ts-expect-error
            acc[`${cur[0]}`] = cur[1]    
        } 
        return acc
    }, {})

    React.useEffect(() => {
        initialValues && setValues(initialValues)
        location === 'search' && store.fetch()
    }, [initialValues])

    const onSubmit = () => {
        if(location === 'start') {
            router.push(
            {
              pathname: '/search',
              query: params,
            })
        }
        if(location === 'search') {
            router.replace(
            {
                pathname: '/search',
                query: params,
            }, undefined, {})
            store.setParams(params)
            store.fetch()
        }
    }
    
    const onChangeActionType = (value: string) => {
        setValues({...values, 'order-type': value})
    }
    const onChangeHouseType = (value: string) => {
        setValues({ ...values, 'object-type': value })
    }
    const onChangeFloors = (value: string) => {
        setValues({ ...values, floor: value })
    }
    const onChangePlanning = (value: string) => {
        const selectedPlanningSet = new Set(values['rooms']?.split(','))
        selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
        setValues({ ...values, 'rooms': Array.from(selectedPlanningSet).join(',') || undefined })
    }
    const onChangeBuildingType = (value: string) => {
        setValues({ ...values, 'building-type': value })
    }
    const onChangePriceFrom = (value: string) => {
        setValues({ ...values, 'price-from': value })
    }
    const onChangePriceTo = (value: string) => {
        setValues({ ...values, 'price-to': value })
    }
    const onChangeSquareFrom = (value: string) => {
        setValues({ ...values, 'square-from': value })
    }
    const onChangeSquareTo = (value: string) => {
        setValues({ ...values, 'square-to': value })
    }
    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, searchValue: e.target.value})
    }
    const onChangePrivateType = (value: string) => {
        setValues({...values, searchValue: value})
    }
    const onChangePrivateFloorFrom = (value: string) => {
        setValues({...values, 'floor-from': value})
    }
    const onChangePrivateFloorTo = (value: string) => {
        setValues({...values, 'floor-to': value})
    }
    const onChangeIrb = (value: string) => {
        setValues({...values, 'irb': value})
    }
    const onChooseImprovment = (value: string) => {
        setValues({...values, 'improvement': value})
    }

    return (
        <div className={s.wrapper}>
            <InputsUnion className={s.actionDropdownUnion}>
                <BaseDropDown 
                    options={FILTER_ACTIONS_OPTIONS} 
                    value={values['order-type']} 
                    onChange={onChangeActionType} 
                    placeholder={FILTER_ACTIONS_OPTIONS[0].label} 
                    className={classes.root} 
                />
                <BaseDropDown 
                    options={FILTER_HOUSE_TYPE_OPTIONS} 
                    value={values['object-type']} 
                    onChange={onChangeHouseType} 
                    placeholder={FILTER_HOUSE_TYPE_OPTIONS[0].label} 
                    className={classes.root} 
                />
            </InputsUnion>

            {values['object-type'] === 'house' && <BaseDropDown 
                options={FILTER_PRIVATE_HOUSE_OPTIONS} 
                value={values.privateType} 
                onChange={onChangePrivateType} 
                placeholder={FILTER_PRIVATE_HOUSE_OPTIONS[0].label} 
                className={classes.root} 
            />}

            {values['object-type'] === 'house' && <CompareInput 
                classNameInput={s.input} 
                placeholderFrom="Этажей от" 
                placeholderTo="до" 
                valueFrom={values['floor-from']} 
                valueTo={values['floor-to']} 
                onChangeFrom={onChangePrivateFloorFrom} 
                onChangeTo={onChangePrivateFloorTo} 
            />}

            {values['object-type'] === 'apartment' && <ToggleButtons 
                classNameButton={s.toggleButton} 
                items={TOGGLE_BUTTONS_OPTIONS} 
                activeValue={values.rooms} 
                onChange={onChangePlanning} 
                multiple 
            />}

            <BaseInput type="text" placeholder="Поиск" className={s.searchInput} onChange={onChangeSearchValue}/>

            <InputsUnion className={s.inputsUnion}>
                <CompareInput 
                    classNameInput={s.input} 
                    placeholderFrom="Цена от" 
                    placeholderTo="до" 
                    valueFrom={values['price-from']} 
                    valueTo={values['price-to']} 
                    onChangeFrom={onChangePriceFrom} 
                    onChangeTo={onChangePriceTo} 
                />
                <CompareInput 
                    classNameInput={s.input} 
                    placeholderFrom="Площадь от" 
                    placeholderTo="до" 
                    valueFrom={values['square-from']} 
                    valueTo={values['square-to']} 
                    onChangeFrom={onChangeSquareFrom} 
                    onChangeTo={onChangeSquareTo} 
                    Icon={<span>м<sup>2</sup></span>} 
                />
            </InputsUnion>

            {values['object-type'] !== 'land' && <BaseDropDown 
                options={FILTER_BUILDING_TYPE_OPTIONS} 
                value={values['building-type']} 
                onChange={onChangeBuildingType} 
                placeholder={values['object-type'] === 'apartment' ? "Выбрать тип здания" : "Тип дома"} 
                className={s.dropdown} 
            />}

            {values['object-type'] === 'apartment' && <BaseDropDown 
                options={FILTER_FLOORS_OPTIONS} 
                value={values.floor} 
                onChange={onChangeFloors} 
                placeholder="Выбрать этаж" 
                className={s.dropdownFloor} 
            />}

            {values['object-type'] === 'land' && <BaseDropDown 
                options={FILTER_IRB_OPTIONS} 
                value={values['irb']} 
                onChange={onChangeIrb} 
                placeholder="Выбрать c ИЖС или без" 
                className={classes.root} 
            />}

            {(values['object-type'] === 'house' || values['object-type'] === 'land') && <BaseDropDown 
                options={FILTER_LAND_SPECS_OPTIONS} 
                value={values['improvement']} 
                onChange={onChooseImprovment} 
                placeholder="Выбрать благоустроенность" 
                className={classes.root} 
            />}
            
            {
                (location === 'start' || location === 'search')
                ? <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Показать объявления</BaseButton>
                : <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Искать</BaseButton>
            }
            
        </div>
    )
})


