import React, {FC} from 'react';
import Typography from "../../../../../../../../shared/Typography/Typography";
import {Chart} from "../../../../../../../../shared/DynamicsPrice/Chart";
import css from './../Statistics.module.scss'
import {Card} from "../../../../../../../../shared/Mortgage/Card";


type RevenueMonthType = {
    title:string
    table:Array<{name:string,price:string}>
}

const RevenueMonth :FC<RevenueMonthType>= ({title,table}) => {
    return (
        <div>
            <Typography weight={"bold"}>{title}</Typography>
            <Card className={css.cardStyle}>
                <Typography color={"tertiary"} className={css.priceTable}>Прибыль млн.₽ </Typography>
                <Chart heightValue={0} language={'ru'} table={table} divider={20} height={244} width={497} />
            </Card>
        </div>
    );
};

export default RevenueMonth;