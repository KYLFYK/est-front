import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea"
import { INFRASTRUCTURE_TAB_VIEW_OPTIONS } from "../../config"
import { getInitialStateInfrastructureTab, isValidInputsInfrastructureTab, TInfrastructureState } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './InfrastructureTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const InfrastructureTab: React.FC<Props> = observer(({ onNextTab, onPrevTab, objectType }) => {
    const { createObjectStore } = useStores()
    const [values, setValues] = useState<TInfrastructureState>(getInitialStateInfrastructureTab(objectType, createObjectStore))
    const [isValid, setIsValid] = useState<boolean>(true)


    const isValidDescription = ("description" in values && !!values.description.length)
    const isValidView = ("view" in values && !!values.view.length)

    const onChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues({ ...values, description: event.target.value })
    }

    const onChangeView = (value: string) => {
        setValues({ ...values, view: value })
    }


    const handleNextTab = () => {
        const isValidInputs = isValidInputsInfrastructureTab(objectType, isValidDescription, isValidView)
        if (isValidInputs) {
            createObjectStore.saveInfrastructureTab(values, objectType)
            onNextTab && onNextTab()
        }
        else
            setIsValid(false)
    }

    return (
        <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Описание">
                <BaseTextarea
                    value={values.description}
                    onChange={onChangeDescription}
                    label="Опишите особенности в инфраструктуре вашего объекта"
                    className={s.textarea}
                    isError={!isValid && !isValidDescription}
                />
            </InputsGroup>
            {('view' in values) && (
                <>
                    <div className={s.divider} />
                    <InputsGroup title="Вид из окон">
                        <BaseDropDown
                            value={values.view}
                            className={s.dropdown}
                            options={INFRASTRUCTURE_TAB_VIEW_OPTIONS}
                            placeholder="Выберите один или несколько"
                            label="Выберите один или несколько"
                            onChange={onChangeView}
                            isError={!isValidView && !isValid}
                        />
                    </InputsGroup>
                </>
            )}
        </ButtonPanel>
    )
})

export default InfrastructureTab