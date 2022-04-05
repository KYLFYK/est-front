import React, {FC} from "react";
import {Card} from "../../shared/Mortgage/Card";
import Typography from "../../shared/Typography/Typography";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import css from './Record.module.scss'
import classNames from "classnames";

type RecordPriceLineType = {
    date: string,
    price: string
    onPay:(date:string,price:string)=>void
    disable:boolean
}

export const RecordPriceLine: FC<RecordPriceLineType> = ({date, price,onPay,disable}) => {

    // for await API
    return (
        <Card className={classNames(price === 'Бесплатно' ? css.color_Card2 : css.color_Card1,disable && css.color_Card_Disable)}>
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
                        onClick={() =>{
                            !disable &&  onPay(date,price)
                        } }
                        className={ !disable ?css.buttonW : css.buttonW_Disable}
                        type={!disable ?"blank":"toggleButtonWithIcons"}
                        // className={price === 'Бесплатно' ?css.buttonW : css.buttonDisable}

                    >
                        Выбрать
                    </BaseButton>
                </div>
            </div>
        </Card>
    )
}