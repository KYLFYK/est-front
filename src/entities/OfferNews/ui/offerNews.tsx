import React from 'react';
import css from './offerNews.module.scss'
import BaseButton from "../../../shared/ui/BaseButton/BaseButtons";
import {BaseInput} from "../../../shared/ui/BaseInput/Input";
import HeadLine from "../../../shared/ui/HeadLine/HeadLine";

export const OfferNews = () => {
    return (
        <div className={css.offerNews}>
            <HeadLine title={'Хотите получать новости о новых предложения и избранных домах?'}>
                <div className={css.grid}>
                    <BaseInput placeholder="Имя"/>
                    <BaseInput placeholder="Email"/>
                    <BaseInput placeholder="Телефон"/>
                    <BaseButton type="primary">Подписаться на новости</BaseButton>
                </div>
            </HeadLine>
        </div>
    );
};
