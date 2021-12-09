import classNames from "classnames"
import { observer } from "mobx-react-lite"
import React from "react"
import { useState } from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons"
import Typography from "../../../../shared/Typography/Typography"
import { Checkbox } from "../../../../widget/Login/registration/checkbox/Checkbox"
import { INFO_TAB_HOUSE_FURNITURE, INFO_TAB_HOUSE_TYPE } from "../../config"
import { getInitialStateInfoTab, TInfoState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './HouseInfoTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: Exclude<ObjectTypes, ObjectTypes.LAND>
}

const HouseInfoInterierTab: React.FC<Props> = observer(({ onNextTab, onPrevTab, objectType }) => {
    const { createObjectStore } = useStores()
    const [values, setValues] = useState<TInfoState>(getInitialStateInfoTab(objectType, createObjectStore))
    const [isValid, setIsValid] = useState<boolean>(true)

    const isValidPlumbing = ("plumbing" in values && !!values.plumbing.length)
    const isValidRenovation = ("renovation" in values && !!values.renovation.length)
    const onChangeCheckbox = (value: string) => {
        const checkedValues = new Set(values.furnitureList)
        if (checkedValues.has(value))
            checkedValues.delete(value)
        else
            checkedValues.add(value)

        setValues({ ...values, furnitureList: Array.from(checkedValues) })
    }

    const onChangeCounter = (value: number, valueField: keyof TInfoState) => {
        setValues({ ...values, [valueField]: value })
    }
    const onChangeDropDown = (value: string, valueField: keyof TInfoState) => setValues({ ...values, [valueField]: value })

    const handleNextTab = () => {
        const isValidInputs = (isValidPlumbing && isValidRenovation)
        if (isValidInputs) {
            createObjectStore.saveHouseInfoTab(values, objectType)
            onNextTab && onNextTab()
        }
        else
            setIsValid(false)
    }

    return (
        <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Интерьер и экстерьер">
                <CounterButtons
                    className={s.extraSpace}
                    initValue={values.bedrooms}
                    onChange={(value) => onChangeCounter(value, 'bedrooms')}
                    label="Спален в доме"
                />
                <CounterButtons
                    className={s.extraSpace}
                    initValue={values.bathrooms}
                    onChange={(value) => onChangeCounter(value, 'bathrooms')}
                    label="Душевых в доме"
                />
                <CounterButtons
                    className={s.extraSpace}
                    initValue={values.lavatories}
                    onChange={(value) => onChangeCounter(value, 'lavatories')}
                    label="Туалет"
                />
                <BaseDropDown
                    value={values.plumbing}
                    className={classNames(s.dropdownSm, s.extraSpace)}
                    options={INFO_TAB_HOUSE_TYPE}
                    onChange={(value) => onChangeDropDown(value, 'plumbing')}
                    placeholder="Сан. узел"
                    label="Сан. узел"
                    isError={!isValid && !isValidPlumbing}
                />
                <BaseDropDown
                    className={s.dropdownSm}
                    value={values.renovation}
                    options={INFO_TAB_HOUSE_TYPE}
                    onChange={(value) => onChangeDropDown(value, 'renovation')}
                    placeholder="Ремонт"
                    label="Ремонт"
                    isError={!isValid && !isValidRenovation}
                />

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Мебель">
                {INFO_TAB_HOUSE_FURNITURE.map((item) => (
                    <Checkbox
                        key={item.value}
                        value={String(item.value)}
                        className={s.checkbox}
                        isActive={new Set(values.furnitureList).has(String(item.value))}
                        onChange={onChangeCheckbox}>
                        <Typography>{item.label}</Typography>
                    </Checkbox>
                ))}
            </InputsGroup>
        </ButtonPanel>
    )
});

export default HouseInfoInterierTab