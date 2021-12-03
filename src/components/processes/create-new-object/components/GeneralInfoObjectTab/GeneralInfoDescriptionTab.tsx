import React from "react"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea"
import { getInitialStateGeneralInfoTab } from "../../lib"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './GeneralInfoObjectTab.module.scss'


interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const GeneralInfoDescriptionTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    const [description, setDescription] = React.useState<string>()

    React.useEffect(() => {
        const initState = getInitialStateGeneralInfoTab(objectType)
        setDescription(initState?.description)
    }, [objectType])

    const onChangeDescription = (e: React.ChangeEvent & { target: HTMLTextAreaElement }) => {
        setDescription(e.target.value)
    }

    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title={"Описание"}>
                <BaseTextarea className={s.textarea} label="Опишите сильные стороны вашего объекта" value={description} onChange={onChangeDescription} />
            </InputsGroup>
        </ButtonPanel>
    )
}

export default GeneralInfoDescriptionTab