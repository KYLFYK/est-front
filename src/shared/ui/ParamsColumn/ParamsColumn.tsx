import React, { FC } from 'react';
import css from './ParamsColumn.module.scss'
import Typography from "../Typography/Typography";
type ParamsColumnType ={
    title:string
    value:string
    key:string
}

const ParamsColumn :FC<ParamsColumnType>= ({title,value,key}) => {
    return (
        <div key={key} className={css.column}>
            <Typography size={'default'} color="accent" weight="light">{title}</Typography>
            <Typography size={'default'}> {value} </Typography>
        </div>
    );
};

export default ParamsColumn;