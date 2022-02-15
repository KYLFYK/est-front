import s from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Link from 'next/link'
import { APIObject } from '../../../api';
import BaseSlider from '../../shared/BaseSlider/BaseSlider';
import Typography from '../../shared/Typography/Typography';
import {mapData} from '../CardContainer/config'
import {observer} from "mobx-react-lite";

interface Props {
    route: string | string[] | undefined,
    houseData: APIObject.types.IObjectEntry,
    typeObject?: string | string[] | undefined, 
    data?: any,
}

const TEMP_LINK = '/'
const MAX_SLIDERS_AMMOUNT = 7

const ObjectCard: React.FC<Props> = observer(({ route, houseData, typeObject, data }) => {

    //const houseImages = houseData.images.length > MAX_SLIDERS_AMMOUNT ? houseData.images.slice(0, MAX_SLIDERS_AMMOUNT) : houseData.images

    const houseImages = mapData[0].images
    const imagesUrls = houseImages.map((image) => image.url)

    function numberWithSpaces(price:any) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className={s.wrapper}>
            <Link href={`${TEMP_LINK}${route}/${data.id}`}>
                <a className={s.link}>
                    <div className={s.slider}>
                        <BaseSlider images={imagesUrls} height={200} withFavorite={typeof window !== "undefined" && localStorage.getItem("roleEstatum") ? true : false} onClickFavorite={() => {}}/>
                    </div>
                    <div className={s.content}>
                        <Typography inline weight="bold" color="accent" className={s.title}>{data.name}</Typography>
                        <p className={s.subtitle}>
                            <Typography inline weight="light" color="tertiary"> Адрес: </Typography> {data.address}
                        </p>
                        <p className={s.subtitle}>
                            <Typography inline weight="light" color="tertiary">Этаж:</Typography> {data.property.floor} / {data.property.totalFloor}
                            <Typography inline weight="light" color="tertiary">Тип жилья:</Typography> {typeObject === 'new' ? 'Новостройка' : 'Вторичное'}
                        </p>
                        <p className={s.price}>
                            {
                                numberWithSpaces(data.price)
                            } ₽
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    )
})

export default ObjectCard
