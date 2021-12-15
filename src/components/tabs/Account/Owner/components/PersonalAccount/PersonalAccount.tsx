import React, {FC, useState} from 'react';
import Typography from "../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {BaseInput} from "../../../../../shared/BaseInput/Input";
import css from './PersonalAccount.module.scss'
import UploadImage from "./UploadImage";

type PersonalAccountType = {
    personalAccount:{
        firstName:string
        secondName:string
        dateBirth:string
        phone:string
        email:string
        password:string
        image:string
    }

}

const PersonalAccount: FC<PersonalAccountType> = ({personalAccount}) => {

    const [valueNewPassword, setValueNewPassword]=useState<string>('')

    return (
        <div>
            <Typography weight={"bold"}>{personalAccount.firstName} {personalAccount.secondName}</Typography>
            <div className={css.column}>
                <div>
                    <UploadImage image={personalAccount.image}/>
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
                            value={personalAccount.firstName}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Фамилия
                        </Typography>
                        <BaseInput
                            value={personalAccount.secondName}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Дата рождения
                        </Typography>
                        <BaseInput
                            value={personalAccount.dateBirth}
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
                            value={personalAccount.phone}
                            className={css.inputWidth}
                        />
                    </div>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Email
                        </Typography>
                        <BaseInput value={personalAccount.email} className={css.inputWidth}/>
                    </div>
                    <Typography weight={"bold"} className={css.marginTop30}>
                        Сменить пароль
                    </Typography>
                    <div className={css.df}>
                        <Typography className={css.typographyWidth}>
                            Старый пароль
                        </Typography>
                        <BaseInput
                            value={personalAccount.password}
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