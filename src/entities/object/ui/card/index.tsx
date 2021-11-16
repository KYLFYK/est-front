import { Box } from '@material-ui/core';
import Slider, { Settings } from 'react-slick'
import s from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Image from 'next/image'
import { SliderDocIcon } from '../../../../shared/icons/SliderDot/SliderDotIcon';
import { APIObject } from '../../../../shared/api';
import Link from 'next/link'
import placeholderImage from '../../assets/house.jpg'

interface Props {
    houseData: APIObject.types.IObjectEntry,
    isStorie?: boolean,
}

const TEMP_LINK = '/'
const MAX_SLIDERS_AMMOUNT = 7

const ObjectCard: React.FC<Props> = ({ houseData, isStorie }) => {
    const [selectedSlider, setSelectedSlide] = React.useState<number>(0)

    const settings: Settings = {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        dotsClass: s.dotsClass,
        customPaging: (idx) => <div> <SliderDocIcon className={s.sliderDot} isActive={idx === selectedSlider} /> </div>,
        beforeChange: (...currentAndNext) => setSelectedSlide(currentAndNext[1]),
    };
    const houseImages = houseData.images.length > MAX_SLIDERS_AMMOUNT ? houseData.images.slice(0, MAX_SLIDERS_AMMOUNT) : houseData.images
    const renderImages = houseImages.length ? (
        houseImages.map(({ id, url }) => (
            <Box className={s.imgContainer} key={id}>
                <Image src={url} className={s.image} alt={`Slider Screen №${id}`} />
            </Box>
        ))
    ) : (
        <Box className={s.imgContainer}>
            {isStorie ? <img src={placeholderImage} className={s.image} alt={`Slider Screen Placeholder`} /> :
                <Image src={placeholderImage} className={s.image} alt={`Slider Screen Placeholder`} />}
        </Box>
    )

    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <Slider {...settings}>
                    {renderImages}
                </Slider>

            </div>
            <Link href={TEMP_LINK}>
                <a className={s.content}>
                    <p className={s.title}>{houseData.name}</p>
                    <p className={s.subtitle}>
                        <span className={s.typeLabel}>Адрес:</span> {houseData.address}
                    </p>
                    <p className={s.subtitle}>
                        <span className={s.typeLabel}>Этаж:</span> {houseData.floor} / {houseData.total_floors}
                    </p>
                    <p className={s.price}>
                        {houseData.price} ₽
                    </p>
                </a>
            </Link>
        </div>
    )
}

export default ObjectCard
