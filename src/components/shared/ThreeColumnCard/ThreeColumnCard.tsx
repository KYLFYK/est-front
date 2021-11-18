import React, {FC, ReactNode} from 'react';
import css from './ThreeColumnCard.module.scss'
type ThreeColumnType ={
    children:ReactNode
}

const ThreeColumnCard :FC<ThreeColumnType> = ({children}) => {
    return (
        <div className={css.column}>
            {
                children
            }
        </div>
    );
};

export default ThreeColumnCard;