import React, {FC, useEffect} from "react";
import css from "../ConfirmationNewPassword/ConfirmationNewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import {AuthApi} from "../../../../api/auth/auth";

type ConfirmationNewPasswordType ={
    onEdit:(menu:string)=>void
    tokenConformationEmail?:any
}

export const EmailConformation :FC<ConfirmationNewPasswordType> = ({onEdit,tokenConformationEmail}) => {

    // get tokenConformation axios NEED
    console.log(tokenConformationEmail)

    const emailConformation = async (e:any) =>{
        console.log(e)
        const res = await AuthApi.confirmEmail(e)
        console.log('res',res)
    }

    useEffect(()=>{
        emailConformation(tokenConformationEmail)
    },[]) //eslint-disable-line
    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.margin}>
                <Typography size={'small'} >
                   Адрес электронной почты подтвержден
                </Typography>
            </div>
            <BaseButton onClick={()=>onEdit('login')} type="secondary" isActive className={css.width}>
                <Typography size={'small'} color={'secondary'}  >Войти</Typography>
            </BaseButton>

        </div>
    );
};