import React, {FC} from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import css from './Purse.module.scss'
import DisappearingTitle from "../../../../../../shared/DisappearingTitle/DisappearingTitle";
import PurseTableOperation from "./PurseTables/PurseTableOperation";
import PurseTableExtracts from "./PurseTables/PurseTableExtracts";

type PurseType={
    onClick:()=>void
    tariffPlan:string
    payerType:string
    resumePayment:boolean
}

const mocOperation=[
    {id:'1',date:'21.03.2023',time:' 0:00',sum:'501,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'2',date:'23.02.2023',time:' 0:00',sum:'500,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'3',date:'24.03.2023',time:' 0:00',sum:'540,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'4',date:'25.03.2023',time:' 0:00',sum:'503,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'5',date:'27.01.2023',time:' 0:00',sum:'500,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'6',date:'28.03.2023',time:' 0:00',sum:'500,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'7',date:'21.03.2023',time:' 0:00',sum:'505,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'8',date:'29.03.2023',time:' 0:00',sum:'520,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'9',date:'22.03.2023',time:' 0:00',sum:'500,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'10',date:'23.03.2023',time:' 0:00',sum:'510,14 P',ads:'', typeTransaction:'', comment:"assd"},
    {id:'11',date:'25.03.2023',time:' 0:00',sum:'500,14 P',ads:'', typeTransaction:'', comment:"assd"},
]
const mocExtracts=[
    {number:'1',date:'21.03.2023',sum:'501,14 P'},
    {number:'2',date:'23.02.2023',sum:'501,14 P'},
    {number:'3',date:'24.03.2023',sum:'501,14 P'},
    {number:'4',date:'25.03.2023',sum:'501,14 P'},
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
                <PurseTableOperation operations={mocOperation} />
            </DisappearingTitle>

            <hr color={'#F2F2F2'}/>
            <DisappearingTitle title={'Выписки'} height={mocExtracts.length+1}>
                <PurseTableExtracts extracts={mocExtracts} />
            </DisappearingTitle>
        </div>
    );
};

export default Purse;