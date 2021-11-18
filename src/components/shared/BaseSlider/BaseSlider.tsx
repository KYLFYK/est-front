import React from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import s from './BaseSlider.module.scss'
import { Box } from "@material-ui/core";
import placeholderImage from './assets/house.jpg'
import BaseButton from "../BaseButton/BaseButtons";
import { SliderDocIcon } from "../../../icons/SliderDot/SliderDotIcon";
import FavoriteIcon from "../../../icons/Favorite/Favorite";

interface Props {
    images: string[],
    height: number,
    withArrows?: boolean
    withFavorite?: boolean,
    onClickFavorite?: () => void
}

const BaseSlider: React.FC<Props> = ({ images, height, withArrows, withFavorite, onClickFavorite }) => {
    const [selectedSlider, setSelectedSlide] = React.useState<number>(0)

    const settings: Settings = {
        slidesToShow: 1,
        arrows: withArrows,
        dots: true,
        dotsClass: s.dotsClass,
        customPaging: (idx) => <div> <SliderDocIcon className={s.sliderDot} isActive={idx === selectedSlider} /> </div>,
        beforeChange: (...currentAndNext) => setSelectedSlide(currentAndNext[1]),
    };

    const renderImages = images.length ? (
        images.map((i) => (
            <Box className={s.imgContainer} key={i}>
                <div style={{ height }}>
                    <Image unoptimized src={i} className={s.image} alt={`Slider Screen`} layout="fill" loader={() => i} />
                </div>
            </Box>
        ))
    ) : (
        <Box className={s.imgContainer} style={{ height }}>
            <div style={{ height }}>
                <Image unoptimized src={placeholderImage} className={s.image} alt={`Slider Screen Placeholder`} layout="fill" />
            </div>
        </Box>
    )

    return (
        <div className={s.sliderWrapper}>
            {(!!withFavorite && !!onClickFavorite && !!images.length) &&
                <BaseButton type={'secondary'} icon={<FavoriteIcon />} className={s.favorite} onClick={onClickFavorite} />}
            <Slider {...settings} className={s.root}>
                {renderImages}
            </Slider>
        </div>
    )
}

export default BaseSlider