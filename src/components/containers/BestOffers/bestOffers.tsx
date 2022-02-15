import React, {FC, useEffect, useState} from 'react';
import ArrayButton from '../../shared/ArrayButton/ArrayButton';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './bestOffers.module.scss'
import Typography from "../../shared/Typography/Typography";
import ObjectCard from "../Card";
import {mapData} from '../Maps/MapFinder/config';
import {useStoreMainPage} from "../../../mobx/mainPage/mainPage";
import {observer} from "mobx-react-lite";
import {Tab, Tabs} from '@material-ui/core';
import s from "../../shared/BaseSlider/BaseSlider.module.scss";
import Slider from "react-slick";

type BestOffersType = {
    tagsButton: Array<string>
}

type ArrowType = {
    onClick: () => void
}

const SampleNextArrow: React.FC<ArrowType> = ({onClick}) => {
    return (
        <div
            style={{position:'relative',right:"25px",top:"100px",cursor:'pointer',height:'0px'}} onClick={onClick}>
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
            style={{position:'relative',left:"100%",bottom:"205px",cursor:'pointer',height:'0px'}} onClick={onClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.66797 9.9987C1.66797 14.5987 5.4013 18.332 10.0013 18.332C14.6013 18.332 18.3346 14.5987 18.3346 9.9987C18.3346 5.3987 14.6013 1.66536 10.0013 1.66536C5.4013 1.66536 1.66797 5.3987 1.66797 9.9987ZM11.668 9.9987L8.33464 13.332V6.66536L11.668 9.9987Z"
                    fill="#1A4862"/>
            </svg>
        </div>
    )
}

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    prevArrow: <SampleNextArrow onClick={() => console.log('hello')}/>,
    nextArrow: <SamplePrevArrow onClick={() => console.log('hello')}/>,
}


export const BestOffers: FC<BestOffersType> = observer(({tagsButton}) => {

    const store = useStoreMainPage()

    useEffect(() => {
        store.fetchBestOffers()
    }, [])

    const mapDat: any = mapData[0]

    const [activeFilter, setActiveFilter] = useState<Array<string>>([])

    const activeFilterActive = (tag: string) => {
        let res: Array<any> = []
        if (activeFilter.length === 0) {
            activeFilter.push(tag)
            res = activeFilter
        } else {
            const act = activeFilter.some(f => f === tag)
            if (act) {
                res = activeFilter.filter(f => f !== tag)
            } else {
                let opt = [...activeFilter]
                opt.push(tag)
                res = opt
            }
        }
        setActiveFilter(res)
        store.filterBestOffer(res)
    }

    return (
        <div className={css.offers}>
            <HeadLine title={'Лучшие предложения'}>
                <div className={css.positionButton}>
                    <div className={css.buttonLine}>
                        {/*{*/}
                        {/*    tagsButton.map((name,index) => {*/}
                        {/*        return <ArrayButton onActiveTags={(tags)=>activeFilterActive(tags)} className={css.button} key={index} index={index} name={name} />*/}
                        {/*    })*/}
                        {/*} */}
                        {
                            store.initialData.tagsButton.map((name, index) => {
                                return <ArrayButton onActiveTags={(tags) => activeFilterActive(tags)}
                                                    className={css.button} key={index} index={index} name={name}/>
                            })
                        }
                    </div>
                    {/*<BaseButton*/}
                    {/*    type="secondary"*/}
                    {/*    className={css.margin}*/}
                    {/*>*/}
                    {/*    <Typography color={"accent"}>*/}
                    {/*        Показать еще*/}
                    {/*    </Typography>*/}
                    {/*</BaseButton>*/}
                </div>

                <div style={{padding: '5px',marginTop:'20px'}}>
                    <Slider {...settings}  >
                        {
                            store.initialData.bestOffersFilter.length > 0
                                ? store.initialData.bestOffersFilter.map((t: any, index) => (
                                    <div key={index} style={{padding: '5px',marginTop:index > 1? "24px":'0px'}}>
                                        <ObjectCard
                                            route={t.type}
                                            typeObject={"new"}
                                            houseData={mapDat}
                                            data={t}
                                        />
                                    </div>
                                ))
                                : store.initialData.bestOffers
                                && store.initialData.bestOffers.map((t: any, index) => (
                                    <div key={index} style={{padding: '5px',marginTop:index > 1? "24px":'0px'}}>
                                        <ObjectCard
                                            route={t.type}
                                            typeObject={"new"}
                                            houseData={mapDat}
                                            data={t}
                                        />
                                    </div>
                                ))
                        }
                    </Slider>
                </div>


                {/*<div className={css.offersPhoto}>*/}
                {/*<div >*/}

                    {/*{*/}
                    {/*    store.initialData.bestOffersFilter.length > 0*/}
                    {/*        ? store.initialData.bestOffersFilter.map((t: any, index) => (*/}
                    {/*            <div key={index} style={{padding: '5px'}}>*/}
                    {/*                <ObjectCard*/}
                    {/*                    route={t.type}*/}
                    {/*                    typeObject={"new"}*/}
                    {/*                    houseData={mapDat}*/}
                    {/*                    data={t}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        ))*/}
                    {/*        : store.initialData.bestOffers*/}
                    {/*        && store.initialData.bestOffers.map((t: any, index) => (*/}
                    {/*            <div key={index} style={{padding: '5px'}}>*/}
                    {/*                <ObjectCard*/}
                    {/*                    route={t.type}*/}
                    {/*                    typeObject={"new"}*/}
                    {/*                    houseData={mapDat}*/}
                    {/*                    data={t}*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        ))*/}
                    {/*}*/}

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
                {/*</div>*/}
            </HeadLine>
        </div>
    );
})

