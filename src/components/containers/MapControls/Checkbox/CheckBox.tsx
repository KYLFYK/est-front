import React from 'react';
import Image from 'next/image';
import { OpenStreetIconsFactory } from '../../../../lib/mapIcons/map';
import { IOption } from './models/general';
import { ObjectTypes } from './models/objects';
import s from './check.module.scss';

interface Props {
    uniqueTypesList?: IOption[],
    pressed?: string[],
    handlePressed?: (category: string) => void,
}

export const CheckBox: React.FC<Props> = ({ uniqueTypesList, pressed, handlePressed }) => {
    const renderFilterLists = () => uniqueTypesList && uniqueTypesList.map((typeOption, index) => (
        <div key={index} className={s.elem}>
            <button onClick={() => handlePressed && handlePressed(typeOption.label)} className={`${s.elem} ${s.button}`}>
                <div className={s.buttonContent}>
                    {pressed && <Image width='50px' height='50px' src={OpenStreetIconsFactory(typeOption.value as ObjectTypes, pressed.indexOf(typeOption.label) >= 0, 'checkbox') as string} alt='icon' />}
                    <div className={s.buttonTitle}>{Object.values(ObjectTypes).includes(typeOption.label as ObjectTypes) ? typeOption.label : typeOption.label}</div>
                </div>
            </button>
        </div>
    ))

    return (
        <div className={s.list}>
            {renderFilterLists()}
        </div>
    )
}
