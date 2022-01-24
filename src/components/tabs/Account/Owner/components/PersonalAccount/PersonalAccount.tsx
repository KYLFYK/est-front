import React, {FC, useState} from 'react';
import Typography from "../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {BaseInput} from "../../../../../shared/BaseInput/Input";
import css from './PersonalAccount.module.scss'
import UploadImage from "./UploadImage";
import {useStoreOwnerCabinet} from "../../../../../../mobx/role/owner/cabinet/OwnerCabinet";


type PersonalAccountType = {
}

const PersonalAccount: FC<PersonalAccountType> = () => {

    const store = useStoreOwnerCabinet()

    const [valueNewPassword, setValueNewPassword]=useState<string>('')

    return (
        <div>
            <Typography weight={"bold"}>{store.initialData.firstName} {store.initialData.secondName}</Typography>
            <div className={css.column}>
                <div>
                    <UploadImage image={store.initialData.image}/>
                </div>
                <div>
                    <Typography weight={"bold"}>
                        Личный данные
                    </Typography>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                           Имя
                        </Typography>
                        <BaseInput
                            value={store.initialData.firstName}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Фамилия
                        </Typography>
                        <BaseInput
                            value={store.initialData.secondName}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Дата рождения
                        </Typography>
                        <BaseInput
                            value={store.initialData.dateBirth}
                            className={css.inputWidth}
                        />
                    </div>
                    <Typography weight={"bold"} className={css.marginTop30}>
                        Контактные данные
                    </Typography>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Номер телефона
                        </Typography>
                        <BaseInput
                            value={store.initialData.phone}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Email
                        </Typography>
                        <BaseInput value={store.initialData.email} className={css.inputWidth}/>
                    </div>
                    <Typography weight={"bold"} className={css.marginTop30}>
                        Сменить пароль
                    </Typography>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Старый пароль
                        </Typography>
                        <BaseInput
                            value={store.initialData.password}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Новый пароль
                        </Typography>
                        <BaseInput
                            value={valueNewPassword}
                            onChange={e=>setValueNewPassword(e.currentTarget.value)}
                            className={css.inputWidth}
                        />
                    </div>
                    <div>
                        <BaseButton>Сохранить</BaseButton>
                    </div>
                </div>
                <div>
                    <BaseButton>Стать агентом</BaseButton>
                </div>
            </div>
        </div>
    );
};

export default PersonalAccount;