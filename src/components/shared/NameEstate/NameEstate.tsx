import React, { ReactNode } from 'react';
import s from './NameEstate.module.scss'
import Typography from "../Typography/Typography";

type NameEstatePropsType = {
    item: string
    text?: string
    children?: ReactNode,
    variant?: "primary" | "secondary",
    className?: string,
}

export const NameEstate: React.FC<NameEstatePropsType> = ({ className, item, text, children, variant = "primary" }) => {

    return (
        <div className={s.blockAdvantage}>
            <Typography size={'header'} >
                {item}
            </Typography>
        </div>
    );
};

