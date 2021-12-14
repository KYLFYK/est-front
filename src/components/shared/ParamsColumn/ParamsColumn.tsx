import React, { FC } from 'react';
import css from './ParamsColumn.module.scss'
import Typography from "../Typography/Typography";
type ParamsColumnType ={
    title:string
    value:string
}

const ParamsColumn :FC<ParamsColumnType>= ({title,value}) => {
    return (
        <div  className={css.column}>
            <Typography size={'default'} color="accent" weight="light">{title}</Typography>
            <Typography className={css.padding_top} size={'default'}> {value} </Typography>
        </div>
    );
};

export default ParamsColumn;