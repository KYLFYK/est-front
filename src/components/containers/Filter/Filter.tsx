import React from "react"
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
            padding: '10px 15px 11px 12px !important',
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
        'rooms-in-apartment': undefined,
        'rooms-in-house': undefined,
        'order-type': FILTER_ACTIONS_OPTIONS[0].value,
        searchValue: undefined,
        'privateType': FILTER_PRIVATE_HOUSE_OPTIONS[0].value,
        'floor-from': undefined,
        'floor-to': undefined,
        'building': undefined,
        'benefit': undefined,
    })
    
    const params: any = Object.entries(values).reduce((acc, cur, i): any => {
        if(cur[1] && cur[0] !== 'privateType') {
            //@ts-expect-error
            acc[`${cur[0]}`] = cur[1]    
        } 
        if(cur[1] && cur[0] === 'object-type' && values['privateType'] === 'townhouse') {
            //@ts-expect-error
            acc[`${cur[0]}`] = 'townhouse'
        } 
        return acc
    }, {})

    React.useEffect(() => {
        if(initialValues && initialValues['object-type'] === 'townhouse') {
            initialValues['object-type'] = 'house'
            initialValues['privateType'] = FILTER_PRIVATE_HOUSE_OPTIONS[1].value
        }
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
        setValues({ ...values, 
            'object-type': value, 
            'building-type': undefined,
            'privateType': FILTER_PRIVATE_HOUSE_OPTIONS[0].value, 
            'benefit': undefined, 
            'building': value === 'land' ? undefined : values['building'],
            'rooms-in-house': undefined,
            'rooms-in-apartment': undefined,
        })
    }
    const onChangeFloors = (value: string) => {
        setValues({ ...values, floor: value })
    }
    const onChangePlanningApart = (value: string) => {
        const selectedPlanningSet = new Set(values['rooms-in-apartment']?.split(','))
        selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
        setValues({ ...values, 'rooms-in-apartment': Array.from(selectedPlanningSet).join(',') || undefined, 'rooms-in-house': undefined })
    }
    const onChangePlanningHouse = (value: string) => {
        const selectedPlanningSet = new Set(values['rooms-in-house']?.split(','))
        selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
        setValues({ ...values, 'rooms-in-house': Array.from(selectedPlanningSet).join(',') || undefined, 'rooms-in-apartment': undefined })
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
    /*const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, searchValue: e.target.value})
    }*/
    const onChangePrivateType = (value: string) => {
        setValues({...values, 'privateType': value})
    }
    const onChangePrivateFloorFrom = (value: string) => {
        setValues({...values, 'floor-from': value})
    }
    const onChangePrivateFloorTo = (value: string) => {
        setValues({...values, 'floor-to': value}) 
    }
    const onChangeIrb = (value: string) => {
        setValues({...values, 'building': value})
    }
    const onChooseImprovment = (value: string) => {
        const selectedImprovmentSet = new Set(values['benefit']?.split(','))
        selectedImprovmentSet.has(value) ? selectedImprovmentSet.delete(value) : selectedImprovmentSet.add(value)
        setValues({ ...values, 'benefit': Array.from(selectedImprovmentSet).join(',') || undefined })
    }

    const MultiChoiceBenefits = () => {
        const selectedImprovmentSet = new Set(values['benefit']?.split(','))
        return Array.from(selectedImprovmentSet).map((si: any) => FILTER_LAND_SPECS_OPTIONS.filter((s: any) => si === s.value)[0].label).join(', ')
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

            {(values['object-type'] === 'house') && <BaseDropDown 
                options={FILTER_PRIVATE_HOUSE_OPTIONS} 
                value={values['privateType']} 
                onChange={onChangePrivateType} 
                placeholder={FILTER_PRIVATE_HOUSE_OPTIONS[0].label} 
                className={s.dropdown}  
            />}

            {(values['object-type'] === 'house') && <CompareInput 
                location="search"
                classNameInputFrom={s.floorInputFrom} 
                classNameInputTo={s.floorInputTo}  
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
                activeValue={values['rooms-in-apartment']} 
                onChange={onChangePlanningApart} 
                multiple 
            />}

            {(values['object-type'] === 'house' || values['object-type'] === 'townhouse') && <ToggleButtons 
                classNameButton={s.toggleButton} 
                items={TOGGLE_BUTTONS_OPTIONS} 
                activeValue={values['rooms-in-house']} 
                onChange={onChangePlanningHouse} 
                multiple 
            />}

            {/*<BaseInput type="text" placeholder="Поиск" className={s.searchInput} onChange={onChangeSearchValue}/>*/}

            <InputsUnion className={s.inputsUnion}>
                <CompareInput 
                    location="search"
                    classNameInputFrom={s.priceInputFrom} 
                    classNameInputTo={s.priceInputTo} 
                    placeholderFrom="Цена от" 
                    placeholderTo="до" 
                    valueFrom={values['price-from']} 
                    valueTo={values['price-to']} 
                    onChangeFrom={onChangePriceFrom} 
                    onChangeTo={onChangePriceTo} 
                    Icon={<span>₽</span>} 
                />
                <CompareInput 
                    location="search"
                    classNameInputFrom={s.squareInputFrom} 
                    classNameInputTo={s.squareInputTo} 
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
                value={values['building']} 
                onChange={onChangeIrb} 
                placeholder="Выбрать c ИЖС или без" 
                className={s.dropdown} 
            />}

            {values['object-type'] !== 'apartment' && <BaseDropDown 
                options={FILTER_LAND_SPECS_OPTIONS} 
                value={values['benefit']} 
                onChange={onChooseImprovment} 
                placeholder={values['benefit'] ? MultiChoiceBenefits() : "Выбрать благоустроенность"} 
                className={s.dropdown} 
            />}
            
            {
                (location === 'start' || location === 'search')
                ? <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Показать объявления</BaseButton>
                : <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Искать</BaseButton>
            }
            
        </div>
    )
})


