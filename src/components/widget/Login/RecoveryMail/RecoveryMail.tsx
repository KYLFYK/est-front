import {FC} from "react";
import {LogoIcon} from "../../../../icons/Header/LogoIcon";
import Typography from "../../../shared/Typography/Typography";
import css from './RecoveryMail.module.scss'
import BaseButton from "../../../shared/BaseButton/BaseButtons";

type RecoveryMailType={
    // onClick:()=>void
    email:string
    onEdit:(menu:string)=>void
}

export const RecoveryMail :FC<RecoveryMailType>  = ({email,onEdit}) => {
    return (
        <div className={css.container}>
            <LogoIcon/>
            <div className={css.margin}>
                Мы отправили Вам письмо для восстановления пароля на почту <span className={css.separate}>{email}</span>
            </div>
            <BaseButton onClick={()=>onEdit('')} type="secondary" isActive className={css.width}>
                <Typography size={'small'} color={'secondary'} >Хорошо</Typography>
            </BaseButton>
        </div>
    );
};