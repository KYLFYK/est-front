import React, { ReactNode } from 'react';
import s from './AdressEstate.module.scss'
import Typography from "../Typography/Typography";

type AdressEstatePropsType = {
    item: string
    text?: string
    children?: ReactNode,
    variant?: "primary" | "secondary",
    className?: string,
}

export const AdressEstate: React.FC<AdressEstatePropsType> = ({ className, item, text, children, variant = "primary" }) => {

    return (
        <div className={s.blockAdvantage}>
            <Typography className={s.item} size={'small'} weight={'light'}>
                {item}
            </Typography>
        </div>
    );
};

