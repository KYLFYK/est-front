import React from 'react';
import s from './GeneralInfo.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IOption } from '../../../utils/interfaces/general';
import BaseSlider from '../../shared/BaseSlider/BaseSlider';
import Typography from '../../shared/Typography/Typography';
import { formatNumbersToCurrency } from '../../../utils/general';
import {observer} from "mobx-react-lite";
import {IMAGES_SET} from './config';

interface Props {
    images: string[],
    price?: number,
    info: IOption[]
}

const GeneralInfo: React.FC<Props> = observer(({ images, price, info }) => {

    const imagesUrl = images.length === 0 ? IMAGES_SET : images.map((i: any) => i.url.includes('public') ? IMAGES_SET[0] : i.url)

    return (
        <div className={s.container}>
            <div className={s.sliderContainer}>
                <BaseSlider
                    images={imagesUrl}
                    height={600} withArrows withFavorite={typeof window !== "undefined" && localStorage.getItem("roleEstatum") ? true : false} onClickFavorite={() => {}}/>
            </div>
            <div className={s.infoContainer}>
                {price && <Typography size="big" color="nude">{formatNumbersToCurrency(price)} ₽</Typography>}
                {info.map((item, idx) => (
                    <div className={s.infoItem} key={idx}>
                        {
                            item.value !== '' && item.value !== null &&
                                <>
                                    <Typography
                                        color={item.value === '' ? 'tertiary' : 'default'}
                                        weight="medium" className={idx > 0 && item.value === '' ? s.infoTitle : s.infoLabel}
                                    >
                                        {item.label}
                                    </Typography>
                                    <Typography className={s.infoValue}>
                                        {item.value}
                                    </Typography>
                                </>

                        }

                    </div>
                ))}
            </div>
        </div>
    )
})

export default GeneralInfo