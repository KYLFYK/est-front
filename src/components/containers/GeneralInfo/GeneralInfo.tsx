import React, {useEffect, useState} from 'react';
import s from './GeneralInfo.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IOption } from '../../../utils/interfaces/general';
import BaseSlider from '../../shared/BaseSlider/BaseSlider';
import Typography from '../../shared/Typography/Typography';
import { formatNumbersToCurrency } from '../../../utils/general';
import {observer} from "mobx-react-lite";
import {IMAGES_SET} from './config';
import classNames from "classnames";

interface Props {
    images: string[] | { url: string; id: number; }[],
    price?: number,
    info: IOption[]
    classSlider?:string
    residentialComplex?: boolean
}

const GeneralInfo: React.FC<Props> = observer(({ images, price, info,classSlider, residentialComplex = false }) => {

    const imagesUrl = images.length === 0 ? IMAGES_SET : images.map((i: any) => i.url && i.url.includes('public') ? IMAGES_SET[0] : i.url || i)
    const [height,setHeight]=useState<number>(595)

    useEffect(()=>{
        if(window?.innerWidth < 1400){
            setHeight(450)
        }else{
            setHeight(595)
        }

    },[])

    return (
        <div className={s.container}>
            <div className={s.sliderContainer}>
                <BaseSlider
                    images={imagesUrl}
                    height={height}
                    withArrows
                    withFavorite={typeof window !== "undefined" && localStorage.getItem("roleEstatum") ? true : false}
                    onClickFavorite={() => {}}
                    classSlider={classSlider}
                />
            </div>
            <div className={`${s.infoContainer} ${residentialComplex ? '' : s.marginTop6}`}>
                {price && <Typography size="big" color="nude">{formatNumbersToCurrency(price)} ₽</Typography>}
                <div className={residentialComplex ? '' : s.marginTop19}>
                {info!== undefined &&
                    info.map((item, idx) => (
                        <div className={residentialComplex ? s.infoItemRC : s.infoItemObj} key={idx}>
                            {
                                item.value !== null &&
                                <>
                                    <Typography
                                        color={item.value === '' ? 'tertiary' : 'default'}
                                        weight={item.value === '' ? 'regular':'bold' }
                                        className={classNames(idx > 0 && item.value === '' ? s.infoTitle : s.infoLabel)}
                                    >
                                        {item.label}
                                    </Typography>
                                    <Typography className={s.infoValue}>
                                        {item.value}
                                    </Typography>
                                </>

                            }

                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
})

export default GeneralInfo