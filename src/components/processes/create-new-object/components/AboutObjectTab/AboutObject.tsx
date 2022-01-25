import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ICreateHouseAboutTab } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import {
    DROPDOWN_CITY_OPTIONS,
    DROPDOWN_COUNTRY_OPTIONS,
    DROPDOWN_FILTER_OPTIONS
} from "../../../../containers/PlanningFilter/config"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons"
import Typography from "../../../../shared/Typography/Typography"
import { getInitStateAboutTab, isValidInputsAboutTab, TAboutTabState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './AboutObject.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const AboutObjectTab: React.FC<Props> = observer(({ onNextTab, onPrevTab, objectType }) => {

    const { createObjectStore } = useStores()
    const [values, setValues] = React.useState<TAboutTabState>(getInitStateAboutTab(objectType, createObjectStore)) // 1-type Object  2-
    const [isValid, setIsValid] = useState<boolean>(true)
    const saveAboutTab = createObjectStore.saveAboutTab.bind(createObjectStore)

    const isValidName = (("name" in values) && !!values.name.length) // REPLACE BY VALIDATION SERVICE
    const isValidType = (("type" in values) && !!values.type.length) // REPLACE BY VALIDATION SERVICE
    const isValidComplexName = (("complexName" in values) && !!values.complexName.length) // REPLACE BY VALIDATION SERVICE
    const isValidCountry = (("country" in values) && !!values.country.length) // REPLACE BY VALIDATION SERVICE
    const isValidCity = (("city" in values) && !!values.city.length) // REPLACE BY VALIDATION SERVICE
    const isValidIndex = (("index" in values) && !!values.index) // REPLACE BY VALIDATION SERVICE
    const isValidAddress = (("address" in values) && !!values.address.length) // REPLACE BY VALIDATION SERVICE
    const isValidCost = (("cost" in values) && !!values.cost) // REPLACE BY VALIDATION SERVICE

    const handleNext = () => {
        const isValid = isValidInputsAboutTab(
            objectType,
            isValidName,
            isValidType,
            isValidComplexName,
            isValidCountry,
            isValidCity,
            isValidIndex,
            isValidAddress,
            isValidCost
        )
        if (isValid) {
            saveAboutTab(values!, objectType)
            onNextTab && onNextTab()
        }
        else {
            setIsValid(isValid)
        }
    }

    const handlePrev = () => {
        onPrevTab()
    }

    const onChangeName = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values, name: event.target.value })
    }
    const onChangeType = (value: string) => {
        setValues({ ...values, type: value })
    }
    const onChangeComplexName = (value: string) => {
        setValues({ ...values, complexName: value })
    }
    const onChangeFloor = (value: number) => {
        setValues({ ...values, floor: value })
    }
    const onChangeFloorsAmmount = (value: number) => {
        setValues({ ...values, floorsAmmount: value })
    }
    const onChangeCountry = (value: string) => {
        setValues({ ...values, country: value })
    }
    const onChangeCity = (value: string) => {
        setValues({ ...values, city: value })
    }
    const onChangeIndex = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values, index: +event.target.value })
    }
    const onChangeAddress = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values, address: event.target.value })
    }
    const onChangeCost = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values, cost: +event.target.value })
    }
    return (
        <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
            <InputsGroup title={"Объект"}>
                <BaseInput
                    label="Придумайте название объекта"
                    className={s.inputXl}
                    type="text"
                    value={values.name}
                    onChange={onChangeName}
                    isError={!isValid && !isValidName}
                />
                {("complexName" in values) && ("floor" in values) && ("floorsAmmount" in values) && ("type" in values) && (
                    <>
                        <BaseDropDown
                            className={s.inputSm}
                            options={DROPDOWN_COUNTRY_OPTIONS}
                            placeholder={"Тип жилья"}
                            value={values.type}
                            onChange={onChangeType}
                            label="Тип жилья"
                            isError={!isValid && !isValidType}
                        />

                        <BaseDropDown
                            className={s.inputSm}
                            options={DROPDOWN_FILTER_OPTIONS}
                            placeholder={"ЖК"}
                            onChange={onChangeComplexName}
                            value={values.complexName}
                            label="ЖК"
                            isError={!isValid && !isValidComplexName}

                        />

                        <CounterButtons
                            onChange={onChangeFloor}
                            initValue={values.floor}
                            label="Этаж"
                        />

                        <CounterButtons
                            onChange={onChangeFloorsAmmount}
                            initValue={values.floorsAmmount}
                            label="Этажей в доме" />
                    </>
                )}

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Адрес"}>
                <BaseDropDown
                    value={values.country}
                    className={s.inputMd}
                    options={DROPDOWN_COUNTRY_OPTIONS}
                    placeholder={"Страна"}
                    onChange={onChangeCountry}
                    label="Страна"
                    isError={!isValid && !isValidCountry}

                />

                <BaseDropDown
                    value={values.city}
                    className={s.inputMd}
                    options={DROPDOWN_CITY_OPTIONS}
                    placeholder={"Город"}
                    onChange={onChangeCity}
                    label="Город"
                    isError={!isValid && !isValidCity}
                />
                {("index" in values) && (
                    <BaseInput
                        value={(values as ICreateHouseAboutTab).index}
                        label="Индекс"
                        className={s.inputXs}
                        type="number"
                        onChange={onChangeIndex}
                        isError={!isValid && !isValidIndex}
                    />
                )}
                <BaseInput
                    isError={!isValid && !isValidAddress}
                    label="Адрес"
                    className={s.inputX}
                    type="text"
                    value={values.address}
                    onChange={onChangeAddress}
                />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Стоимость"}>
                <BaseInput onChange={onChangeCost}
                    value={values.cost}
                    label="Укажите стоимость в рублях"
                    className={s.inputMd}
                    type="number"
                    isError={!isValid && !isValidCost}
                    icon={
                        <Typography color="tertiary">₽</Typography>
                    }
                />
            </InputsGroup>
        </ButtonPanel>
    )
})

export default AboutObjectTab