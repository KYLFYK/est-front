import React from 'react';
import Typography from "../Typography/Typography";
import {Card} from "../Mortgage/Card";
import css from './AverageMarketPrice.module.scss'

const AverageMarketPrice = () => {
    return (
        <div>
            <Typography weight={'bold'} className={css.headerTypo}>
                Средняя рыночная цена
            </Typography>
            <Card className={css.colorBackGround}>
                <div style={{display:'flex'}}>
                    <Typography> Период:</Typography>
                    <Typography weight={"bold"}> Сентябрь 2021</Typography>
                </div>
                <div style={{margin:'26px 0'}}>
                    <Typography className={css.sizeSmall}> Стоимость дома</Typography>
                    <div className={css.df}>
                        <div>
                            <Typography color={'nude'} size={"subheaderBig"}> 150 001 240 P</Typography>
                        </div>
                        <div className={css.margin_column}>
                            <Typography color={'nude'} className={css.sizeSmall}> 2 025 221.09 $</Typography>
                            <Typography color={'nude'} className={css.sizeSmall}> 1 728 447.47 EU</Typography>
                        </div>

                    </div>
                </div>
                <div style={{margin:'37px 0'}}>
                    <Typography className={css.sizeSmall}> Цена за м²</Typography>
                    <div className={css.df}>
                        <div>
                            <Typography color={'nude'} size={"subheaderBig"}> 79 000 P</Typography>
                        </div>
                        <div className={css.margin_column}>
                            <Typography color={'nude'} className={css.sizeSmall}> 1 0066.61 $</Typography>
                            <Typography color={'nude'} className={css.sizeSmall}> 910.31 EU</Typography>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default AverageMarketPrice;