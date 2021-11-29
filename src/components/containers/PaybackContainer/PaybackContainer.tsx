import React, {FC} from 'react';
import HeadLine from "../../shared/HeadLine/HeadLine";
import DynamicsPrice from "../../shared/DynamicsPrice/DynamicsPrice";
import PaybackPeriod from "../../shared/PaybackPeriod/PaybackPeriod";
import css from './PaybackContainer.module.css'
import DynamicsPriceTable from "../../shared/DynamicsPrice/DynamicsPriceTable";
import AverageMarketPrice from "../../shared/AverageMarketPrice/AverageMarketPrice";

type PaybackContainerType = {
    averagePrice:{
        price:string,
        priceUSD:string,
        priceEU:string
        priceMetre:string
        priceMetreUSD:string
        priceMetreEU:string
    }
}

const PaybackContainer :FC<PaybackContainerType> = ({averagePrice}) => {
    return (
        <div className={css.marginContainer}>
            <HeadLine title={'Окупаемость'}>
                <div className={css.columnGrid_top}>
                    <PaybackPeriod/>
                    <DynamicsPrice/>
                </div>
                <div className={css.columnGrid_Bottom}>
                    <DynamicsPriceTable/>
                    <AverageMarketPrice averagePrice={averagePrice} />
                </div>
            </HeadLine>
        </div>
    );
};

export default PaybackContainer;