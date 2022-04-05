import React, { FC } from 'react';
import css from './scroll.module.scss'

type ScrollType={
    children:React.ReactNode
    height:string // '200'
}

const Scroll :FC<ScrollType> = ({children,height}) => {
    return (
        <div className={css.list} style={{height: `calc(100vh - ${height}px)`}}>
            {
                children
            }
        </div>
    );
};

export default Scroll;