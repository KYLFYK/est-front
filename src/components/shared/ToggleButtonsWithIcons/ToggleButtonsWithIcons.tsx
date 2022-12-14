import BaseButton from '../BaseButton/BaseButtons'
import s from './ToggleButtons.module.scss'

interface Props {
    items: any,
    activeValue?: string,
    onChange?: (value: string) => void,
    classNameButton?: string,
    /**
     * С этим параметром нужно передавать activeValue в виде строки со значениями через запятую. (Array.prototype.join(","))
     */
    multiple?: boolean,
}

export const ToggleButtonsWithIcons: React.FC<Props> = ({ items, activeValue, classNameButton, multiple, onChange }) => {

    const checkIsActive = (value: string | number) => {
        return multiple ? activeValue?.split(',').includes(String(value)) : activeValue === value
    }

    return (
        <div className={s.wrapper}>

            {items.map((button: any, idx: number) => <span className={s.elemWrap} key={idx}>
                <BaseButton
                    type={'toggleButtonWithIcons'}
                    onClick={button.onclick}
                    isActive={false}
                    icon={button.icon}
                    iconActive={''}
                />
                {idx !== items.length - 1 && <div className={s.divider}></div>}
            </span>)}
        </div>
    )
}