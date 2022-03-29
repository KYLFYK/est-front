import classNames from 'classnames'
import { IOption } from '../../../utils/interfaces/general'
import s from './ToggleButtons.module.scss'
import Typography from '../Typography/Typography'

interface Props {
    title?: string,
    items: IOption[],
    activeValue?: string,
    onChange: (value: string) => void,
    classNameButton?: string,
    /**
     * С этим параметром нужно передавать activeValue в виде строки со значениями через запятую. (Array.prototype.join(","))
     */
    multiple?: boolean,
    className?:string
}

export const ToggleButtons: React.FC<Props> = ({title, items, activeValue, classNameButton, multiple,className, onChange }) => {

    const checkIsActive = (value: string | number) => {
        return multiple ? activeValue?.split(',').includes(String(value)) : activeValue === value
    }

    return (
        <div className={s.wrapper}>
            {title && <Typography className={s.title}>комнат:</Typography>}
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
                     )} value={button.value} onClick={() => onChange(button.value as string)}> <div className={ classNames(checkIsActive(button.value) ? s.color : s.colorPlus,className)}>{button.label}</div>  </button>
                { idx !== items.length - 1 &&<div className={s.divider}></div>}

                {/*{idx !== items.length - 1 && !checkIsActive(button.value) && <div className={s.divider}></div>}*/}

            </span>)}
        </div>
    )
}