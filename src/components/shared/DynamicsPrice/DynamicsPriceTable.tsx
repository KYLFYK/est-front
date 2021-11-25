import React, { useState } from 'react';
import css from './DynamicsPrice.module.scss'
import {Card} from "../Mortgage/Card";
import {Chart} from "./Chart";
import QuestionIcon from './QuestionIcon.svg';
import Typography from "../Typography/Typography";

const DynamicsPriceTable = () => {


    const [cardX, setCardX] = useState(0);
    const [cardhover, setCardhover] = useState<boolean[]>([false, false, false]);
    const [cardCoords, setCardcoords] = useState<[number, number]>([0, 0])
    const [cardHeight, setCardHeight] = useState(0)

    const onMouseCardhoverHandler = (e: any) => {
        if (window.innerWidth - e.nativeEvent.layerX < 320) {
            setCardX(-320 + (window.innerWidth - e.nativeEvent.layerX));
        } else {
            setCardX(0);
        }
        setCardhover(cardhover.map((h, index) => Number(e.target.id) === index));
        setCardcoords([e.nativeEvent.layerX, e.nativeEvent.layerY]);
    }
    const onMouseCardoutHandler = () => {
        setCardhover([false, false, false]);
    }

    return (
        <div className={css.graphics}>
            <div className={css.chart}>
                <Typography className={css.subtitle} weight={'bold'}>
                    Динамика изменения стоимости за м² в этом районе
                    <img
                        id={'2'}
                        src={QuestionIcon}
                        onMouseEnter={onMouseCardhoverHandler}
                        onMouseLeave={onMouseCardoutHandler}
                        style={{ width: '20px', paddingLeft: '6px' }}
                        alt='icon'
                    />
                </Typography>
                <Card style={{ backgroundColor: '#FFF', border: 'solid 1px #F2F2F2', margin: '20px 0 0 0', padding: '20px' }} >
                    <Chart heightValue={cardHeight} language={'ru'} />
                </Card>
            </div>
        </div>
    );
};

export default DynamicsPriceTable;