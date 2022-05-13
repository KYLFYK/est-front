import React, {FC, useState} from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import css from './AccountOwnerOptions.module.scss'
import {BaseInput} from "../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import {useStoreOwnerCabinet} from "../../../../../../../mobx/role/owner/cabinet/OwnerCabinet";

type AccountOwnerOptionsType={
    onEdit:()=>void
}

const AccountOwnerOptions :FC<AccountOwnerOptionsType>= ({onEdit}) => {
    const store = useStoreOwnerCabinet();

    const [phone,setPhone]=useState<string>(store.initialData.phone)
    const [email,setEmail]=useState<string>(store.initialData.email)
    const [password,setPassword]=useState<string>('*******')

    return (
        <div className={css.marginOptionContainer}>
            <div >
                <Typography weight={"bold"} >
                    Данные регистрации
                </Typography>
                <div className={css.df_mT_20}>
                    <div>
                        <Typography color={"tertiary"} >
                            Телефон
                        </Typography>
                        <BaseInput
                            value={phone}
                            onChange={(e) => setPhone(e.currentTarget.value)}
                            disabled
                            className={css.baseInput}
                        />
                    </div>
                    <div className={css.mL_10} >
                        <Typography  color={"tertiary"}>
                            E-mail
                        </Typography>
                        <BaseInput
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            disabled
                            className={css.baseInput}
                        />
                    </div>
                </div>
                <div>
                    <div className={css.mT_12}>
                        <Typography color={"tertiary"} >
                            Пароль
                        </Typography>
                        <BaseInput
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            disabled
                            className={css.baseInput}
                        />
                    </div>
                </div>
            </div>
            <div>
                <BaseButton  className={css.baseButton} onClick={onEdit}>
                    <Typography size={"small"}>
                        Редактировать настройки
                    </Typography>
                </BaseButton>
            </div>
        </div>
    );
};

export default AccountOwnerOptions;