import React from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import s from './BaseSlider.module.scss'
import { SliderDocIcon } from "../../icons/SliderDot/SliderDotIcon";
import { Box } from "@material-ui/core";
import placeholderImage from './assets/house.jpg'

interface Props {
    images: string[],
    height: number,
    withArrows?: boolean
}

const BaseSlider: React.FC<Props> = ({ images, height, withArrows }) => {
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
                    <Image src={i} className={s.image} alt={`Slider Screen`} layout="fill" loader={() => i} />
                </div>
            </Box>
        ))
    ) : (
        <Box className={s.imgContainer} style={{ height }}>
            <div style={{ height }}>
                <Image src={placeholderImage} className={s.image} alt={`Slider Screen Placeholder`} />
            </div>
        </Box>
    )

    return (
        <Slider {...settings} className={s.root}>
            {renderImages}
        </Slider>
    )
}

export default BaseSlider