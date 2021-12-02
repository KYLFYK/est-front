import classNames from "classnames"
import React from "react"
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown"
import { BaseInput } from "../../../../shared/BaseInput/Input"
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons"
import Typography from "../../../../shared/Typography/Typography"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import { GENERAL_INFO_TAB_TOGGLE_OPTIONS } from "./config"
import s from './GeneralInfoObjectTab.module.scss'

interface Props extends ICreateObjectControls {

}

const GeneralInfoDataTab: React.FC<Props> = ({ onNextTab, onPrevTab }) => {
    const [values, setValues] = React.useState({
        floors: 3
    })

    const onChangeFloors = (value: number) => {
        setValues({...values, floors: value})
    }

    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title="Размеры объекта">
                <BaseInput
                    type="text"
                    label="Общая площадь"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />
                <BaseInput
                    type="text"
                    label="Площадь дома"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />
                <BaseInput
                    type="text"
                    label="Жилая площадь"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />
                <BaseInput
                    type="text"
                    label="Участок"
                    className={classNames(s.inputSm, s.largeIconSpace)}
                    classNameWrapper={s.extraSpace}
                    icon={<Typography className={s.iconColor}>соток</Typography>}
                />
                <CounterButtons className={s.extraSpace} label="Комнат в доме" initValue={5} onChange={() => { }} />
                <CounterButtons label="Изолированных входов" initValue={2} onChange={() => { }} />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Размеры объекта">
                <BaseInput
                    type="text"
                    label="Ванная комната"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />
                <BaseInput
                    type="text"
                    label="Кухня"
                    className={s.inputSm}
                    classNameWrapper={s.extraSpace}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />
                <BaseInput
                    type="text"
                    label="Вместимость"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м/м</Typography>}
                />

                <BaseDropDown
                    options={GENERAL_INFO_TAB_TOGGLE_OPTIONS}
                    onChange={() => { }}
                    placeholder="Гараж" label="Гараж"
                    className={s.inputSm}
                    
                />
                <BaseInput
                    type="text"
                    label="Площадь гаража"
                    className={s.inputSm}
                    classNameWrapper={s.extraSpace}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />

                <BaseDropDown
                    options={GENERAL_INFO_TAB_TOGGLE_OPTIONS}
                    onChange={() => { }}
                    placeholder="Бассейн" label="Бассейн"
                    className={s.inputSm}
                    
                />
                <BaseInput
                    type="text"
                    label="Площадь бассейна"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                />

            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Описание интерьера по этажам">
                <div className={s.extraSpace}>
                    <CounterButtons initValue={values.floors} onChange={onChangeFloors} label="Этажей в доме" />
                </div>
                <div className={s.floorInputs}>
                    {Array(values.floors).fill('').map((floor, idx) => (
                        <BaseInput key={idx} type="text" label={`${idx+1} этаж`}/>
                    ))}

                </div>
            </InputsGroup>
        </ButtonPanel>
    )
}

export default GeneralInfoDataTab