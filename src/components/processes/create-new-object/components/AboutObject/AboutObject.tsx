import React from "react"
import { DROPDOWN_FILTER_OPTIONS } from "../../../../containers/PlanningFilter/config"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import Typography from "../../../../shared/Typography/Typography"
import ButtonPanel from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './AboutObject.module.scss'

interface Props {
    onNextTab: () => void;
    onPrevTab: () => void;
}

const AboutObject: React.FC<Props> = ({ onNextTab, onPrevTab }) => {

    const handleNext = () => {
        console.log('')
        onNextTab()
    }

    const handlePrev = () => {
        console.log('prev')
        onPrevTab()
    }

    return (
        <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
            <InputsGroup title={"Объект"}>
                <BaseInput label="Придумайте название объекта" className={s.inputXl} type="text" />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Объект"}>
                <BaseDropDown className={s.inputMd} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Страна"} onChange={() => { }} label="Страна" />
                <BaseDropDown className={s.inputMd} options={DROPDOWN_FILTER_OPTIONS} placeholder={"Город"} onChange={() => { }} label="Город" />
                <BaseInput label="Индекс" className={s.inputSm} type="number" />
                <BaseInput label="Адрес" className={s.inputX} type="text" />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title={"Стоимость"}>
                <BaseInput label="Укажите стоимость в рублях" className={s.inputMd} type="number" icon={<Typography color="tertiary">₽</Typography>}/>
            </InputsGroup>
        </ButtonPanel>
    )
}

export default AboutObject