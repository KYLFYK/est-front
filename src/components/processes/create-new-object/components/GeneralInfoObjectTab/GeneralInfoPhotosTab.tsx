import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './GeneralInfoObjectTab.module.scss'


interface Props extends ICreateObjectControls {
    
}

const GeneralInfoPhotosTab: React.FC<Props> = ({onNextTab, onPrevTab}) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title={"Фотографии объекта"}>
                <div className={s.dashedWrapper}>

                </div>
            </InputsGroup>
        </ButtonPanel>
    )
}

export default GeneralInfoPhotosTab