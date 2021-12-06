import classNames from 'classnames'
import { IOption } from '../../../utils/interfaces/general'
import BaseButton from '../BaseButton/BaseButtons'
import FavoriteIcon from '../../../icons/Favorite/Favorite'
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

            {items.map((button: any, idx: number) => <>
                <BaseButton 
                    type={'toggleButtonWithIcons'}
                    onClick={button.onclick}
                    isActive={false}
                    children={''}
                    icon={button.icon}
                    iconActive={''}
                />
                {idx !== items.length - 1 && <div className={s.divider}></div>}
            </>)}
        </div>
    )
}