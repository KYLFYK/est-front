import React, {FC} from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import css from './Purse.module.scss'
import DisappearingTitle from "../../../../../../shared/DisappearingTitle/DisappearingTitle";
type PurseType={
    onClick:()=>void
    tariffPlan:string
    payerType:string
    resumePayment:boolean
}

const mocOperation=[
    {date:'29.03.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
     {date:'29.02.2021 0:00',sum:'500,14 P',advertisement:'', typeDeal:'', comment:"assd"},
]

const Purse :FC<PurseType> = ({onClick,tariffPlan,payerType,resumePayment}) => {
    return (
        <div>
            <div className={css.df_jc_ai}>
                <div className={css.df_ai}>
                    <Typography weight={"bold"} className={css.marginR_70}>Ваш баланс</Typography>
                    <Typography size={'big'} weight={"medium"} color={"nude"}>500,14 P</Typography>
                </div>
                <BaseButton isActive type={"secondary"} onClick={onClick}>Пополнить</BaseButton>
            </div>
            <hr color={'#F2F2F2'}/>
            <div className={css.two_column}>
                <div>
                    <Typography className={css.margin_5px} >Тарифный план :</Typography>
                    <Typography >Тип плательщика :</Typography>
                    <Typography className={css.margin_5px}>Возобновление платежа :</Typography>
                </div>
                <div>
                    <Typography className={css.margin_5px} color={'nude'}>{payerType}</Typography>
                    <Typography >{tariffPlan}</Typography>
                    <Typography className={css.margin_5px} color={'nude'}>{resumePayment? 'Включено' : 'Отключено' }</Typography>
                </div>
            </div>
            <hr color={'#F2F2F2'}/>
            <DisappearingTitle title={'Операции'} height={mocOperation.length}>
                <div className={css.table5}>
                    <Typography className={css.text14px} >Дата</Typography>
                    <Typography className={css.text14px}>Сумма</Typography>
                    <Typography className={css.text14px}>Объявление</Typography>
                    <Typography className={css.text14px}>Тип сделки</Typography>
                    <Typography className={css.text14px}>Комментарий</Typography>
                </div>
                {
                    mocOperation.map((operation,index)=>(
                        <div key={index} className={css.table5}>
                            <Typography className={css.text14px} >{operation.date}</Typography>
                            <Typography className={css.text14px}>{operation.sum}</Typography>
                            <Typography className={css.text14px}>{operation.advertisement}</Typography>
                            <Typography className={css.text14px}>{operation.typeDeal}</Typography>
                            <Typography className={css.text14px}>{operation.comment}</Typography>
                        </div>
                    ))
                }
            </DisappearingTitle>

            <hr color={'#F2F2F2'}/>
            <Typography weight={"bold"} className={css.marginTitle}>Выписки</Typography>
            <div className={css.table3}>
                <Typography className={css.text14px} >Номер</Typography>
                <Typography className={css.text14px}>Дата</Typography>
                <Typography className={css.text14px}>Сумма</Typography>
            </div>
            <hr color={'#F2F2F2'}/>
            <div className={css.table3}>
                <Typography className={css.text14px} >fddaf-20-20210-08</Typography>
                <Typography className={css.text14px}>29.03.2021 0:00</Typography>
                <Typography className={css.text14px}>23 000,00 P</Typography>
            </div>
        </div>

    );
};

export default Purse;