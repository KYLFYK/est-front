import React, {useState} from 'react';
import Link from "next/link"
import css from './Success.module.scss'
import classNames from 'classnames';
import { BidIcon } from '../icons/BidIcon';
import Typography from '../../Typography/Typography';

export const Success = ({}) => {

    return (
        <div className={css.wrapper}>
            <div className={css.successContainer}>
                <BidIcon/>
                <Typography weight={'light'} className={classNames(css.textFooter, css.marginTop20px)}>
                    Ваше заявка отправлена в банк ПАО РНКБ. С Вами свяжутся в течение суток
                </Typography>

                <Link href={'/'}>
                    <a className={classNames(css.link, css.button, css.textFooter, css.marginTop20px)}>
                        <Typography className={css.linkTitle} size={'small'} color={'accent'}>На главную</Typography>
                    </a>
                </Link>

                <Typography weight={'light'} className={classNames(css.textFooter, css.marginTop116px)}>
                    Связаться с банком ПАО РНКБ
                </Typography>
                <div className={classNames(css.rowAlign, css.marginTop10px)}>
                    <Typography color={'disabled'} weight={'light'} className={css.textFooter}>Телефон: </Typography>
                    <Typography weight={'light'} className={css.textFooter}>8 800 234-27-27</Typography>
                </div>
                <div className={classNames(css.rowAlign, css.marginTop10px)}>
                    <Typography color={'disabled'} weight={'light'} className={css.textFooter}>Почта: </Typography>
                    <Typography weight={'light'} className={css.textFooter}>rncb@rncb.ru</Typography>
                </div>
                <div className={classNames(css.rowAlign, css.marginTop10px)}>
                    <Typography color={'disabled'} weight={'light'} className={css.textFooter}>Сайт: </Typography>
                    <Typography weight={'light'} className={css.textFooter}><a className={css.link} href='https://www.rncb.ru/' target="_blank" rel="noreferrer">rncb.ru</a></Typography>
                </div>
            </div>
        </div>
    );
};