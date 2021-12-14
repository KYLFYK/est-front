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

const PlacementRates = () => {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <>
            {
                !edit
                    ? <HorizontalTabs tabs={[
                        {title: "Мои пакеты", Component: <MyPackages />},
                        {title: "Кошелек", Component: <Purse
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