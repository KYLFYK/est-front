import React, {FC} from "react";
import css from "../ConfirmationNewPassword/ConfirmationNewPassword.module.scss";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type ConfirmationNewPasswordType ={
    onEdit:(menu:string)=>void
    tokenConformationEmail:string
}

export const EmailConformation :FC<ConfirmationNewPasswordType> = ({onEdit,tokenConformationEmail}) => {

    // get tokenConformation axios NEED
    console.log(tokenConformationEmail)

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