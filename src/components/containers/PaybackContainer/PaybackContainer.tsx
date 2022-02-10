import React, {FC} from 'react';
import HeadLine from "../../shared/HeadLine/HeadLine";
import DynamicsPrice from "../../shared/DynamicsPrice/DynamicsPrice";
import PaybackPeriod from "../../shared/PaybackPeriod/PaybackPeriod";
import css from './PaybackContainer.module.css'
import DynamicsPriceTable from "../../shared/DynamicsPrice/DynamicsPriceTable";
import AverageMarketPrice from "../../shared/AverageMarketPrice/AverageMarketPrice";
import Map from "../../containers/Maps/MapPayback/index";
import Typography from "../../shared/Typography/Typography";
import {currentHouse, objects} from "../Maps/MapPayback/config";

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
const table = [
    {name: 'Январь 2018', price: '50000'},
    {name: 'Июль 2018', price: '55000'},
    {name: 'Январь 2019', price: '56000'},
    {name: 'Июль 2019', price: '61000'},
    {name: 'Январь 2020', price: '62000'},
    {name: 'Июль 2020', price: '67000'},
    {name: 'Январь 2021', price: '68000'},
    {name: 'Июль 2021', price: '71000'},
]



const PaybackContainer :FC<PaybackContainerType> = ({averagePrice}) => {
    return (
        <div className={css.marginContainer}>
            <HeadLine title={'Окупаемость'}>
                <div className={css.columnGrid_top}>
                    <PaybackPeriod/>
                    <DynamicsPrice/>
                </div>
                {/*Пока нету данных скрыто!*/}
                {/*<div className={css.columnGrid_Bottom}>*/}
                {/*    <DynamicsPriceTable table={table} />*/}
                {/*    <AverageMarketPrice averagePrice={averagePrice} />*/}
                {/*</div>*/}
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