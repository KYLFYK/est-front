import React, {FC} from 'react';
import Typography from "../Typography/Typography";
import {Card} from "../Mortgage/Card";
import css from './AverageMarketPrice.module.scss'

type AverageMarketPriceType={
    averagePrice:{
        price:string
        priceUSD:string
        priceEU:string
        priceMetre:string
        priceMetreUSD:string
        priceMetreEU:string
    }
}

const AverageMarketPrice :FC<AverageMarketPriceType> = ({averagePrice}) => {
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
                            <Typography color={'nude'} size={"subheaderBig"}> {averagePrice.price} P</Typography>
                        </div>
                        <div className={css.margin_column}>
                            <Typography color={'nude'} className={css.sizeSmall}> {averagePrice.priceUSD} $</Typography>
                            <Typography color={'nude'} className={css.sizeSmall}> {averagePrice.priceEU} EU</Typography>
                        </div>

                    </div>
                </div>
                <div style={{margin:'37px 0'}}>
                    <Typography className={css.sizeSmall}> Цена за м²</Typography>
                    <div className={css.df}>
                        <div>
                            <Typography color={'nude'} size={"subheaderBig"}> {averagePrice.priceMetre} P</Typography>
                        </div>
                        <div className={css.margin_column}>
                            <Typography color={'nude'} className={css.sizeSmall}> {averagePrice.priceMetreUSD} $</Typography>
                            <Typography color={'nude'} className={css.sizeSmall}> {averagePrice.priceMetreEU} EU</Typography>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default AverageMarketPrice;