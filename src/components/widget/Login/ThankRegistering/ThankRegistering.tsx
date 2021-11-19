import React, {FC} from 'react';
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import css from './ThankRegistering.module.scss'
import BaseButton from "../../../shared/BaseButton/BaseButtons";
type ThankRegisteringType ={
    onClick:()=>void
    email:string
}

export const ThankRegistering :FC<ThankRegisteringType> = ({onClick,email}) => {
    const recoveryPassword = () => {

    }
    const newUser = () => {

    }
    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.text}>
                <Typography size={'small'} >
                    Спасибо за регистрацию!
                </Typography>
                <Typography size={'small'}  >
                    Мы отправили вас письмо  дальнейших действиях
                    <span className={css.nude}> {email} </span>
                </Typography>
            </div>

            <BaseButton type="secondary" isActive className={css.width}>
                <Typography size={'small'} color={'secondary'}>Хорошо</Typography>
            </BaseButton>
        </div>
    );
};
