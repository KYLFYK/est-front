import React, { FC } from 'react';
import BackPage from "../../../../Agent/components/Others/BackPage/BackPage";
import css from './AccountOwnerOptions.module.scss'
import Typography from "../../../../../../shared/Typography/Typography";
import {BaseInput} from "../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";

type AccountOwnerEditType={
    onCurrent:(id:number)=>void
}

const AccountOwnerEdit :FC<AccountOwnerEditType> = ({onCurrent}) => {

    const backPage = () => {
        // if (
        //     store.initialData.name !== name ||
        //     store.initialData.dateBirth !== birthday ||
        //     store.initialData.phone !== phone ||
        //     store.initialData.email !== email
        // )
        //     setComparison(true);
        // else {
        //     onCurrent(current);
        // }
        onCurrent(1)
    };

    return (
        <div className={css.containerOption}>
            <div>
                <BackPage
                    onBackPage={backPage}
                    title={"Редактирование настроек"} />
            </div>
            <div className={css.mL_4}>
                <Typography weight={"bold"}>
                    Данные регистрации
                </Typography>
                <div className={css.df_mT}>
                    <BaseInput
                        label={'Телефон'}
                        className={css.mT_4}
                    />
                    <div className={css.mL_10}>
                        <BaseInput
                            label={'E-mail'}
                            className={css.mT_mL4}
                        />
                    </div>
                </div>
                <div className={css.df_mT}>
                    <BaseInput
                        label={'Старый пароль'}
                        className={css.styleInput3}
                    />
                    <div className={css.mL_10}>
                        <BaseInput
                            label={'Новый пароль'}
                            className={css.styleInput3}
                        />
                    </div>
                    <BaseButton className={css.baseButton2}>
                        <Typography color={"default"} size={"small"}>
                            Сохранить
                        </Typography>
                    </BaseButton>
                </div>
            </div>
            <div style={{display:'flex',height:'38vh',justifyContent:"end",alignItems:'end'}}>
                <div style={{display:'flex',marginBottom:"4px"}}>

                        {
                            <Typography color={"tertiary"}>
                                Есть несохранённые изменения
                            </Typography>
                        }
                    <div style={{marginLeft:"20px"}}>
                        <BaseButton type={"primary"} className={css.paddingButton}>
                            <Typography color={"secondary"} size={"small"}>
                                Сохранить
                            </Typography>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountOwnerEdit ;