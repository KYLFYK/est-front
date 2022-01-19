import React from 'react';
import s from './HeadFilter.module.scss';
import { Filter } from '../Filter/Filter';
import Typography from 'src/components/shared/Typography/Typography';
//import { useProgressiveImage } from '../../../hooks/useProgressiveLazyLoad';
//import * as imageSrc from './imageSrc';
//import { Button } from '../../../../shared/UI/components/button/Button'; 

export const HeadFilter = () => {
    //const lazySrc = useProgressiveImage(imageSrc.MAIN_PAGE_SRC)
    /*const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const onClickHandler = () => {
        setClicked(true);
    }
    const onMouseHoverHandler = () => {
        setHover(true);
    }
    const onMouseOutHandler = () => {
        setClicked(false);
        setHover(false);
    }*/

    return (
        <div className={s.container} style={{backgroundImage: `url(https://api.interior.ru/media/images/setka/2020_11_05/Paunic_22.jpg.webp)`}}>
            <div></div>
            <div className={s.contentContainer}>
                <div className={s.title}>
                    <div className={s.containerTitle}>
                        <Typography size={'header'} color={'secondary'}>Найдите дом своей мечты</Typography>
                        <Typography weight={'medium'} color={'secondary'} className={s.subTitle}>Здесь публикуются лучшие объекты недвижимости Крыма и Сочи</Typography>
                        {/*<div className={s.subtitleText}>Более 3000 предложений кварти и домов в Крыму и Сочи</div>

                        <Button 
                            onMouseEnter={onMouseHoverHandler}
                            onMouseLeave={onMouseOutHandler}
                            onMouseDown={onClickHandler}
                            className={(clicked && s.buttonClicked) || (hover && s.buttonHovered) || s.button}
                            style={{marginTop: '20px', padding: '20px'}}
                        >
                            <div className={s.buttonTitle}>Перейти к поиску</div>
                        </Button>*/}

                    </div>

                </div>
                <div className={s.filterWrapper}>
                    <Filter location={'start'}/>
                </div>
            </div>
        </div>
    )
}
