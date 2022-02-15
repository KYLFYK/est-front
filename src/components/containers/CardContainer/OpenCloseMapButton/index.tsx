import React from 'react';
import s from './styles.module.scss';
import BaseButton from '../../../shared/BaseButton/BaseButtons';
import {ArrowIconRight} from '../../../../icons/Search&Crumbs/ArrowIconRight';
import {ArrowIconLeft} from '../../../../icons/Search&Crumbs/ArrowIconLeft';

interface Props {
    view: string
    setView: any
}

export const OpenCloseMapButton: React.FC<Props> = ({view, setView}) => {

    return (
        <div className={view==='mapView' ? s.openWrapper : s.closeWrapper}>
            <BaseButton 
                onClick={() => view==='mapView' ? setView('gridView') : setView('mapView')} 
                className={view==='mapView' ? s.openButton : s.closeButton} type="secondary"
            > 
                {view==='mapView' ? <ArrowIconLeft/> : <ArrowIconRight/>} 
            </BaseButton>
        </div>
    )
}