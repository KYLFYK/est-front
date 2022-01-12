import css from './recovery.module.scss'
import React, { useState } from "react";
import {InputAlways} from "../input/InputAlways";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../../shared/Typography/Typography';
import BaseButton from '../../../shared/BaseButton/BaseButtons';
import {AuthApi} from "../../../../api/auth/auth";

type RecoveryPropsType = {
    onEdit:(menu:string)=>void
    email:string
    onValueEmail:(email:string)=>void
}

export const Recovery :React.FC<RecoveryPropsType> = ({onEdit,email,onValueEmail}) => {

    const backRecovery = async () =>{
        console.log(email)
        onEdit('recoveryMail')
        await AuthApi.resetPassword(email)
    }
    return (
        <div className={css.recovery}>
            <LogoIcon/>
            <Typography size={'small'} className={css.marginTypo}>
                Чтобы восстановить пароль, напишите email, с которым вы регистрировались
            </Typography>
            <div className={css.margin}>
                <InputAlways value={email}  onChange={onValueEmail} title={'Email*'} className={css.widthInput}/>
            </div>
            <BaseButton
                onClick={backRecovery}
                type="secondary"
                isActive
                className={css.widthButton}
            >
                Восстанивить пароль
            </BaseButton>
            {/*<div onClick={backRecovery} className={css.widthButton}>*/}
            <div onClick={()=>onEdit('login')} className={css.widthButton}>
                <BaseButton type="secondary" className={css.widthButton}>Отмена</BaseButton>
            </div>

        </div>
    );
};