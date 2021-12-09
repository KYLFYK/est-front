import React from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import CardPlan from "./CardPlan";
import css from './CardPlan.module.scss'
const cardPlan1 ={
    title:'Базовый',
    price:'Бесплатно',
    suggestions:[
        {title:'Бесплатная публикация',status:true},
        {title:'Не более 5 объявлений',status:true},
        {title:'Выгрузка данных в .xlsx',status:false},
        {title:'Можно добавлять сотрудников',status:false},
        {title:'Статистика с комментариями',status:false},
        {title:'Продвижение объявлений',status:false}
    ]
}
const cardPlan2 ={
    title:'Стандарт',
    price:'190 Р/мес',
    suggestions:[
        {title:'Бесплатная публикация',status:true},
        {title:'Не более 5 объявлений',status:true},
        {title:'Выгрузка данных в .xlsx',status:true},
        {title:'Можно добавлять сотрудников',status:true},
        {title:'Статистика с комментариями',status:false},
        {title:'Продвижение объявлений',status:false}
    ]
}
const cardPlan3 ={
    title:'Премиум',
    price:'390 Р/мес',
    suggestions:[
        {title:'Бесплатная публикация',status:true},
        {title:'Не более 5 объявлений',status:true},
        {title:'Выгрузка данных в .xlsx',status:true},
        {title:'Можно добавлять сотрудников',status:true},
        {title:'Статистика с комментариями',status:true},
        {title:'Продвижение объявлений',status:true}
    ]
}
const typePlan = "Стандарт"

// const purchaseHistory =[
//     {date:'25.06.2021',tarif:'Стандарт',period:'1 месяц', sum:'150.00 руб.'},
//     {date:'25.05.2021',tarif:'Стандарт',period:'1 месяц', sum:'150.00 руб.'},
// ]

const MyPackages = () => {
    return (
        <div>
            <Typography className={css.marginTitle} weight={"bold"} > Выберите тарифный план</Typography>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
                <CardPlan
                    typePlan={typePlan}
                    statusPlan={'Базовый'}
                    title={cardPlan1.title}
                    price={cardPlan1.price}
                    suggestions={cardPlan1.suggestions}
                />
                <CardPlan
                    typePlan={typePlan}
                    statusPlan={'Стандарт'}
                    title={cardPlan2.title}
                    price={cardPlan2.price}
                    suggestions={cardPlan2.suggestions}
                />
                <CardPlan
                    typePlan={typePlan}
                    statusPlan={'Премиум'}
                    title={cardPlan3.title}
                    price={cardPlan3.price}
                    suggestions={cardPlan3.suggestions}
                />
            </div>
            {/*<div>*/}
            {/*    <div className={css.tableBuy}>*/}
            {/*        <Typography>Дата</Typography>*/}
            {/*        <Typography>Покупка</Typography>*/}
            {/*        <Typography>Период</Typography>*/}
            {/*        <Typography>Сумма</Typography>*/}
            {/*    </div>*/}
            {/*    <hr color={'#EFEFEF'}/>*/}
            {/*    {*/}
            {/*        purchaseHistory.map(({date,tarif,period,sum},index)=>(*/}
            {/*            <div key={index}>*/}
            {/*                <div className={css.tableInfo}>*/}
            {/*                    <Typography>{date}</Typography>*/}
            {/*                    <Typography>{tarif}</Typography>*/}
            {/*                    <Typography>{period}</Typography>*/}
            {/*                    <Typography>{sum}</Typography>*/}
            {/*                </div>*/}
            {/*                <hr color={'#EFEFEF'}/>*/}
            {/*            </div>*/}

            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}

        </div>
    );
};

export default MyPackages;