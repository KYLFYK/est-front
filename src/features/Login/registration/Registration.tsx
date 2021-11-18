import css from './Registration.module.scss'
import {LogoIcon} from "../../../shared/icons/Header/LogoIcon";
import BaseButton from "../../../shared/ui/BaseButton/BaseButtons";
import React from "react";
import {Checkbox} from "./checkbox/Checkbox";
import {InputContainerRegistration} from "./InputContainerRegistration";
import Typography from "../../../shared/ui/Typography/Typography";

type RegistrationPropsType ={
    enterLogin:()=>void
}

export const Registration :React.FC<RegistrationPropsType>= ({enterLogin}) => {

    return (
        <div className={css.registrationContainer}>
            <LogoIcon/>
            <InputContainerRegistration/>
            <Checkbox className={css.checkBoxMargin}>
                <div>
                    <Typography size={'small'} color={'nude'} >
                    <span className={css.highlighting}>Принимаю </span>
                    Пользовательское соглашение, Политику конфеденциальности,
                    <span className={css.highlighting}> даю </span>
                    согласие на обработку персоальных данных.
                    </Typography>
                </div>
            </Checkbox>

            <div style={{width:'100%',display:"flex",justifyContent:'center',margin:'8px 0'}}>
                <BaseButton className={css.marginButton} type={'secondary'} isActive>Зарегистрироваться</BaseButton>
            </div>

            <div className={css.marginFooter}>
                <div>
                    <Typography size={'small'}  >
                        Уже есть аккаунт?
                    </Typography>
                </div>

                <div onClick={()=>enterLogin()}>
                    <Typography size={'small'} color={'nude'} >Войти</Typography>
                </div>
            </div>
        </div>
    );
};