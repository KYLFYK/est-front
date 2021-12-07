import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons"
import { Checkbox } from "../../../../widget/Login/registration/checkbox/Checkbox"
import { getInitialStateInfoTab, TInfoState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './HouseInfoTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const HouseInfoInterierTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    const [values, setValues] = useState<TInfoState>()
    const { createObjectStore } = useStores()


    React.useEffect(() => {
        const initState = getInitialStateInfoTab(objectType, createObjectStore)
        setValues(initState)
    }, [objectType, createObjectStore])


    if (!values) return null
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Интерьер и экстерьер">
                <CounterButtons className={s.extraSpace} initValue={values.bedrooms} onChange={() => { }} label="Спален в доме" />
                <CounterButtons className={s.extraSpace} initValue={values.bathrooms} onChange={() => { }} label="Душевых в доме" />
                <CounterButtons className={s.extraSpace} initValue={values.lavatories} onChange={() => { }} label="Туалет" />
                <BaseDropDown className={classNames(s.dropdownSm, s.extraSpace)} options={[]} onChange={() => {}} placeholder="Сан. узел" label="Сан. узел"/> 
                <BaseDropDown className={s.dropdownSm} options={[]} onChange={() => {}} placeholder="Ремонт" label="Ремонт"/> 

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Мебель">
                House Interier <Checkbox>123 </Checkbox>
            </InputsGroup>
        </ButtonPanel>
    )
}

export default HouseInfoInterierTab