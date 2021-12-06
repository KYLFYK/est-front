import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea"
import { INFRASTRUCTURE_TAB_VIEW_OPTIONS } from "../../config"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './InfrastructureTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const InfrastructureTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Описание">
                <BaseTextarea label="Опишите особенности в инфраструктуре вашего объекта" className={s.textarea} />
            </InputsGroup>
            {objectType !== ObjectTypes.LAND && (
                <>
                    <div className={s.divider} />
                    <InputsGroup title="Вид из окон">
                        <BaseDropDown className={s.dropdown} options={INFRASTRUCTURE_TAB_VIEW_OPTIONS} placeholder="Выберите один или несколько" label="Выберите один или несколько" onChange={() => { }} />
                    </InputsGroup>
                </>
            )}
        </ButtonPanel>
    )
}

export default InfrastructureTab