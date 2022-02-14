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
    FILTER_HOUSE_TYPE_OPTIONS, TOGGLE_BUTTONS_OPTIONS_APART, TOGGLE_BUTTONS_OPTIONS_HOUSE, FILTER_IRB_OPTIONS, FILTER_LAND_SPECS_OPTIONS } from "./config"
import { useSearchStore } from "src/mobx/stores/SearchStore/SearchStore"
import { useBreadcrumbsStore } from "src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore"
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
    const searchStore = useSearchStore()
    const breadcrumbs = useBreadcrumbsStore()
    const classes = useStyles()
    const [values, setValues] = React.useState<any>({
        'object-type': FILTER_HOUSE_TYPE_OPTIONS[0].value,
        'building-type': FILTER_BUILDING_TYPE_OPTIONS[0].value,
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

    const params: any = Object.entries(searchStore.getFilter()).reduce((acc, cur, i): any => {
        if(cur[1] && cur[0] !== 'privateType') {
            //@ts-expect-error
            acc[`${cur[0]}`] = cur[1]    
        } 
        if(cur[1] && cur[0] === 'object-type' && values['privateType'] === 'townhouse') {
            //@ts-expect-error
            acc[`${cur[0]}`] = 'townhouse'
        } 
        if(cur[0] === 'rooms-in-apartment' && values['object-type'] === 'apartment') {
            //@ts-expect-error
            acc[`${cur[0]}`] = cur[1]
        } 
        if(cur[0] === 'rooms-in-house' && values['object-type'] === 'house' || values['object-type'] === 'townhouse' ) {
            //@ts-expect-error
            acc[`${cur[0]}`] = cur[1]
        } 
        return acc
    }, {})
    
    React.useEffect(() => {
        if(initialValues && initialValues['object-type'] === 'townhouse') {
            initialValues['object-type'] = 'house'
            initialValues['privateType'] = FILTER_PRIVATE_HOUSE_OPTIONS[1].value
        }
        initialValues && setValues(initialValues)
        searchStore.setParams(params)
        if(location === 'search') {
            breadcrumbs.addBreadCrumbs(FILTER_ACTIONS_OPTIONS.filter((s: any) => router.query['order-type'] === s.value)[0].label, 1)
            breadcrumbs.addBreadCrumbs(FILTER_HOUSE_TYPE_OPTIONS.filter((s: any) => router.query['object-type'] === s.value)[0].label, 2)
            searchStore.fetch()
        }
    }, [initialValues])
    
    const onSubmit = () => {
        if(location === 'start') {
            router.push(
            {
              pathname: '/search',
              query: params,
            })
            searchStore.setParams(params)
            searchStore.fetch()
        }
        if(location === 'search') {
            router.replace(
            {
                pathname: '/search',
                query: params,
            }, undefined, {})
            searchStore.setParams(params)
            searchStore.fetch()
        }
    }
    console.log(searchStore.getFilter())
    const onChangeActionType = (value: string) => {
        searchStore.setOrderType(value)
        breadcrumbs.addBreadCrumbs(FILTER_ACTIONS_OPTIONS.filter((s: any) => value === s.value)[0].label, 1)
    }
    const onChangeHouseType = (value: string) => {
        searchStore.setHouseType(value)
        breadcrumbs.addBreadCrumbs(FILTER_HOUSE_TYPE_OPTIONS.filter((s: any) => value === s.value)[0].label, 2)
    }
    const onChangeFloors = (value: string) => {
        searchStore.setFloors(value)
    }
    const onChangePlanningApart = (value: string) => {
        searchStore.setRoomsApart(value)
    }
    const onChangePlanningHouse = (value: string) => {
        searchStore.setRoomsHouse(value)
    }
    const onChangeBuildingType = (value: string) => {
        searchStore.setBuildingType(value)
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
        searchStore.setPrivateType(value)
        breadcrumbs.addBreadCrumbs(value, 2)
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
                    value={searchStore.filter['order-type']} 
                    onChange={onChangeActionType} 
                    placeholder={FILTER_ACTIONS_OPTIONS[0].label} 
                    className={classes.root} 
                />
                <BaseDropDown 
                    options={FILTER_HOUSE_TYPE_OPTIONS} 
                    value={searchStore.filter['object-type']} 
                    onChange={onChangeHouseType} 
                    placeholder={FILTER_HOUSE_TYPE_OPTIONS[0].label} 
                    className={classes.root} 
                />
            </InputsUnion>

            {(values['object-type'] === 'house') && <BaseDropDown 
                options={FILTER_PRIVATE_HOUSE_OPTIONS} 
                value={searchStore.filter['privateType']} 
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
                valueFrom={searchStore.filter['floor-from']} 
                valueTo={searchStore.filter['floor-to']} 
                onChangeFrom={onChangePrivateFloorFrom} 
                onChangeTo={onChangePrivateFloorTo} 
            />}

            {values['object-type'] === 'apartment' && <ToggleButtons 
                classNameButton={s.toggleButton} 
                items={TOGGLE_BUTTONS_OPTIONS_APART} 
                activeValue={searchStore.filter['rooms-in-apartment']} 
                onChange={onChangePlanningApart} 
                multiple 
            />}

            {(searchStore.filter['object-type'] === 'house' || searchStore.filter['object-type'] === 'townhouse') && <ToggleButtons 
                classNameButton={s.toggleButton} 
                items={TOGGLE_BUTTONS_OPTIONS_HOUSE} 
                activeValue={searchStore.filter['rooms-in-house']} 
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
                    valueFrom={searchStore.filter['price-from']} 
                    valueTo={searchStore.filter['price-to']} 
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
                    valueFrom={searchStore.filter['square-from']} 
                    valueTo={searchStore.filter['square-to']} 
                    onChangeFrom={onChangeSquareFrom} 
                    onChangeTo={onChangeSquareTo} 
                    Icon={<span>м<sup>2</sup></span>} 
                />
            </InputsUnion>

            {searchStore.filter['object-type'] !== 'land' && <BaseDropDown 
                options={FILTER_BUILDING_TYPE_OPTIONS} 
                value={searchStore.filter['building-type']} 
                onChange={onChangeBuildingType} 
                placeholder={searchStore.filter['building-type']} 
                className={s.dropdown} 
            />}

            {searchStore.filter['object-type'] === 'apartment' && <BaseDropDown 
                options={FILTER_FLOORS_OPTIONS} 
                value={searchStore.filter.floor} 
                onChange={onChangeFloors} 
                placeholder="Выбрать этаж" 
                className={s.dropdownFloor} 
            />}

            {searchStore.filter['object-type'] === 'land' && <BaseDropDown 
                options={FILTER_IRB_OPTIONS} 
                value={searchStore.filter['building']} 
                onChange={onChangeIrb} 
                placeholder="Выбрать c ИЖС или без" 
                className={s.dropdown} 
            />}

            {searchStore.filter['object-type'] !== 'apartment' && <BaseDropDown 
                options={FILTER_LAND_SPECS_OPTIONS} 
                value={searchStore.filter['benefit']} 
                onChange={onChooseImprovment} 
                placeholder={searchStore.filter['benefit'] ? MultiChoiceBenefits() : "Выбрать благоустроенность"} 
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


