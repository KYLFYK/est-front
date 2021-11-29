import React from 'react';
import s from "./Place.module.scss";
import { BackIcon } from '../../../../icons/MapControlsIcons/PlaceIcons/BackIcon';
import { ImagePlace } from './Image/Image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Place = ({ places, placeClicked, setPlaceClicked, active, hidden, picSlider, setPicSlider }: any) => {
    
    let pics: any[] = [];
    if (places && placeClicked) {
        if (places.filter((p: any) => p.id === placeClicked).length > 0) {
            pics = places.filter((p: any) => p.id === placeClicked)[0].pics;
        } else if (places.filter((p: any) => p.object_id === placeClicked).length > 0) {
            if (places.filter((p: any) => p.object_id === placeClicked)[0].images) {
                places.filter((p: any) => p.object_id === placeClicked)[0].images.forEach((pp: any) => {
                    pics.push(pp.url)
                })
            } 
            if (places.filter((p: any) => p.object_id === placeClicked)[0].pics) {
                places.filter((p: any) => p.object_id === placeClicked)[0].pics.forEach((pp: any) => {
                    pics.push(pp)
                })
            } 
        } else {
            setPlaceClicked('');
        }
    }

    let styles = {};
    
    placeClicked ? styles = active : styles = hidden;
    let filtredPlace = places.filter((pl: any) => pl.id === placeClicked || pl.object_id === placeClicked)
    console.log(filtredPlace)
    return (
        <div className={!placeClicked ? s.container : s.containerActive}>
            <div className={s.content}>
                <div className={s.backbutton}>
                    <div className={s.backbuttonContainer}>
                        <button onClick={() => setPlaceClicked('')} className={s.button}>
                            <BackIcon />
                        </button>
                        <span className={s.backTitle}>Назад к категориям</span>
                    </div>
                    <div className={s.sliderCount}>{picSlider + 1}/{pics && pics.length}</div>
                </div>

                {filtredPlace.length === 1 && <div>
                    <div>
                        <Slider
                            lazyLoad='progressive'
                            slidesToShow={1}
                            className={s.slick}
                            dots={false}
                            arrows={false}
                            afterChange={(current) => setPicSlider(current)}
                        >
                            {pics && pics.map((p: string, i: number) => {
                                return <ImagePlace key={i} image={p} />
                            })}
                        </Slider>
                    </div>
                </div>}

                <div className={s.title}>
                    {filtredPlace[0] && filtredPlace[0].name}
                </div>

                <div className={s.desc}>
                    {filtredPlace[0] && filtredPlace[0].description}
                </div>
                {/*<Info place={filtredPlace}/>*/}
            </div>
        </div>
    )
};