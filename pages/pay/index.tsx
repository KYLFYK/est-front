import React, {useEffect, useState} from 'react';
import {Card} from "../../src/components/shared/Mortgage/Card";
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import css from './pay.module.scss'
import BackPage from "../../src/components/tabs/Account/Agent/components/Others/BackPage/BackPage";
import {useRouter} from "next/router";
import Typography from "../../src/components/shared/Typography/Typography";
import BaseButton from "../../src/components/shared/BaseButton/BaseButtons";
import {BaseInput} from "../../src/components/shared/BaseInput/Input";
import {useRecordStore} from "../../src/mobx/record/record";
import {CardFree} from "../../src/components/containers/PayCard/CardFree";
import {RecordPay} from "../../src/components/containers/PayCard/RecordPay";
import {CardPay} from "../../src/components/containers/PayCard/CardPay";

const Index = () => {

    const store = useRecordStore
    useEffect(()=>{
        searchCard(store.days)
    },[store.days])

    const searchCard = (type:string) => {
        switch (type) {
            case 'freePay':return <CardFree/>
            case 'pay':return <RecordPay/>
            case 'endPay':return <CardPay/>
            default :return <CardFree/>
        }
    }

    return (
        <MainContainer footerColor={"accent"} className={css.mainContainer} >
            {
                searchCard(store.typeOrder)
            }
        </MainContainer>
    );
};

export default Index;





