import React, {FC, useEffect, useState} from 'react';
import ArrayButton from '../../shared/ArrayButton/ArrayButton';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import EstateOffer from '../../shared/EstateOffer/estateOffer';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './bestOffers.module.scss'
import Typography from "../../shared/Typography/Typography";
import {mailPage} from "../../../api/mainPage/mainPage";
import {IMAGES_SET} from "../GeneralInfo/config";

type BestOffersType = {
    bestOffers:Array<{id:number,url:string,img:Array<string>,tags:Array<string>}>
    tagsButton:Array<string>
}

export const BestOffers :FC<BestOffersType> = ({bestOffers,tagsButton}) => {

    const [bestOffers1, setBestOffers]=useState([])

    useEffect(()=>{
        const bestObjects = async ()=>{
            const res=  await mailPage.bestObjects(3)
            setBestOffers(res)
        }
        bestObjects()
    },[])

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
                    {/*{*/}
                    {/*    bestOffers.map(({id, img,tags,url})=>(*/}
                    {/*        <EstateOffer*/}
                    {/*            key={id}*/}
                    {/*            url={url}*/}
                    {/*            tags={tags}*/}
                    {/*            img={img}*/}
                    {/*        />*/}
                    {/*    ))*/}
                    {/*}*/}
                    {
                        bestOffers1.map((t:any)=>(
                            <EstateOffer
                                key={t.id}
                                url={`${t.type}/${t.id}`}
                                tags={[]}
                                img={IMAGES_SET}
                            />
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};

