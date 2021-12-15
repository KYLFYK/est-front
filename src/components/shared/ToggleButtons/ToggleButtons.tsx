import classNames from 'classnames'
import { IOption } from '../../../utils/interfaces/general'
import s from './ToggleButtons.module.scss'

interface Props {
    items: IOption[],
    activeValue?: string,
    onChange: (value: string) => void,
    classNameButton?: string,
    /**
     * С этим параметром нужно передавать activeValue в виде строки со значениями через запятую. (Array.prototype.join(","))
     */
    multiple?: boolean,
}

export const ToggleButtons: React.FC<Props> = ({ items, activeValue, classNameButton, multiple, onChange }) => {

    const checkIsActive = (value: string | number) => {
        return multiple ? activeValue?.split(',').includes(String(value)) : activeValue === value
    }

    return (
        <div className={s.wrapper}>

            {items.map((button, idx) => <span className={s.elemWrap} key={idx}>
                <button  className={classNames(
                    s.button, 
                    checkIsActive(button.value) && s.activeButton,
                    classNameButton,
                    {
                        [s.firstButton]: idx === 0 && items.length > 1,
                        [s.lastButton]: idx === items.length - 1 && items.length > 1,
                        [s.roundedButton]: items.length === 1
                    }
                     )} value={button.value} onClick={() => onChange(button.value as string)}> {button.label} </button>
                {idx !== items.length - 1 && !checkIsActive(button.value) && <div className={s.divider}></div>}
            </span>)}
        </div>
    )
}