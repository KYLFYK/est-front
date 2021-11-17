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
import Typography from '../../../../shared/ui/Typography/Typography';
import { objectLib } from '../..';

interface Props {
    images: string[],
    price?: number,
    info: IOption[]
}

const GeneralInfo: React.FC<Props> = ({ images, price, info }) => {

    return (
        <div className={s.container}>
            <div className={s.sliderContainer}>
                <BaseSlider images={images} height={600} withArrows />
            </div>
            <div className={s.infoContainer}>
                {price && <Typography size="big" color="nude">{objectLib.formatNumbersToCurrency(price)} $</Typography>}
                {info.map((item, idx) => (
                    <div className={s.infoItem} key={idx}>
                        <Typography weight="medium" className={s.infoLabel}> {item.label} </Typography>
                        <Typography className={s.infoValue}> {item.value} </Typography>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default GeneralInfo