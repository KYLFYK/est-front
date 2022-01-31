import React, {FC} from 'react';
import ArrayButton from '../../shared/ArrayButton/ArrayButton';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import EstateOffer from '../../shared/EstateOffer/estateOffer';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './bestOffers.module.scss'
import Typography from "../../shared/Typography/Typography";

type BestOffersType = {
    bestOffers:Array<{id:number,url:string,img:Array<string>,tags:Array<string>}>
    tagsButton:Array<string>
}

export const BestOffers :FC<BestOffersType> = ({bestOffers,tagsButton}) => {

    return (
        <div className={css.offers} >
            <HeadLine title={'Лучшие предложения'} >
                <div className={css.positionButton}>
                    <div className={css.buttonLine}>
                        {
                            tagsButton.map((name,index) => {
                                return <ArrayButton className={css.button} key={index} index={index} name={name} />
                            })
                        }
                    </div>
                    <BaseButton
                        type="secondary"
                        className={css.margin}
                    >
                        <Typography color={"accent"}>
                            Показать еще
                        </Typography>
                    </BaseButton>
                </div>

                <div className={css.offersPhoto}>
                    {
                        bestOffers.map(({id, img,tags,url})=>(
                            <EstateOffer
                                key={id}
                                url={url}
                                tags={tags}
                                img={img}
                            />
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};

