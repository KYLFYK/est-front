import {FC} from "react";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import css from './AddressConfirmation.module.scss'
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type AddressConfirmationType={
    onClick?:()=>void
    onEdit:(menu:string)=>void
}

export const AddressConfirmation :FC<AddressConfirmationType>  = ({onClick,onEdit}) => {
        return (
            <div className={css.container}>
                <LogoIcon/>
                <div className={css.margin}>
                    <Typography size={'small'} >
                       Адрес электронной почты подтвержден
                    </Typography>
                </div>
                <BaseButton onClick={()=>onEdit('login')} type="secondary" isActive className={css.width}>
                    <Typography size={'small'} color={'secondary'} >Войти</Typography>
                </BaseButton>
            </div>
        );
    };
