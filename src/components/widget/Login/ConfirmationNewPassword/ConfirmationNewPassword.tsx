import React, {FC} from 'react';
import css from "./ConfirmationNewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type ConfirmationNewPasswordType ={
    account:string
    onEdit:(menu:string)=>void
}

export const ConfirmationNewPassword :FC<ConfirmationNewPasswordType> = ({account,onEdit}) => {
    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.margin}>
                <Typography size={'small'} >
                   Новый пароль для аккаунта
                    <span className={css.nude}> {account} </span>
                    сохранён
                </Typography>
            </div>
            <BaseButton onClick={()=>onEdit('login')} type="secondary" isActive className={css.width}>
                <Typography size={'small'} color={'secondary'} >Войти</Typography>
            </BaseButton>

        </div>
    );
};
