import React, {useState, Dispatch, SetStateAction} from 'react';
import { observer } from "mobx-react-lite";
import css from './Bid.module.scss';
import classNames from 'classnames';
import {InputAlways} from "./InputAlways";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../Typography/Typography';
import BaseButton from '../../BaseButton/BaseButtons';
import {useMortGageStore} from '../../../../mobx/role/bank/mortgage/MortGage';

type BidPropsType = {
    setBidSuccess: Dispatch<SetStateAction<boolean>>
    setModal: Dispatch<SetStateAction<boolean>>
}

export const Bid: React.FC<BidPropsType> = observer(({setBidSuccess, setModal}) => {

    const store = useMortGageStore()
    console.log(store.get())
    const [inputs, setInputs] = useState([
        {title: 'ФИО', error: false, value: ''}, 
        {title: 'Телефон', error: false, value: ''}, 
        {title: 'E-mail', error: false, value: ''}
    ])

    const setFIO = (value: any) => {
        store.setFIO(value)
    }

    const setPhone = (value: any) => {
        store.setPhone(value)
    }

    const setEmail = (value: any) => {
        store.setEmail(value)
    }
    
    const swapView = () => {
        //TODO additional check: if errors === false..
        store.postLead()
        setBidSuccess(true)
        setModal(false)
    }

    return (
        <div className={css.bidContainer}>
            <LogoIcon/>
            <div className={css.margin}>
                <Typography className={css.textFooter}>
                    Оставьте свои контактные данные, чтобы банк принял заявку
                </Typography>
            </div>

            <InputAlways className={css.margin} 
                title={'ФИО'} 
                error={false} 
                value={store.initialData.createPayload.fio} 
                setInputs={setFIO}
            />
            <InputAlways className={css.margin} 
                title={'Телефон'} 
                error={false} 
                value={store.initialData.createPayload.phone} 
                setInputs={setPhone}
            />
            <InputAlways className={css.margin} 
                title={'E-mail'} 
                error={false} 
                value={store.initialData.createPayload.email} 
                setInputs={setEmail}
            />


            <BaseButton type="secondary" isActive className={classNames(css.margin, css.width)} onClick={swapView}>
                <Typography color={'secondary'} weight={'medium'} className={css.textFooter}>
                    Сохранить
                </Typography>
            </BaseButton>
        </div>
    );
});