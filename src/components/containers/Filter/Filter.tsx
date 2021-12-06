import React, { ChangeEvent } from "react"
import { ISearchParamsModel } from "../../../utils/interfaces/search"
import BaseButton from "../../shared/BaseButton/BaseButtons"
import { BaseDropDown } from "../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../shared/BaseInput/Input"
import { CompareInput } from "../../shared/CompareInput/CompareInput"
import InputsUnion from "../../shared/InputsUnion/InputsUnion"
import { ToggleButtons } from "../../shared/ToggleButtons/ToggleButtons"
import { FILTER_ACTIONS_OPTIONS, FILTER_BUILDING_TYPE_OPTIONS, FILTER_FLOORS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS, TOGGLE_BUTTONS_OPTIONS } from "./config"

import s from './Filter.module.scss'

interface Props {
    initialValues?: ISearchParamsModel
}

export const Filter: React.FC<Props> = ({ initialValues }) => {

    const [values, setValues] = React.useState<ISearchParamsModel>({
        objectType: undefined,
        secondaryType: undefined,
        floors: undefined,
        priceFrom: undefined,
        priceTo: undefined,
        squareFrom: undefined,
        squareTo: undefined,
        planning: undefined,
        actionType: undefined,
        searchValue: undefined,
    })

    React.useEffect(() => {
        initialValues && setValues(initialValues)
    }, [initialValues])


    const onSubmit = () => {
        console.log(values)
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
    console.log(values)
    return (
        <div className={s.wrapper}>
            <InputsUnion className={s.actionDropdownUnion}>
                <BaseDropDown options={FILTER_ACTIONS_OPTIONS} value={values.actionType} onChange={onChangeActionType} placeholder="Выбрать действие" className={s.dropdown} />
                <BaseDropDown options={FILTER_HOUSE_TYPE_OPTIONS} value={values.objectType} onChange={onChangeHouseType} placeholder="Тип дома" className={s.dropdown} />
            </InputsUnion>
            <ToggleButtons classNameButton={s.toggleButton} items={TOGGLE_BUTTONS_OPTIONS} activeValue={values.planning} onChange={onChangePlanning} multiple />
            <BaseInput type="text" placeholder="Поиск" className={s.searchInput} onChange={onChangeSearchValue}/>
            <InputsUnion className={s.inputsUnion}>
                <CompareInput classNameInput={s.input} placeholderFrom="Цена от" placeholderTo="до" valueFrom={values.priceFrom} valueTo={values.priceTo} onChangeFrom={onChangePriceFrom} onChangeTo={onChangePriceTo} Icon="₽" />
                <CompareInput classNameInput={s.input} placeholderFrom="Площадь от" placeholderTo="до" valueFrom={values.squareFrom} valueTo={values.squareTo} onChangeFrom={onChangeSquareFrom} onChangeTo={onChangeSquareTo} Icon={<span>м<sup>2</sup></span>} />
            </InputsUnion>
            <BaseDropDown options={FILTER_BUILDING_TYPE_OPTIONS} value={values.secondaryType} onChange={onChangeBuildingType} placeholder="Выбрать тип здания" className={s.dropdown} />
            <BaseDropDown options={FILTER_FLOORS_OPTIONS} value={values.floors} onChange={onChangeFloors} placeholder="Выбрать этаж" className={s.dropdownFloor} />
            <BaseButton className={s.submit} type="primary" onClick={onSubmit}>Показать объявления</BaseButton>
        </div>
    )
}
