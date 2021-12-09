import React from "react"
import { FoundersTypes, ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './LegalPurity.module.scss'
import BaseDatePicker from "../../../../shared/BaseDatePicker/BaseDatePicker"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { LEGAL_PURITY_TAB_OWNER_TYPES } from "../../config"
interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const LegalPurityFounders: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Текущие владельцы">
                <BaseDropDown
                    onChange={() => { }}
                    options={LEGAL_PURITY_TAB_OWNER_TYPES}
                    label="Тип собственника"
                    placeholder="Тип собственника"
                    className={s.inputMd}
                />
                <BaseInput
                    label="Собственник"
                    type="text"
                    classNameWrapper={s.inputMd}
                />
                <BaseInput
                    label="Кадастровый номер"
                    type="text"
                    classNameWrapper={s.inputMd}
                />

                <BaseDatePicker label="Период владения" />

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Предыдущие владельцы">
                <BaseDropDown
                    onChange={() => { }}
                    value={FoundersTypes.PAIR}
                    options={LEGAL_PURITY_TAB_OWNER_TYPES}
                    label="Тип собственника"
                    placeholder="Тип собственника"
                    className={s.inputMd}
                />
                <BaseInput
                    label="Собственник"
                    type="text"
                    classNameWrapper={s.inputMd}
                />
                <BaseInput
                    label="Кадастровый номер"
                    type="text"
                    classNameWrapper={s.inputMd}
                />

                <BaseDatePicker label="Период владения" />

            </InputsGroup>
        </ButtonPanel>
    )
}

export default LegalPurityFounders