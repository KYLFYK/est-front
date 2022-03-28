import React, {FC, useState} from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import {BaseInput} from "../../../../../../shared/BaseInput/Input";
import {Checkbox} from "../../../../../../widget/Login/registration/checkbox/Checkbox";
import BackPage from "../../Others/BackPage/BackPage";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import css from './Purse.module.scss'
import BlockWallet from "./BlockWallet";

type AddingMoneyWalletType = {
    onClick: () => void
}

const arrMOc = [
    {title:'Банковская карта',info:'Без комиссии',type:'Bank'},
    {title:'Кошелек',info:'Без комиссии',type:'Wallet'},
    {title:'Сервис 1 ',info:'Без комиссии',type:'Сash'},
    {title:'Сервис 2',info:'Без комиссии',type:''},
    {title:'Сервис 3',info:'Без комиссии',type:''},
    {title:'Сервис 4',info:'Без комиссии',type:''},
]

const AddingMoneyWallet: FC<AddingMoneyWalletType> = ({onClick}) => {
    const [value, setValue] = useState<string>('')
    return (
        <div>
            <BackPage onBackPage={onClick} title={'Пополнение баланса'}/>
            <div className={css.df_ai}>
                <Typography className={css.marginTypo}>Введите сумму</Typography>
                <div className={css.marginButton}>
                    <BaseInput
                        value={value}
                        onChange={e => setValue(e.currentTarget.value)}
                    />
                </div>
                <Checkbox className={css.margin_0}>
                    <Typography>Подключить автоплатеж</Typography>
                </Checkbox>
            </div>

            <div className={css.cardStyle}>
                <div className={css.gridColumn}>
                    {
                        arrMOc.map(({title,info,type},index) => (
                            <div key={index} className={css.item}>
                                <BlockWallet typeIcon={type} title={title} info={info}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Typography className={css.marginB_10}>Введите промокод:</Typography>
            <div className={css.df_mB20}>
                <div className={css.marginR}>
                    <BaseInput
                        value={value}
                        onChange={e => setValue(e.currentTarget.value)}
                    />
                </div>

                <BaseButton>Применить</BaseButton>
            </div>
            <BaseButton isActive type={"secondary"} >Применить</BaseButton>

        </div>
    );
};

export default AddingMoneyWallet;