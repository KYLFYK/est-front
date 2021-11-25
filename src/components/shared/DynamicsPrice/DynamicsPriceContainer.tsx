import React from 'react';
import css from './DynamicsPrice.module.scss'
import Chart from "../../containers/ChartPayback";
import Typography from "../Typography/Typography";

const DynamicsPriceContainer = () => {
    return (
        <div className={css.marginContainer}>
            <Typography weight={'bold'} className={css.margin}>
                Динамика окупаемости дома в Крыму на примере сравнения с иными гордами
            </Typography>
            <Chart/>
        </div>
    );
};

export default DynamicsPriceContainer;