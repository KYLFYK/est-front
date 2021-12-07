import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import Typography from "../../../../shared/Typography/Typography"
import { getInitialStateInfoTab, TInfoState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './HouseInfoTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}


const HouseInfoDetailsTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    const [values, setValues] = useState<TInfoState>()
    const { createObjectStore } = useStores()


    React.useEffect(() => {
        const initState = getInitialStateInfoTab(objectType, createObjectStore)
        setValues(initState)
    }, [objectType, createObjectStore])

    if (!values) return null
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Строительно-техническая экспертиза">
                <BaseDropDown className={s.dropdownSm} label="Тип дома" options={[]} placeholder="Тип дома" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Фундамент" options={[]} placeholder="Фундамент" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Кровля" options={[]} placeholder="Кровля" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Стены" options={[]} placeholder="Стены" onChange={() => { }} />
                {("technicalComment" in values) && (
                    <BaseInput type="text" classNameWrapper={classNames(s.fullWidth, s.commentInput)} label="Комментарий" />
                )}
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Инженерные коммуникации">
                <BaseDropDown className={s.dropdownSm} label="Водопровод" options={[]} placeholder="Водопровод" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Отопление" options={[]} placeholder="Отопление" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Канализация" options={[]} placeholder="Канализация" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Электричество" options={[]} placeholder="Электричество" onChange={() => { }} />
                {("vent" in values) && (
                    <BaseDropDown className={s.dropdownSm} label="Вентиляция" options={[]} placeholder="Вентиляция" onChange={() => { }} />
                )}
                <BaseDropDown className={s.dropdownSm} label="Интернет" options={[]} placeholder="Интернет" onChange={() => { }} />
                {("engineeringComment" in values) && (
                    <BaseInput type="text" classNameWrapper={classNames(s.fullWidth, s.commentInput)} label="Комментарий" />
                )}
                {(("parking" in values) && ("parkingPrice" in values)) && (
                    <>
                        <div className={s.divider} />
                        <InputsGroup title="Парковка">
                            <BaseDropDown className={s.dropdownSm} label="Парковка" options={[]} placeholder="Парковка" onChange={() => { }} />
                            <BaseInput type="number" classNameWrapper={s.dropdownSm} label="Стоимость места за час" icon={<Typography className={s.icon}>₽</Typography>} />

                        </InputsGroup>
                    </>
                )}

            </InputsGroup>
        </ButtonPanel>
    )
}

export default HouseInfoDetailsTab