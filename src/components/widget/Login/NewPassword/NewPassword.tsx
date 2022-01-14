import React, {FC} from 'react';
import css from "./NewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import {InputPassword} from "../input/InputPassword";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import jwt_decode from "jwt-decode";
import {AuthApi} from "../../../../api/auth/auth";

type NewPasswordType={
    onEdit:(menu:string)=>void
    tokenReset?:any
    password:string
    onPassword:(e:string)=>void
}

const NewPassword :FC<NewPasswordType> = ({onEdit,tokenReset,password,onPassword}) => {


    const nameAccount : {email:string , id:number, role:string} =  jwt_decode(tokenReset)
    console.log(nameAccount.email)

    const newPassword = async () =>{
        if(password.trim() !== ''){
            const res =  await AuthApi.changePassword(password,nameAccount.id,tokenReset)
            if(res===403){
                alert('Истекло время обновления пароля')
            } else{
                onEdit('confirmationNewPassword')
            }
        }

    }

    return (
        <div className={css.recovery}>
            <LogoIcon/>
            <div className={css.marginTypo}>
                Придумайте новый пароль для аккаунта <span className={css.separate}>{nameAccount.email}</span>
            </div>
            <div className={css.margin}>
                <InputPassword value={password} onChange={onPassword}/>
            </div>
            <BaseButton onClick={newPassword} type="secondary" isActive className={css.widthButton}>Сохранить</BaseButton>
            <div className={css.widthButton}>
                <BaseButton onClick={newPassword} type="secondary" className={css.widthButton}>Отмена</BaseButton>
            </div>

        </div>
    );
};

export default NewPassword;