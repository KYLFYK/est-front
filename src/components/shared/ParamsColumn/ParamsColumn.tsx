import React, { FC } from 'react';
import css from './ParamsColumn.module.scss'
import Typography from "../Typography/Typography";
import classNames from "classnames";
type ParamsColumnType ={
    title:string
    value:string
    className?:string
}

const ParamsColumn :FC<ParamsColumnType>= ({title,value,className}) => {
    return (
        <div  className={classNames(css.column,className)}>
            <Typography size={'default'} color="accent" weight="light">{title}</Typography>
            <Typography className={css.padding_top} size={'default'}> {value} </Typography>
        </div>
    );
};

export default ParamsColumn;