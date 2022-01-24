import React, {FC, useEffect, useState} from 'react';
import css from "./ConfirmationNewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import jwt_decode from "jwt-decode";
import {useRouter} from "next/router";

type ConfirmationNewPasswordType ={
    onEdit:()=>void

}

export const ConfirmationNewPassword :FC<ConfirmationNewPasswordType> = ({onEdit}) => {
    const [email,setEmail]=useState<string>('')
    const router = useRouter()
    useEffect(()=>{
        const token = router.query.token && router.query.token;
        const nameAccount : {email:string , id:number, role:string} =  jwt_decode(token ? token.toString() :'')
        setEmail(nameAccount.email)
        // eslint-disable-next-line
    },[])



    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.margin}>
                Новый пароль для аккаунта <span className={css.separate}>{email}</span> сохранён
            </div>
            <BaseButton onClick={onEdit} type="secondary" isActive className={css.width}>
                <div>
                    <Typography size={'small'} color={'secondary'} >Войти</Typography>
                </div>

            </BaseButton>

        </div>
    );
};
