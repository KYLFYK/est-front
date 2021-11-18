import React from 'react';
import css from './estateOffer.module.scss'
import BaseButton from "../BaseButton/BaseButtons";
import BaseSlider from "../BaseSlider/BaseSlider";


type EstateOfferPropsType = {
    titleButtons: Array<string>
    img: Array<string>
}

const EstateOffer: React.FC<EstateOfferPropsType> = ({titleButtons, img}) => {

    return (
        <div className={css.block}>
            <div>
                <BaseSlider images={img} height={300}  />
            </div>
            <div className={css.buttonBlock}>
                {
                    titleButtons.map(t=>(
                        <BaseButton key={t} type="secondary" className={css.positionButton}>{t}</BaseButton>
                    ))
                }
            </div>
        </div>
    );
};

export default EstateOffer;