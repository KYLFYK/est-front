import React, {useState} from 'react';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import { BaseInput } from '../../shared/BaseInput/Input';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './offerNews.module.scss'
import {mailPage} from "../../../api/mainPage/mainPage";


export const OfferNews = () => {

    const [name, setName]=useState<string>('')
    const [email, setEmail]=useState<string>('')
    const [phone, setPhone]=useState<string>('')

    const newsSubscription = () => {
        if(name.trim()!== '' && email.trim()!== '' && phone.trim()!== '')
        mailPage.newSubscription(name,email,phone)
    }

    return (
        <div className={css.offerNews}>
            <HeadLine title={'Хотите получать новости о новых предложения и избранных домах?'}>
                <div className={css.grid}>
                    <BaseInput placeholder="Имя" value={name} onChange={e=>setName(e.currentTarget.value)}/>
                    <BaseInput placeholder="Email" value={email} onChange={e=>setEmail(e.currentTarget.value)}/>
                    <BaseInput placeholder="Телефон" type={"number"} value={phone} onChange={e=>setPhone(e.currentTarget.value)}/>
                    <BaseButton onClick={newsSubscription} type="primary">Подписаться на новости</BaseButton>
                </div>
            </HeadLine>
        </div>
    );
};
