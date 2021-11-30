import React from 'react';
import css from './DynamicsPrice.module.scss'
import Chart from "../../containers/ChartPayback";
import Typography from "../Typography/Typography";
import {Card} from "../Mortgage/Card";

const DynamicsPrice = () => {
    return (
        <div >
            <Typography weight={'bold'} className={css.margin}>
                Динамика окупаемости дома в Крыму на примере сравнения с иными гордами
            </Typography>
            <Card className={css.card}>
                <Chart/>
            </Card>
        </div>
    );
};

export default DynamicsPrice;