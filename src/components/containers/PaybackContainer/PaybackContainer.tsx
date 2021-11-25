import React from 'react';
import HeadLine from "../../shared/HeadLine/HeadLine";
import DynamicsPriceContainer from "../../shared/DynamicsPrice/DynamicsPriceContainer";
import PaybackPeriod from "../../shared/PaybackPeriod/PaybackPeriod";
import css from './PaybackContainer.module.css'
import DynamicsPriceTable from "../../shared/DynamicsPrice/DynamicsPriceTable";
import AverageMarketPrice from "../../shared/AverageMarketPrice/AverageMarketPrice";

const PaybackContainer = () => {
    return (
        <div>
            <HeadLine title={'Окупаемость'}>
                <div className={css.columnGrid_top}>
                    <PaybackPeriod/>
                    <DynamicsPriceContainer/>
                </div>
                <div className={css.columnGrid_Bottom}>
                    <DynamicsPriceTable/>
                    <AverageMarketPrice />
                </div>
            </HeadLine>
        </div>
    );
};

export default PaybackContainer;