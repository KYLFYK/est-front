import React, { FC } from 'react';
import Typography from "../../Typography/Typography";
import css from './Lines.module.scss'
type LineV9Type = {
    address:string
}

const LineV9 :FC<LineV9Type> = ({address}) => {
    return (
        <div className={css.df}>
            <Typography weight={"light"}>Адрес:</Typography>
            <Typography>{address}</Typography>
        </div>
    );
};

export default LineV9;