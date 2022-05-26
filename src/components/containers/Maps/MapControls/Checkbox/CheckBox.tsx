import React from 'react';
import Image from 'next/image';
import { OpenStreetIconsFactory } from '../../../../../lib/mapIcons/map';
import { IOption } from './models/general';
import { ObjectTypes } from './models/objects';
import Typography from '../../../../shared/Typography/Typography';
import s from './check.module.scss';
import {FILTER_HOUSE_TYPES} from '../../../Filter/config';

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
                    {pressed && <Image loader={() => OpenStreetIconsFactory(typeOption.value as ObjectTypes, pressed.indexOf(typeOption.label) >= 0, 'checkbox') as string} 
                                    unoptimized
                                    src={OpenStreetIconsFactory(typeOption.value as ObjectTypes, pressed.indexOf(typeOption.label) >= 0, 'checkbox') as string}
                                    width='50px' height='50px' alt='icon' 
                                />
                    }
                    <div className={s.buttonTitle}>
                        <Typography>
                            {Object.values(ObjectTypes).includes(typeOption.label as ObjectTypes) 
                            ? FILTER_HOUSE_TYPES.filter((s: any) => typeOption.label === s.value)[0].label 
                            : typeOption.label}
                        </Typography>
                    </div>
                </div>
            </button>
        </div>
    ))
    
    return (
        <div className={s.container}>
            <Typography className={s.title} color={'accent'} weight={'bold'}>Категории</Typography>  
            <div className={s.list}>
                {renderFilterLists()}
            </div>
        </div>
    )
}
