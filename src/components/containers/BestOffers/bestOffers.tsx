import React from 'react';
import ArrayButton from '../../shared/ArrayButton/ArrayButton';
import BaseButton from '../../shared/BaseButton/BaseButtons';
import EstateOffer from '../../shared/EstateOffer/estateOffer';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './bestOffers.module.css'
import {IMAGES_SET} from "../GeneralInfo/config";

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
                        titleButtons={['Покупка','Дом']}
                        img={IMAGES_SET}
                    />
                    <EstateOffer
                        titleButtons={['Покупка','Дом']}
                        img={IMAGES_SET}
                    />
                    <EstateOffer
                        titleButtons={['Покупка','Дом']}
                        img={IMAGES_SET}
                    />
                </div>
            </HeadLine>
        </div>
    );
};

