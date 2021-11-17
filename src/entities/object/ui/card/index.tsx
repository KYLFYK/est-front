import s from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { APIObject } from '../../../../shared/api';
import Link from 'next/link'
import BaseSlider from '../../../../shared/ui/BaseSlider/BaseSlider';
import Typography from '../../../../shared/ui/Typography/Typography';

interface Props {
    houseData: APIObject.types.IObjectEntry,
}

const TEMP_LINK = '/'
const MAX_SLIDERS_AMMOUNT = 7

const ObjectCard: React.FC<Props> = ({ houseData }) => {

    const houseImages = houseData.images.length > MAX_SLIDERS_AMMOUNT ? houseData.images.slice(0, MAX_SLIDERS_AMMOUNT) : houseData.images
    const imagesUrls = houseImages.map((image) => image.url)


    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <BaseSlider images={imagesUrls} height={200} withFavorite onClickFavorite={() => {}}/>
            </div>

            <Link href={TEMP_LINK}>
                <a className={s.content}>
                    <Typography inline weight="bold" color="accent" className={s.title}>{houseData.name}</Typography>
                    <p className={s.subtitle}>
                        <Typography inline weight="light" color="tertiary"> Адрес: </Typography> {houseData.address}
                    </p>
                    <p className={s.subtitle}>
                        <Typography inline weight="light" color="tertiary">Этаж:</Typography> {houseData.floor} / {houseData.total_floors}
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
