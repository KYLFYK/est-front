import React from 'react';
import css from './Login.module.scss'
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../../shared/Typography/Typography';
import BaseButton from '../../../shared/BaseButton/BaseButtons';

type LoginPropsType = {
    recoveryPass: () => void
    registration: () => void
}

export const Login: React.FC<LoginPropsType> = ({recoveryPass, registration}) => {
    const recoveryPassword = () => {
        recoveryPass()
    }
    const newUser = () => {
        registration()
    }
    return (
        <div className={css.loginContainer}>
            <LogoIcon/>
            <InputAlways title={'Логин*'}/>
            <InputPassword/>
            <div className={css.recovery}>
                <div style={{marginRight: '35px'}} onClick={() => recoveryPassword()}>
                    <Typography size={'small'} className={css.text}>
                        забыли пароль?
                    </Typography>
                </div>
            </div>
            <BaseButton type="secondary" isActive className={css.width}>Войти</BaseButton>
            <div className={css.margin}>
                <Typography size={'small'} className={css.textFooter}>
                    Еще не зарегистрировались?
                </Typography>
                <div onClick={() => newUser()}>
                    <Typography size={'small'} color={'nude'} className={css.textFooter} >
                        Зарегистрироваться
                    </Typography>
                </div>
            </div>


        </div>
    );
};