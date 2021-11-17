import {LogoIcon} from "../../../shared/icons/Header/LogoIcon";
import css from './recovery.module.scss'
import BaseButton from "../../../shared/ui/BaseButton/BaseButtons";
import React from "react";
import Typography from "../../../shared/ui/Typography/Typography";
import {InputAlways} from "../input/InputAlways";

type RecoveryPropsType = {
    recoveryPassword:()=>void
}

export const Recovery :React.FC<RecoveryPropsType> = ({recoveryPassword}) => {
    const backRecovery = () =>{
        recoveryPassword()
    }
    return (
        <div className={css.recovery}>
            <LogoIcon/>
            <Typography size={'small'}>
                Чтобы восстановить пароль, напишите email, с которым вы регистрировались
            </Typography>
            <div className={css.margin}>
                <InputAlways title={'Email*'} className={css.widthInput}/>
            </div>
            <BaseButton type="secondary" isActive className={css.widthButton}>Восстанивить пароль</BaseButton>
            <div onClick={backRecovery} className={css.widthButton}>
                <BaseButton type="secondary" className={css.widthButton}>Отмена</BaseButton>
            </div>

        </div>
    );
};