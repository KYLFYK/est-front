import React, {FC, useEffect, useState} from "react";
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
    let res
    const [error,setError]=useState<string>('')

    const emailConformation = async (e:any) =>{
         res = await AuthApi.confirmEmail(e)
        if(res ===400){
            setError('Истекло время отправления запроса.')
        }
    }

    useEffect(()=>{
        emailConformation(tokenConformationEmail)
    },[]) //eslint-disable-line
    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.margin}>
                <Typography >
                    {
                        error === ''
                            ?<div>Адрес электронной почты подтвержден</div>
                            : <div>{error}</div>
                    }
                </Typography>
            </div>
            <BaseButton onClick={()=>onEdit('login')} type="secondary" isActive className={css.width}>
                <Typography size={'small'} color={'secondary'}  >Войти</Typography>
            </BaseButton>

        </div>
    );
};