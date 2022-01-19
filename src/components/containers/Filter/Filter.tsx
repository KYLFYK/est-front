import React, { ChangeEvent } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'
import { ISearchParamsModel } from "../../../utils/interfaces/search"
import { BaseDropDown } from "../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../shared/BaseInput/Input"
import BaseButton from "../../shared/BaseButton/BaseButtons"
import { CompareInput } from "../../shared/CompareInput/CompareInput"
import InputsUnion from "../../shared/InputsUnion/InputsUnion"
import { ToggleButtons } from "../../shared/ToggleButtons/ToggleButtons"
import Typography from "src/components/shared/Typography/Typography"
import { FILTER_ACTIONS_OPTIONS, FILTER_BUILDING_TYPE_OPTIONS, FILTER_FLOORS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS, TOGGLE_BUTTONS_OPTIONS } from "./config"
import { getValue, getProp } from "src/lib/mapping/filterProps"

import s from './Filter.module.scss'

import {makeStyles} from "@material-ui/core";
import { SearchApi } from "src/api/search/search"

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

export const Filter: React.FC<Props> = ({ location, initialValues }) => {

    const router = useRouter()

    const classes = useStyles()

    const [values, setValues] = React.useState<any>({
        objectType: FILTER_HOUSE_TYPE_OPTIONS[0].value,
        secondaryType: undefined,
        floors: undefined,
        priceFrom: undefined,
        priceTo: undefined,
        squareFrom: undefined,
        squareTo: undefined,
        planning: undefined,
        actionType: FILTER_ACTIONS_OPTIONS[0].value,
        searchValue: undefined,
    })

    const params: any = Object.entries(values).reduce((acc, cur, i): any => {
        if(cur[1]) {
            //@ts-expect-error
            acc[`${getValue(cur[0])}`] = cur[1]    
        } 
        return acc
    }, {})


    React.useEffect(() => {
        if(initialValues) {
            const mappedInitialValues: any = Object.entries(initialValues).reduce((acc, cur, i): any => {
                if(cur[1]) {
                    //@ts-expect-error
                    acc[`${getProp(cur[0])}`] = cur[1]    
                } 
                return acc
            }, {})
            setValues(mappedInitialValues)
        } 
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
            }, undefined, {shallow: true})
            SearchApi.getFilteredObj(params)
        }
    }

    const onChangeActionType = (value: string) => {
        setValues({...values, actionType: value})
    }
    const onChangeHouseType = (value: string) => {
        setValues({ ...values, objectType: value })
    }
    const onChangeFloors = (value: string) => {
        setValues({ ...values, floors: value })
    }
    const onChangePlanning = (value: string) => {
        const selectedPlanningSet = new Set(values.planning?.split(','))
        selectedPlanningSet.has(value) ? selectedPlanningSet.delete(value) : selectedPlanningSet.add(value)
        setValues({ ...values, planning: Array.from(selectedPlanningSet).join(',') || undefined })
    }
    const onChangeBuildingType = (value: string) => {
        setValues({ ...values, secondaryType: value })
    }
    const onChangePriceFrom = (value: string) => {
        setValues({ ...values, priceFrom: value })
    }
    const onChangePriceTo = (value: string) => {
        setValues({ ...values, priceTo: value })
    }
    const onChangeSquareFrom = (value: string) => {
        setValues({ ...values, squareFrom: value })
    }
    const onChangeSquareTo = (value: string) => {
        setValues({ ...values, squareTo: value })
    }
    const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, searchValue: e.target.value})
    }

    return (
        <div className={s.wrapper}>
            <InputsUnion className={s.actionDropdownUnion}>
                <BaseDropDown options={FILTER_ACTIONS_OPTIONS} value={values.actionType} onChange={onChangeActionType} placeholder={FILTER_ACTIONS_OPTIONS[0].label} className={classes.root} />
                <BaseDropDown options={FILTER_HOUSE_TYPE_OPTIONS} value={values.objectType} onChange={onChangeHouseType} placeholder={FILTER_HOUSE_TYPE_OPTIONS[0].label} className={classes.root} />
            </InputsUnion>
            <ToggleButtons classNameButton={s.toggleButton} items={TOGGLE_BUTTONS_OPTIONS} activeValue={values.planning} onChange={onChangePlanning} multiple />
            <BaseInput type="text" placeholder="Поиск" className={s.searchInput} onChange={onChangeSearchValue}/>
            <InputsUnion className={s.inputsUnion}>
                <CompareInput classNameInput={s.input} placeholderFrom="Цена от" placeholderTo="до" valueFrom={values.priceFrom} valueTo={values.priceTo} onChangeFrom={onChangePriceFrom} onChangeTo={onChangePriceTo} Icon="₽" />
                <CompareInput classNameInput={s.input} placeholderFrom="Площадь от" placeholderTo="до" valueFrom={values.squareFrom} valueTo={values.squareTo} onChangeFrom={onChangeSquareFrom} onChangeTo={onChangeSquareTo} Icon={<span>м<sup>2</sup></span>} />
            </InputsUnion>
            <BaseDropDown options={FILTER_BUILDING_TYPE_OPTIONS} value={values.secondaryType} onChange={onChangeBuildingType} placeholder="Выбрать тип здания" className={s.dropdown} />
            <BaseDropDown options={FILTER_FLOORS_OPTIONS} value={values.floors} onChange={onChangeFloors} placeholder="Выбрать этаж" className={s.dropdownFloor} />
            {
                (location === 'start' || location === 'search')
                ? <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Показать объявления</BaseButton>
                : <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Искать</BaseButton>
            }
            
        </div>
    )
}
