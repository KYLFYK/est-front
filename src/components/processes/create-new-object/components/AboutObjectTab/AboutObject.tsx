import React from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ICreateHouseAboutTab } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { DROPDOWN_FILTER_OPTIONS } from "../../../../containers/PlanningFilter/config"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons"
import Typography from "../../../../shared/Typography/Typography"
import { getInitStateAboutTab, TAboutTabState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './AboutObject.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}



const AboutObjectTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    const [values, setValues] = React.useState<TAboutTabState>()
    const { createObjectStore } = useStores()
    const saveAboutTab = createObjectStore.saveAboutTab.bind(createObjectStore)

    React.useEffect(() => {
        const initState = getInitStateAboutTab(objectType, createObjectStore)
        setValues(initState)
    }, [objectType, createObjectStore])

    const handleNext = () => {
        saveAboutTab(values!, 'apartment')
        onNextTab()
    }

    const handlePrev = () => {
        console.log('prev')
        onPrevTab()
    }

    const onChangeName = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values!, name: event.target.value })
    }
    const onChangeType = (value: string) => {
        setValues({ ...values!, type: value })
    }
    const onChangeComplexName = (value: string) => {
        setValues({ ...values!, complexName: value })
    }
    const onChangeFloor = (value: number) => {
        setValues({ ...values!, floor: value })
    }
    const onChangeFloorsAmmount = (value: number) => {
        setValues({ ...values!, floorsAmmount: value })
    }
    const onChangeCountry = (value: string) => {
        setValues({ ...values!, country: value })
    }
    const onChangeCity = (value: string) => {
        setValues({ ...values!, city: value })
    }
    const onChangeIndex = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values!, index: +event.target.value })
    }
    const onChangeAddress = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values!, address: event.target.value })
    }
    const onChangeCost = (event: React.ChangeEvent & { target: HTMLInputElement }) => {
        setValues({ ...values!, cost: +event.target.value })
    }

    if (!values) return null
    return (
        <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
            <InputsGroup title={"Объект"}>
                <BaseInput label="Придумайте название объекта" className={s.inputXl} type="text" value={values.name} onChange={onChangeName} />
                {("complexName" in values) && ("floor" in values) && ("floorsAmmount" in values) && ("type" in values) && (
                    <>
                        <BaseDropDown className={s.inputSm} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Тип жилья"} value={values.type} onChange={onChangeType} label="Тип жилья" />
                        <BaseDropDown className={s.inputSm} options={DROPDOWN_FILTER_OPTIONS} placeholder={"ЖК"} onChange={onChangeComplexName} value={values.complexName} label="ЖК" />
                        <CounterButtons onChange={onChangeFloor} initValue={values.floor} label="Этаж" />
                        <CounterButtons onChange={onChangeFloorsAmmount} initValue={values.floorsAmmount} label="Этажей в доме" />
                    </>
                )}

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Адрес"}>
                <BaseDropDown value={values.country} className={s.inputMd} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Страна"} onChange={onChangeCountry} label="Страна" />
                <BaseDropDown value={values.city} className={s.inputMd} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Город"} onChange={onChangeCity} label="Город" />
                {("index" in values) && (
                    <BaseInput value={(values as ICreateHouseAboutTab).index} label="Индекс" className={s.inputXs} type="number" onChange={onChangeIndex} />
                )}
                <BaseInput label="Адрес" className={s.inputX} type="text" value={values.address} onChange={onChangeAddress} />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Стоимость"}>
                <BaseInput onChange={onChangeCost}
                    value={values.cost}
                    label="Укажите стоимость в рублях"
                    className={s.inputMd}
                    type="number"
                    icon={
                        <Typography color="tertiary">₽</Typography>
                    }
                />
            </InputsGroup>
        </ButtonPanel>
    )
}

export default AboutObjectTab