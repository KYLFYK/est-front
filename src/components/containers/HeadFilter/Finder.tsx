import React from 'react';
import s from './HeadFilter.module.scss';
import { Filter } from '../Filter/Filter';
import { useProgressiveImage } from '../../../hooks/useProgressiveLazyLoad';
import * as imageSrc from './imageSrc';
//import { Button } from '../../../../shared/UI/components/button/Button'; 

export const HeadFilter = () => {
    const lazySrc = useProgressiveImage(imageSrc.MAIN_PAGE_SRC)
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
        <div className={s.container} style={{backgroundImage: `url(${lazySrc || imageSrc.MAIN_PAGE_PLACEHOLDER_SRC})`}}>
            <div></div>
            <div className={s.contentContainer}>
                <div className={s.title}>
                    <div className={s.containerTitle}>
                        <div className={s.titleText}>Найдите дом своей мечты</div>
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
                    <Filter />
                </div>
            </div>
        </div>
    )
}
