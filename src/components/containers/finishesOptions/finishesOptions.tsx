import React, {FC} from 'react';
import HeadLine from "../../shared/HeadLine/HeadLine";
import Image from "next/image";
import {myLoader} from "../../../utils/image/image";
import Typography from "../../shared/Typography/Typography";
import css from './finishes.module.scss'

type FishingOptionsType={
    finishesCards:Array<{src:string, url:string,countryFishing:string }>
}

export const FinishesOptions :FC<FishingOptionsType>= ({finishesCards}) => {
    return (
        <HeadLine title={'Варианты отделки'} >
            <div className={css.containerFinishes}>
                {
                    finishesCards.map((finishes,index)=>(
                        <FinishingCard
                            key={index}
                            img={finishes.src}
                            url={finishes.url}
                            countryFishing={finishes.countryFishing}
                        />
                    ))
                }
            </div>

        </HeadLine>
    );
};

type FinishingCardType ={
    img:string
    url:string
    countryFishing:string
}

const FinishingCard :FC<FinishingCardType>= ({img,url,countryFishing}) =>{
    return(
        <div>
            <Image
                src={img}
                loader={e=>myLoader(e.src,e.width,e.quality)}
                width={430}
                height={300}
                className={css.imageStyle}
            />
            <div className={css.df}>
                <Typography weight={"medium"}>
                    {countryFishing}
                </Typography>
                {/*link ?? modal ??*/}
                <Typography weight={"medium"} color={"nude"} className={css.styleTypography} >
                    Смотреть галерею &gt;
                </Typography>
            </div>

        </div>
    )
}
