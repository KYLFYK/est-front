import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './LegalPurity.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const LegalPurityDetails: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Данные из ЕГРН">
                <BaseInput
                    label="Адрес"
                    type="text"
                    classNameWrapper={s.fullWidth}
                />
                <BaseInput
                    label="Кадастровый номер"
                    type="text"
                    classNameWrapper={s.inputMd}
                />
                <BaseInput
                    label="Кадастровая стоимость"
                    type="text"
                    classNameWrapper={s.inputMd}
                />
                <BaseInput
                    label="Общая площадь"
                    type="text"
                    classNameWrapper={s.inputSm}
                />
                <BaseInput
                    label="Этажность"
                    type="text"
                    classNameWrapper={s.inputSm}
                />
            </InputsGroup>
        </ButtonPanel>
    )
}

export default LegalPurityDetails