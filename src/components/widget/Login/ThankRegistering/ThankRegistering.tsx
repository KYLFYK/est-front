import React, {FC} from 'react';
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import css from './ThankRegistering.module.scss'
import BaseButton from "../../../shared/BaseButton/BaseButtons";
type ThankRegisteringType ={
    // onClick:()=>void
    email:string
    onEdit:(menu:string)=>void
}

export const ThankRegistering :FC<ThankRegisteringType> = ({email,onEdit}) => {

    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.text}>
                <Typography size={'small'} >
                    Спасибо за регистрацию!
                </Typography>
                <Typography size={'small'}  >
                    <div>
                        Мы отправили вас письмо  дальнейших действиях
                        <span className={css.nude}> {email} </span>
                    </div>
                </Typography>
            </div>

            <BaseButton onClick={()=>onEdit('')} type="secondary" isActive className={css.width}>
                <Typography size={'small'} color={'secondary'}>Хорошо</Typography>
            </BaseButton>
        </div>
    );
};
