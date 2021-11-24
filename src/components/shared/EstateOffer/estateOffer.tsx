import React from 'react';
import css from './estateOffer.module.scss'
import BaseButton from "../BaseButton/BaseButtons";
import BaseSlider from "../BaseSlider/BaseSlider";
import Link from 'next/link'

type EstateOfferPropsType = {
    titleButtons: Array<string>
    img: Array<string>
    url:string
}

const EstateOffer: React.FC<EstateOfferPropsType> = ({titleButtons, img,url}) => {

    return (
        <div className={css.block}>
            <Link href={url}>
                <div>
                    <BaseSlider images={img} height={300}  />
                </div>
            </Link>
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