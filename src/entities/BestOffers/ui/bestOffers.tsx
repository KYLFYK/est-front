import React from 'react';
import EstateOffer from "../../../shared/ui/EstateOffer/estateOffer";
import HeadLine from "../../../shared/ui/HeadLine/HeadLine";
import ArrayButton from "../../../shared/ui/ArrayButton/ArrayButton";
import css from './bestOffers.module.css'
import BaseButton from "../../../shared/ui/BaseButton/BaseButtons";


const buttonName = ['Покупка', 'Аренда', 'Дом', 'Коммерческая недвижимость', 'Новостройка', 'Вторичноежилье',
    'Строящийся дом', '2-23 этажи']

export const BestOffers = () => {
    return (
        <div className={css.offers}>
            <HeadLine title={'Лучшие предложения'} >
                <div className={css.positionButton}>
                    <div className={css.buttonLine}>
                        {
                            buttonName.map((name,index) => {
                                return <ArrayButton key={index} name={name} />
                            })
                        }
                    </div>
                    <BaseButton
                        type="secondary"
                        className={css.margin}
                    >
                        Показать еще
                    </BaseButton>
                </div>

                <div className={css.offersPhoto}>
                    <EstateOffer
                        title={'Покупка'}
                        title1={'Дом'}
                        img={"https://unikassa.ru/wp-content/uploads/images/Prognoz-tsen-na-nedvizhimost-v-2017-godu-v-Moskve.jpg"}
                    />
                    <EstateOffer
                        title={'Покупка'}
                        title1={'Дом'}
                        img={"https://unikassa.ru/wp-content/uploads/images/Prognoz-tsen-na-nedvizhimost-v-2017-godu-v-Moskve.jpg"}
                    />
                    <EstateOffer
                        title={'Покупка'}
                        title1={'Дом'}
                        img={"https://unikassa.ru/wp-content/uploads/images/Prognoz-tsen-na-nedvizhimost-v-2017-godu-v-Moskve.jpg"}
                    />
                </div>
            </HeadLine>
        </div>
    );
};

