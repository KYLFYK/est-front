import React from 'react';
import css from './estateOffer.module.scss'
import BaseButton from "../BaseButton/BaseButtons";


type EstateOfferPropsType = {
    title: string
    title1: string
    img: string
}

const EstateOffer: React.FC<EstateOfferPropsType> = ({title, title1, img}) => {

    return (
        <div className={css.block}>
            <div>
                <img className={css.img} src={img} alt="img"/>
            </div>
            <div className={css.buttonBlock}>
                <BaseButton type="secondary" className={css.positionButton}>{title}</BaseButton>
                <BaseButton type="secondary" className={css.positionButton}>{title1}</BaseButton>
            </div>
        </div>
    );
};

export default EstateOffer;