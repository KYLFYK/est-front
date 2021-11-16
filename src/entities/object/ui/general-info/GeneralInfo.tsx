import { Box } from '@mui/system';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import { SliderDocIcon } from '../../../../shared/icons/SliderDot/SliderDotIcon';
import { IOption } from '../../../../shared/lib/interfaces/general';
import s from './GeneralInfo.module.scss';
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaseSlider from '../../../../shared/ui/BaseSlider/BaseSlider';
const MOCK_ITMES = [
    { name: "TV", value: "Big big TV", icon: "tv", descr: "" },
    { name: "TV", value: "Big b Bigbig ig TV", icon: "tv", descr: "" },
    { name: "TV", value: "Big Big big Big big TV", icon: "tv", descr: "" },
]
const imgs = [{url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', id: 0}, {url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',id: 1}, {url: '213', id: 2}, {url: '32123', id: 4}]


interface Props {
    images: string[],
    price: string,
    info: IOption[]
}

const GeneralInfo: React.FC<Props> = ({ images, price, info }) => {

    return (
        <div className={s.container}>
            <div className={s.sliderContainer}>
                <BaseSlider images={images} height={600} withArrows/>
                {/* <Card choosedHouse={choosedHouse} /> */}
            </div>
        </div>
    )
};

export default GeneralInfo