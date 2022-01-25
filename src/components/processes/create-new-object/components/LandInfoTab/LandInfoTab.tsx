import { observer } from "mobx-react-lite"
import React from "react"
import { useStores } from "../../../../../hooks/useStores"
import { ICreateLandInfoTab } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import {
    INFO_TAB_HEATING_TYPE,
    INFO_TAB_HOUSE_TYPE,
    INFO_TAB_SEWAGE_SYSTEM_TYPE,
    INFO_TAB_WATER_SUPPLY_TYPE
} from "../../config"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './LandInfoTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes.LAND
}


const LandInfoTab: React.FC<Props> = observer(({ onNextTab, onPrevTab, objectType }) => {

    const { createObjectStore } = useStores()
    const [values, setValues] = React.useState<ICreateLandInfoTab>(createObjectStore.land.info)
    const [isValid, setIsValid] = React.useState<boolean>(true)

    const isValidWaterPipe = ("waterPipe" in values && !!values.waterPipe.length)
    const isValidHeating = ("heating" in values && !!values.heating.length)
    const isValidSewerage = ("sewerage" in values && !!values.sewerage.length)
    const isValidBuilding = ("buildings" in values && !!values.buildings.length)


    const onChangeDropDown = (value: string, valueField: keyof ICreateLandInfoTab) => setValues({ ...values, [valueField]: value })

    const handleNextTab = () => {
        const isValidInputs = (isValidWaterPipe && isValidHeating && isValidSewerage && isValidBuilding)
        if (isValidInputs) {
            createObjectStore.saveLandInfoTab(values)
            onNextTab && onNextTab()
        }
        else {
            setIsValid(false)
        }
    }
    return (
        <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Инженерные коммуникации">
                <BaseDropDown
                    value={values.waterPipe}
                    className={s.dropdownSm}
                    label="Водопровод"
                    options={INFO_TAB_WATER_SUPPLY_TYPE}
                    placeholder="Водопровод"
                    onChange={(value) => onChangeDropDown(value, 'waterPipe')}
                    isError={!isValid && !isValidWaterPipe}
                />
                <BaseDropDown
                    value={values.heating}
                    className={s.dropdownSm}
                    label="Отопление"
                    options={INFO_TAB_HEATING_TYPE}
                    placeholder="Отопление"
                    onChange={(value) => onChangeDropDown(value, 'heating')}
                    isError={!isValid && !isValidHeating}
                />
                <BaseDropDown
                    value={values.sewerage}
                    className={s.dropdownSm}
                    label="Канализация"
                    options={INFO_TAB_SEWAGE_SYSTEM_TYPE}
                    placeholder="Канализация"
                    onChange={(value) => onChangeDropDown(value, 'sewerage')}
                    isError={!isValid && !isValidSewerage}
                />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Строения">
                <BaseDropDown
                    value={values.buildings}
                    className={s.dropdownMd}
                    label="Выберите одно или несколько"
                    options={INFO_TAB_HOUSE_TYPE}
                    placeholder="Выберите одно или несколько"
                    onChange={(value) => onChangeDropDown(value, 'buildings')}
                    isError={!isValid && !isValidBuilding}
                />
            </InputsGroup>
        </ButtonPanel>
    )
})

export default LandInfoTab