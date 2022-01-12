import React, {FC, useState} from 'react';
import css from "./NewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type NewPasswordType={
    account:string
    onEdit:(menu:string)=>void
    tokenReset?:string
    password:string
    onPassword:(e:string)=>void
}

const NewPassword :FC<NewPasswordType> = ({account,onEdit,tokenReset,password,onPassword}) => {

    const newPassword = () =>{
        onEdit('confirmationNewPassword')
    }

    return (
        <div className={css.recovery}>
            <LogoIcon/>
            <div className={css.marginTypo}>
                Придумайте новый пароль для аккаунта <span className={css.separate}>{account}</span>
            </div>
            <div className={css.margin}>
                <InputPassword value={password} onChange={onPassword}/>
            </div>
            <BaseButton onClick={newPassword} type="secondary" isActive className={css.widthButton}>Сохранить</BaseButton>
            <div className={css.widthButton}>
                <BaseButton onClick={newPassword} type="secondary" className={css.widthButton}>Отмена</BaseButton>
            </div>

        </div>
    );
};

export default NewPassword;