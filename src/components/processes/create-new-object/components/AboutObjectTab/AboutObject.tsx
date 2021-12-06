import React from "react"
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

    React.useEffect(() => {
        const initState = getInitStateAboutTab(objectType)
        setValues(initState)
    }, [objectType])

    const handleNext = () => {
        console.log('')
        onNextTab()
    }

    const handlePrev = () => {
        console.log('prev')
        onPrevTab()
    }

    if (!values) return null

    return (
        <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
            <InputsGroup title={"Объект"}>
                <BaseInput label="Придумайте название объекта" className={s.inputXl} type="text" />
                {("complexName" in values) && ("floor" in values) && ("floorsAmmount" in values) && ("type" in values) && (
                    <>
                        <BaseDropDown className={s.inputSm} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Тип жилья"} onChange={() => { }} label="Тип жилья" />
                        <BaseDropDown className={s.inputSm} options={DROPDOWN_FILTER_OPTIONS} placeholder={"ЖК"} onChange={() => { }} label="ЖК" />
                        <CounterButtons initValue={1} onChange={() => { }} label="Этаж" />
                        <CounterButtons initValue={1} onChange={() => { }} label="Этажей в доме" />
                    </>
                )}

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Адрес"}>
                <BaseDropDown className={s.inputMd} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Страна"} onChange={() => { }} label="Страна" />
                <BaseDropDown className={s.inputMd} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Город"} onChange={() => { }} label="Город" />
                {("index" in values) && <BaseInput label="Индекс" className={s.inputXs} type="number" />}
                <BaseInput label="Адрес" className={s.inputX} type="text" />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Стоимость"}>
                <BaseInput label="Укажите стоимость в рублях" className={s.inputMd} type="number" icon={<Typography color="tertiary">₽</Typography>} />
            </InputsGroup>
        </ButtonPanel>
    )
}

export default AboutObjectTab