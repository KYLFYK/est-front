import React, { useState } from 'react';
import css from './Login.module.scss'
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../../shared/Typography/Typography';
import BaseButton from '../../../shared/BaseButton/BaseButtons';
import {AuthApi} from "../../../../api/auth/auth";

type LoginPropsType = {
    recoveryPass?: () => void
    registration?: () => void
    onEdit:(menu:string)=>void
}

export const Login: React.FC<LoginPropsType> = ({recoveryPass, registration,onEdit}) => {
    const recoveryPassword = () => {
        recoveryPass && recoveryPass()
    }
    const newUser = () => {
        registration && registration()
    }
     const [valueAccount ,setValueAccount]=useState<string>('admin@mail.ru')
     const [valuePassword ,setValuePassword]=useState<string>('123')
    const login = async () => {
        // await AuthApi.login(valueAccount,valuePassword)
        await AuthApi.me()
    }

    return (
        <div className={css.loginContainer}>
            <LogoIcon/>
            <InputAlways  value={valueAccount} onChange={setValueAccount} title={'Логин*'}/>
            <InputPassword value={valuePassword} onChange={setValuePassword} />
            <div className={css.recovery}>
                {/*<div style={{marginRight: '35px'}} onClick={() => recoveryPassword()}>*/}
                <div style={{marginRight: '35px'}} onClick={() => onEdit('recovery')}>
                    <Typography size={'small'} className={css.text}>
                        забыли пароль?
                    </Typography>
                </div>
            </div>
            <BaseButton type="secondary" onClick={login} isActive className={css.width}>Войти</BaseButton>
            <div className={css.margin}>
                <Typography size={'small'} className={css.textFooter}>
                    Еще не зарегистрировались?
                </Typography>
                {/*<div onClick={() => newUser()}>*/}
                <div onClick={() => onEdit('registration')}>
                    <Typography size={'small'} color={'nude'} className={css.textFooter} >
                        Зарегистрироваться
                    </Typography>
                </div>
            </div>
        </div>
    );
};