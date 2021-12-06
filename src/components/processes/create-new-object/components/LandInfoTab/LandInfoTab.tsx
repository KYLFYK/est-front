import { Divider } from "@material-ui/core"
import React from "react"
import { ICreateLandInfoTab } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './LandInfoTab.module.scss'

interface Props extends ICreateObjectControls {
}


const LandInfoTab: React.FC<Props> = ({ onNextTab, onPrevTab }) => {
    const [values, setValues] = React.useState<ICreateLandInfoTab>()

    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Инженерные коммуникации">
                <BaseDropDown className={s.dropdownSm} label="Водопровод" options={[]} placeholder="Водопровод" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Отопление" options={[]} placeholder="Отопление" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Канализация" options={[]} placeholder="Канализация" onChange={() => { }} />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Строения">
                <BaseDropDown className={s.dropdownMd} label="Выберите одно или несколько" options={[]} placeholder="Выберите одно или несколько" onChange={() => { }} />
            </InputsGroup>
        </ButtonPanel>
    )
}

export default LandInfoTab