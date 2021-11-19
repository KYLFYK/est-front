import React, {FC} from 'react';
import css from "./NewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import {InputAlways} from "../input/InputAlways";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type NewPasswordType={
    account:string
}

const NewPassword :FC<NewPasswordType> = ({account}) => {
    return (
        <div className={css.recovery}>
            <LogoIcon/>
            <Typography size={'small'}>
                Придумайте новый пароль для аккаунта
                <span className={css.nude}> {account} </span>
            </Typography>
            <div className={css.margin}>
                <InputAlways title={'Пароль'} className={css.widthInput}/>
            </div>
            <BaseButton type="secondary" isActive className={css.widthButton}>Восстанивить пароль</BaseButton>
            <div onClick={()=>console.log('click')} className={css.widthButton}>
                <BaseButton type="secondary" className={css.widthButton}>Отмена</BaseButton>
            </div>

        </div>
    );
};

export default NewPassword;