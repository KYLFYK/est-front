import React from 'react';
import css from './Login.module.scss'
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../../shared/Typography/Typography';
import BaseButton from '../../../shared/BaseButton/BaseButtons';

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
    return (
        <div className={css.loginContainer}>
            <LogoIcon/>
            <InputAlways title={'Логин*'}/>
            <InputPassword/>
            <div className={css.recovery}>
                {/*<div style={{marginRight: '35px'}} onClick={() => recoveryPassword()}>*/}
                <div style={{marginRight: '35px'}} onClick={() => onEdit('recovery')}>
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