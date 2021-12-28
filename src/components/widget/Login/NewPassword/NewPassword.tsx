import React, {FC, useState} from 'react';
import css from "./NewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import {InputAlways} from "../input/InputAlways";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type NewPasswordType={
    account:string
    onEdit:(menu:string)=>void
}

const NewPassword :FC<NewPasswordType> = ({account,onEdit}) => {
    const [value , setValue]=useState<string>('')
    return (
        <div className={css.recovery}>
            <LogoIcon/>
            <Typography size={'small'} className={css.marginTypo}>
                Придумайте новый пароль для аккаунта
                <span className={css.nude}> {account} </span>
            </Typography>
            <div className={css.margin}>
                <InputAlways value={value} onChange={setValue} title={'Пароль'} className={css.widthInput}/>
            </div>
            <BaseButton onClick={()=>onEdit('confirmationNewPassword')} type="secondary" isActive className={css.widthButton}>Сохранить</BaseButton>
            <div className={css.widthButton}>
                <BaseButton onClick={()=>onEdit('')} type="secondary" className={css.widthButton}>Отмена</BaseButton>
            </div>

        </div>
    );
};

export default NewPassword;