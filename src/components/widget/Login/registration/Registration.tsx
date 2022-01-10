import css from './Registration.module.scss'
import React from "react";
import {Checkbox} from "./checkbox/Checkbox";
import {InputContainerRegistration} from "./InputContainerRegistration";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../../shared/Typography/Typography';
import BaseButton from '../../../shared/BaseButton/BaseButtons';

type RegistrationPropsType ={
    enterLogin?:()=>void
    onEdit:(menu:string)=>void
}

export const Registration :React.FC<RegistrationPropsType>= ({enterLogin,onEdit}) => {

    return (
        <div className={css.registrationContainer}>
            <LogoIcon/>
            <InputContainerRegistration/>
            <Checkbox className={css.checkBoxMargin}>
                <div className={css.agreement}>
                    Принимаю <span className={css.color}>Пользовательское соглашение, Политику конфеденциальности</span>
                    , даю <span className={css.color}>согласие на обработку персональных данных</span>
                </div>
            </Checkbox>

            <div style={{width:'100%',display:"flex",justifyContent:'center',margin:'30px 0 20px 0'}}>
                <BaseButton className={css.marginButton} type={'secondary'} isActive>Зарегистрироваться</BaseButton>
            </div>

            <div className={css.marginFooter}>
                <div>
                    <Typography size={'small'}  >
                        Уже есть аккаунт?
                    </Typography>
                </div>

                {/*<div onClick={()=>enterLogin()}>*/}
                <div onClick={()=>onEdit('login')}>
                    <Typography className={css.enter} size={'small'} color={'nude'} >Войти</Typography>
                </div>
            </div>
        </div>
    );
};