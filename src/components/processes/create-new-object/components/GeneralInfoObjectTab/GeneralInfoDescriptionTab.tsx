import React from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ICreateApartsGeneralInfo } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateApartmentStoreType"
import { ICreateHouseGeneralInfo } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType"
import { ICreateLandGeneralInfo } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType"
import { ICreateTownhouseGeneralInfo } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateTownhouseStoreType"
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
    const { createObjectStore } = useStores()

    React.useEffect(() => {
        const initState = getInitialStateGeneralInfoTab(objectType, createObjectStore)
        setDescription(initState?.description)
    }, [objectType, createObjectStore])

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