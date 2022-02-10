import React, {FC, useEffect} from 'react';
import ArrayButton from '../../shared/ArrayButton/ArrayButton';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './bestOffers.module.scss'
import Typography from "../../shared/Typography/Typography";
import ObjectCard from "../Card";
import { mapData } from '../Maps/MapFinder/config';
import {useStoreMainPage} from "../../../mobx/mainPage/mainPage";
import {observer} from "mobx-react-lite";

type BestOffersType = {
    tagsButton:Array<string>
}

export const BestOffers :FC<BestOffersType> = observer(({tagsButton}) => {

    const store = useStoreMainPage()

    useEffect(()=>{
        store.fetchBestOffers()
    },[])

    const mapDat:any = mapData[0]

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
                        store.initialData.bestOffers && store.initialData.bestOffers.map((t:any)=>(
                            <div key={t.id} style={{padding:'5px'}}>
                                <ObjectCard
                                    route={t.type}
                                    typeObject={"new"}
                                    houseData={mapDat}
                                    data={t}
                                />
                            </div>
                        ))
                    }
                    {/*    OLD - BEST OFFERS*/}

                    {/*{*/}
                    {/*    store.initialData.bestOffers && store.initialData.bestOffers.map((t:any)=>(*/}
                    {/*        <EstateOffer*/}
                    {/*            key={t.id}*/}
                    {/*            url={`${t.type}/${t.id}`}*/}
                    {/*            tags={[]}*/}
                    {/*            img={IMAGES_SET}*/}
                    {/*        />*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </HeadLine>
        </div>
    );
})

