import React, {FC} from 'react';
import {Card} from "../../../../../../shared/Mortgage/Card";
import Typography from "../../../../../../shared/Typography/Typography";
import css from './CardPlan.module.scss'
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";

type CardPlanType={
    title:string
    price:string
    suggestions:Array<{title:string,status:boolean}>
    typePlan:string
    statusPlan:string
}

const CardPlan :FC<CardPlanType> = ({title,suggestions,price,typePlan,statusPlan}) => {
    const styleCard = title === 'Премиум'
        ? css.card_premium
        : title === 'Стандарт'
            ? css.card_standard
            : css.card_base
    const colorText = title === 'Премиум'
        ? css.textWhite
        :''

    return (
        <Card className={styleCard} >
            <div style={{display:'flex',marginBottom:'20px'}}>
                <Typography weight={'bold'} className={colorText} >{title}</Typography>
                <Typography color={'nude'} className={css.marginLeft}>{price}</Typography>
            </div>
            {
                suggestions.map((suggest,index)=>(
                    <div key={index} style={{display:'flex',marginBottom:'10px'}}>
                        <div>
                            {suggest.status
                                ?<svg style={{marginRight:'15px'}} width="17"  height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92359 11.3657L2.54291 7.98501L1.41602 9.1119L5.92359 13.6195L15.5827 3.96039L14.4558 2.8335L5.92359 11.3657Z" fill="#219653"/>
                                </svg>
                                :<svg style={{marginRight:'15px'}} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3.30929L13.6907 2L8.5 7.19071L3.30929 2L2 3.30929L7.19071 8.5L2 13.6907L3.30929 15L8.5 9.80929L13.6907 15L15 13.6907L9.80929 8.5L15 3.30929Z" fill="#EB5757"/>
                                </svg>
                            }
                        </div>
                        <div >
                            <Typography className={colorText}>
                                {suggest.title}
                            </Typography>
                        </div>
                    </div>
                ))
            }
            {
                typePlan !== statusPlan
                    ?  <div>
                        <BaseButton className={css.buttonStyle}>Выбрать пакет</BaseButton>
                    </div>
                    : <div style={{textAlign:'center'}}>
                        <div style={{margin:'10px',cursor:'pointer'}}>
                            <Typography weight={"bold"}>Выбрано</Typography>
                        </div>
                        <div style={{margin:'10px',cursor:'pointer'}}>
                            <Typography color={"tertiary"}>Отменить подписку</Typography>
                        </div>
                    </div>
            }
        </Card>
    );
};

export default CardPlan;