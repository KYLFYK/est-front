import classNames from "classnames"
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './HouseInfoTab.module.scss'

interface Props extends ICreateObjectControls {
    objectType: ObjectTypes
}

const HouseInfoDetailsTab: React.FC<Props> = ({ onNextTab, onPrevTab, objectType }) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Строительно-техническая экспертиза">
                <BaseDropDown className={s.dropdownSm} label="Тип дома" options={[]} placeholder="Тип дома" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Фундамент" options={[]} placeholder="Фундамент" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Кровля" options={[]} placeholder="Кровля" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Стены" options={[]} placeholder="Стены" onChange={() => { }} />
                <BaseInput type="text" classNameWrapper={classNames(s.fullWidth, s.commentInput)} label="Комментарий" />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Инженерные коммуникации">
                <BaseDropDown className={s.dropdownSm} label="Водопровод" options={[]} placeholder="Водопровод" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Отопление" options={[]} placeholder="Отопление" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Канализация" options={[]} placeholder="Канализация" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Электричество" options={[]} placeholder="Электричество" onChange={() => { }} />
                <BaseDropDown className={s.dropdownSm} label="Вентиляция" options={[]} placeholder="Вентиляция" onChange={() => { }} />
                <BaseInput type="text" classNameWrapper={classNames(s.fullWidth, s.commentInput)} label="Комментарий" />
            </InputsGroup>
        </ButtonPanel>
    )
}

export default HouseInfoDetailsTab