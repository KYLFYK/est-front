import React, {useState} from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import MyPackages from "./MyPackeges/MyPackages";
import Purse from "./Purse/Purse";
import AddingMoneyWallet from "./Purse/AddingMoneyWallet";

const payment={
    payerType:'Базовый (Москва и ближнее Подмосковье)',
    resumePayment:true,
    tariffPlan:"Физическое лицо"
}
const balance = '500,14 P'

const mocOperation=[
    {id:'1',date:'2021-12-14T11:01:22.660Z',sum:'501,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'2',date:'2021-12-14T11:01:22.660Z',sum:'500,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'3',date:'2021-12-14T11:01:22.660Z',sum:'540,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'4',date:'2021-12-14T11:01:22.660Z',sum:'503,14 P',ads:'', typeTransaction:'', comment:"assd"},
]
const mocExtracts=[
    {id:'1',dateFrom :'2021-12-14T11:01:22.660Z',dateTo:'2022-01-14T11:01:22.660Z',sum:'501,14 P'},
    {id:'2',dateFrom :'2021-12-12T11:01:22.660Z',dateTo:'2022-01-14T11:01:22.660Z',sum:'501,14 P'},
    {id:'3',dateFrom :'2021-12-15T11:01:22.660Z',dateTo:'2022-01-14T11:01:22.660Z',sum:'501,14 P'},
    {id:'4',dateFrom :'2021-12-24T11:01:22.660Z',dateTo:'2022-01-14T11:01:22.660Z',sum:'501,14 P'},
]

const PlacementRates = () => {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <>
            {
                !edit
                    ? <HorizontalTabs tabs={[
                        {title: "Мои пакеты", Component: <MyPackages />},
                        {title: "Кошелек", Component: <Purse
                                balance={balance}
                                operation={mocOperation}
                                extractsContract={mocExtracts}
                                payerType={payment.payerType}
                                resumePayment={payment.resumePayment}
                                tariffPlan={payment.tariffPlan}
                                onClick={()=>setEdit(true)} />}
                    ]}/>
                    : <AddingMoneyWallet onClick={()=>setEdit(false)}/>

            }
        </>
    )
};

export default PlacementRates;