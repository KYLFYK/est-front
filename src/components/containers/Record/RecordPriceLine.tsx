import React, {FC} from "react";
import {Card} from "../../shared/Mortgage/Card";
import Typography from "../../shared/Typography/Typography";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import css from './Record.module.scss'

type RecordPriceLineType = {
    date: string,
    price: string
    onPay:(date:string,price:string)=>void
}

export const RecordPriceLine: FC<RecordPriceLineType> = ({date, price,onPay}) => {

    // for await API
    return (
        <Card className={price === 'Бесплатно' ? css.color_Card2 : css.color_Card1}>
        {/*<Card className={price === 'Бесплатно' ? css.color_Card1 : css.color_Card2  }>*/}
            <div className={css.df_jc_ai}>
                <div>
                    <div>
                        <Typography size={"subheaderBig"} color={"nude"}> {date}</Typography>
                    </div>
                    <div>
                        <Typography color={price === 'Бесплатно' ? "tertiary" : 'secondary'}> {price}</Typography>
                    </div>
                </div>
                <div>
                    <BaseButton
                        onClick={() => onPay(date,price)}
                        className={css.buttonW}
                        // className={price === 'Бесплатно' ?css.buttonW : css.buttonDisable}
                    >
                        Выбрать
                    </BaseButton>
                </div>
            </div>
        </Card>
    )
}