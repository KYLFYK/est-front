import React, {useState, Dispatch, SetStateAction} from 'react';
import css from './Bid.module.scss'
import classNames from 'classnames';
import {InputAlways} from "./InputAlways";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../Typography/Typography';
import BaseButton from '../../BaseButton/BaseButtons';

type BidPropsType = {
    setBidSuccess: Dispatch<SetStateAction<boolean>>
    setModal: Dispatch<SetStateAction<boolean>>
}

export const Bid: React.FC<BidPropsType> = ({setBidSuccess, setModal}) => {

    const [inputs, setInputs] = useState([
        {title: 'ФИО', error: false, value: ''}, 
        {title: 'Телефон', error: false, value: ''}, 
        {title: 'E-mail', error: false, value: ''}
    ])

    const swapView = () => {
        //TODO additional check: if errors === false..

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

            {inputs.map((i, id) => <InputAlways className={css.margin} 
                                                key={id} id={id} 
                                                title={i.title} 
                                                error={i.error} 
                                                value={i.value} 
                                                inputs={inputs} 
                                                setInputs={setInputs}
                                    />
            )}

            <BaseButton type="secondary" isActive className={classNames(css.margin, css.width)} onClick={swapView}>
                <Typography color={'secondary'} weight={'medium'} className={css.textFooter}>
                    Сохранить
                </Typography>
            </BaseButton>
        </div>
    );
};