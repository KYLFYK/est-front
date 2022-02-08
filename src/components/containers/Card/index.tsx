import s from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Link from 'next/link'
import { APIObject } from '../../../api';
import BaseSlider from '../../shared/BaseSlider/BaseSlider';
import Typography from '../../shared/Typography/Typography';
import {mapData} from '../CardContainer/config'

interface Props {
    route: string | string[] | undefined,
    houseData: APIObject.types.IObjectEntry,
    data?: any
}

const TEMP_LINK = '/'
const MAX_SLIDERS_AMMOUNT = 7

const ObjectCard: React.FC<Props> = ({ route, houseData, data }) => {

    //const houseImages = houseData.images.length > MAX_SLIDERS_AMMOUNT ? houseData.images.slice(0, MAX_SLIDERS_AMMOUNT) : houseData.images
    const houseImages = mapData[0].images
    const imagesUrls = houseImages.map((image) => image.url)

    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <BaseSlider images={imagesUrls} height={200} withFavorite onClickFavorite={() => {}}/>
            </div>

            <Link href={`${TEMP_LINK}${route}/${data.id}`}>
                <a className={s.content}>
                    <Typography inline weight="bold" color="accent" className={s.title}>{data.name}</Typography>
                    <p className={s.subtitle}>
                        <Typography inline weight="light" color="tertiary"> Адрес: </Typography> {data.address}
                    </p>
                    <p className={s.subtitle}>
                        <Typography inline weight="light" color="tertiary">Этаж:</Typography> {data.property.floor} / {houseData.total_floors}
                    </p>
                    <p className={s.price}>
                        {data.price} ₽
                    </p>
                </a>
            </Link>
        </div>
    )
}

export default ObjectCard
