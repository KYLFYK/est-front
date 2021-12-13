import React, {useState} from 'react';
import s from './ConstructProgress.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BaseSlider from '../../shared/BaseSlider/BaseSlider';
import {BaseDropDown} from '../../shared/BaseDropDown/BaseDropDown'
import Typography from '../../shared/Typography/Typography';

interface Props {
    images: string[],
    info: any
}

const ConstructProgress: React.FC<Props> = ({ images, info }) => {
    const [value, setValue] = useState<any>(0)

    return (
        <div className={s.container}>
            <div className={s.sliderContainer}>
                <BaseSlider images={images} height={295} withArrows withFavorite={false} onClickFavorite={() => {}}/>
            </div>
            <div className={s.infoContainer}>
            <BaseDropDown options={info} value={info[Number(value)].value} placeholder="Выбрерите опцию" onChange={(e) => {setValue(e)}} />
                <Typography>    
                    {info[Number(value)].title}
                </Typography>
            </div>
        </div>
    )
};

export default ConstructProgress