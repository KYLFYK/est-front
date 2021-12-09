import React, {FC} from 'react';
import HeadLine from "../../shared/HeadLine/HeadLine";
import DynamicsPrice from "../../shared/DynamicsPrice/DynamicsPrice";
import PaybackPeriod from "../../shared/PaybackPeriod/PaybackPeriod";
import css from './PaybackContainer.module.css'
import DynamicsPriceTable from "../../shared/DynamicsPrice/DynamicsPriceTable";
import AverageMarketPrice from "../../shared/AverageMarketPrice/AverageMarketPrice";
import Map from "../../containers/Maps/MapPayback/index";
import {currentHouse} from "../../containers/Maps/MapPayback/config";
import {objects} from "../../containers/Maps/MapPayback/config";
import Typography from "../../shared/Typography/Typography";

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
                <div style={{margin: '30px 0 0 0'}}>
                    <Typography weight={'medium'}> 
                        Похожие предложения в этом районе
                    </Typography>
                    <div style={{margin: '20px 0 0 0'}}>
                        <Map currentHouse={currentHouse} objects={objects} location={'payback'} />
                    </div>
                </div>
            </HeadLine>
        </div>
    );
};

export default PaybackContainer;