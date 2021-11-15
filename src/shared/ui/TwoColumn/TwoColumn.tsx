import React, {FC, ReactNode} from 'react';
import css from './TwoColumn.module.scss'
import classNames from "classnames";
import Typography from "../Typography/Typography";
type ThreeColumnInfoType={
    children:ReactNode
    className?:string
    title?:string
}

const TwoColumn :FC<ThreeColumnInfoType> = ({children,title,className}) => {
    return (
        <div style={{width:'100%'}}>
            {title && <Typography color="accent" weight={'bold'} >{title} </Typography>}
            <div className={classNames(css.column,className)}>
                {children}
            </div>
        </div>

    );
};

export default TwoColumn;