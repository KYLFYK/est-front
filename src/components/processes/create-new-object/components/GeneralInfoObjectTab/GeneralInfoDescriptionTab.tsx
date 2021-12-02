import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './GeneralInfoObjectTab.module.scss'


interface Props extends ICreateObjectControls {
    
}

const GeneralInfoDescriptionTab: React.FC<Props> = ({onNextTab, onPrevTab}) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title={"Описание"}>

                <BaseTextarea className={s.textarea} label="Опишите сильные стороны вашего объекта"/>
            </InputsGroup>
        </ButtonPanel>
    )
}

export default GeneralInfoDescriptionTab