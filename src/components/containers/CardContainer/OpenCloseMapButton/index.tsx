import React from 'react';
import s from './styles.module.scss';
import BaseButton from '../../../shared/BaseButton/BaseButtons';
import {ArrowIconRight} from '../../../../icons/Search&Crumbs/ArrowIconRight';
import {ArrowIconLeft} from '../../../../icons/Search&Crumbs/ArrowIconLeft';

interface Props {
    view: {
        filter: boolean,
        map: boolean,
        grid: boolean,
    }
    setView: (value: 'map' | 'grid' | 'filter') => void
}

export const OpenCloseMapButton: React.FC<Props> = ({view, setView}) => {

    return (
        <div className={view.map ? s.openWrapper : s.closeWrapper }>
            <BaseButton 
                onClick={() => view.map ? setView('grid') : setView('map')} 
                className={view.map ? s.openButton : s.closeButton} type="secondary"
            > 
                {view.map ? <ArrowIconLeft/> : <ArrowIconRight/>} 
            </BaseButton>
        </div>
    )
}