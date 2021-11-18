import React from 'react';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import { BaseInput } from '../../shared/BaseInput/Input';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './offerNews.module.scss'


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
