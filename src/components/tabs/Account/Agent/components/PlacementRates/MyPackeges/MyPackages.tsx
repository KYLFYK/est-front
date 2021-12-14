import React from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import CardPlan from "./CardPlan";
import css from './CardPlan.module.scss'

const cardBase ={
    title:'Базовый',
    price:'Бесплатно',
    suggestions:[
        {title:'Бесплатная публикация',premium:true},
        {title:'Не более 5 объявлений',premium:true},
        {title:'Выгрузка данных в .xlsx',premium:false},
        {title:'Можно добавлять сотрудников',premium:false},
        {title:'Статистика с комментариями',premium:false},
        {title:'Продвижение объявлений',premium:false}
    ]
}
const cardStandard ={
    title:'Стандарт',
    price:'190 Р/мес',
    suggestions:[
        {title:'Бесплатная публикация',premium:true},
        {title:'Не более 5 объявлений',premium:true},
        {title:'Выгрузка данных в .xlsx',premium:true},
        {title:'Можно добавлять сотрудников',premium:true},
        {title:'Статистика с комментариями',premium:false},
        {title:'Продвижение объявлений',premium:false}
    ]
}
const cardPremium ={
    title:'Премиум',
    price:'390 Р/мес',
    suggestions:[
        {title:'Бесплатная публикация',premium:true},
        {title:'Не более 5 объявлений',premium:true},
        {title:'Выгрузка данных в .xlsx',premium:true},
        {title:'Можно добавлять сотрудников',premium:true},
        {title:'Статистика с комментариями',premium:true},
        {title:'Продвижение объявлений',premium:true}
    ]
}

const MyPackages = () => {
    return (
        <div>
            <Typography className={css.marginTitle} weight={"bold"} > Выберите тарифный план</Typography>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
                <CardPlan
                    title={cardBase.title}
                    price={cardBase.price}
                    suggestions={cardBase.suggestions}
                />
                <CardPlan
                    title={cardStandard.title}
                    price={cardStandard.price}
                    suggestions={cardStandard.suggestions}
                />
                <CardPlan
                    title={cardPremium.title}
                    price={cardPremium.price}
                    suggestions={cardPremium.suggestions}
                />
            </div>

        </div>
    );
};

export default MyPackages;