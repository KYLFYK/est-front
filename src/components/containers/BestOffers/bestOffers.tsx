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

type BestOffersType = {
    tagsButton: Array<string>
}

type ArrowType = {
    onClick: () => void
}

const SampleNextArrow: React.FC<ArrowType> = ({onClick}) => {
    return (
        <div
            style={{position: 'relative', right: "25px", top: "100px", cursor: 'pointer', height: '0px'}}
            onClick={onClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.332 10.0013C18.332 5.4013 14.5987 1.66797 9.9987 1.66797C5.3987 1.66797 1.66536 5.4013 1.66536 10.0013C1.66536 14.6013 5.3987 18.3346 9.9987 18.3346C14.5987 18.3346 18.332 14.6013 18.332 10.0013ZM8.33203 10.0013L11.6654 6.66797V13.3346L8.33203 10.0013Z"
                    fill="#1A4862"/>
            </svg>
        </div>
    )
}

const SamplePrevArrow: React.FC<ArrowType> = ({onClick}) => {
    return (
        <div
            style={{position: 'relative', left: "100%", bottom: "205px", cursor: 'pointer', height: '0px'}}
            onClick={onClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.66797 9.9987C1.66797 14.5987 5.4013 18.332 10.0013 18.332C14.6013 18.332 18.3346 14.5987 18.3346 9.9987C18.3346 5.3987 14.6013 1.66536 10.0013 1.66536C5.4013 1.66536 1.66797 5.3987 1.66797 9.9987ZM11.668 9.9987L8.33464 13.332V6.66536L11.668 9.9987Z"
                    fill="#1A4862"/>
            </svg>
        </div>
    )
}
// const gotoNext = () => {
//     //@ts-ignore
//     customeSlider.current.slickNext()
// }
// const gotoPrev = () => {
//     //@ts-ignore
//     customeSlider.current.slickPrev()
// }

// <SampleNextArrow  onClick={()=>gotoPrev()} />
// <SamplePrevArrow onClick={()=>gotoNext()}/>

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1430,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
            }
        },
        {
            breakpoint: 1125,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true
            }
        },
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true
            }
        }
    ],
    arrows: false,
}

export const BestOffers: FC<BestOffersType> = observer(({tagsButton}) => {

    const store = useStoreMainPage()
    const customeSlider = useRef()
    useEffect(() => {
        store.fetchBestOffers(10, false, false, false, false, false)
    }, [])

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
                <div style={{padding: '5px', marginTop: '20px'}}>
                    <Slider {...settings} >
                        {
                            store.initialData.bestOffers !== null && store.initialData.bestOffers.length > 0
                            && store.initialData.bestOffers.map((t: any, index) => (
                                <div key={index} style={{padding: '5px', marginTop: index > 1 ? "24px" : '0px'}}>
                                    <div>
                                        <ObjectCard
                                            key={index}
                                            route={t.type}
                                            typeObject={"new"}
                                            houseData={t}
                                            data={t}
                                        />
                                    </div>

                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </HeadLine>
        </div>
    );
})

