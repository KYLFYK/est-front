import React, {FC, useEffect, useRef, useState} from 'react';
import ArrayButton from '../../shared/ArrayButton/ArrayButton';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './bestOffers.module.scss'
import ObjectCard from "../Card";
import {mapData} from '../Maps/MapFinder/config';
import {useStoreMainPage} from "../../../mobx/mainPage/mainPage";
import {observer} from "mobx-react-lite";
import Slider from "react-slick";
import {IMAGES_SET} from "../Card/config";
import {AgentBlock} from "../AgentsContainer/AgentBlock/AgentBlock";
import CardBestOfferMobile from "../Card/CardBestOfferMobile";

type BestOffersType = {
    tagsButton: Array<string>
}

export const BestOffersMobile: FC<BestOffersType> = observer(({tagsButton}) => {

    const store = useStoreMainPage()

    useEffect(() => {
        store.fetchBestOffers(10, false, false, false, false, false)
    }, [store.fetchBestOffers])

    const mapDat: any = mapData[0]

    const [activeFilter, setActiveFilter] = useState<Array<boolean>>([false, false, false, false, false])

    const activeFilterActive = (tag: string) => {
        if (tag === "apartment") {
            activeFilter[4] = !activeFilter[4]
            setActiveFilter(activeFilter)
        }
        if (tag === "house") {
            activeFilter[3] = !activeFilter[3]
            setActiveFilter(activeFilter)
        }
        if (tag === "isComplex") {
            activeFilter[2] = !activeFilter[2]
            setActiveFilter(activeFilter)
        }
        if (tag === "isOld") {
            activeFilter[1] = !activeFilter[1]
            setActiveFilter(activeFilter)
        }
        if (tag === "isNew") {
            activeFilter[0] = !activeFilter[0]
            setActiveFilter(activeFilter)
        }
        store.fetchBestOffers(10, activeFilter[0], activeFilter[1], activeFilter[2], activeFilter[3], activeFilter[4])
    }

    return (
        <div className={css.offers}>
            <HeadLine title={'Лучшие предложения'}>
                <div className={css.positionButton}>
                    <div className={css.buttonLine}>
                        {
                            store.initialData.tagsButton.map((tags, index) => (
                                <ArrayButton
                                    key={index}
                                    onActiveTags={activeFilterActive}
                                    className={css.button}
                                    name={tags}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={css.block}>
                    {
                        store.initialData.bestOffers !== null && store.initialData.bestOffers.length > 0
                        && store.initialData.bestOffers.map((t: any, index) => (
                            <div key={index}>
                                <CardBestOfferMobile
                                    key={index}
                                    bestOffer={t}
                                    img={t.files[0].url}
                                />
                            </div>

                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
})

export default BestOffersMobile;