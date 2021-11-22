import classNames from 'classnames';
import React, {FC, ReactNode} from 'react';
import s from './Card.module.scss';

type CardType ={
    children?:ReactNode
    className?:string
    style?:any
}

export const Card :FC<CardType> = ({children, className = '',style, ...props}) => {
    return (
        <div style={style} {...props} className={classNames(s.card, className)}>
            {children}
        </div>
    );
};