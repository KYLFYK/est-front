import React, { ReactNode } from 'react';
import css from './Advantage.module.scss'
import Typography from "../Typography/Typography";
import { IOption } from '../../../utils/interfaces/general';
import classNames from 'classnames';


type AdvantagePropsType = {
    title: string
    text?: string
    children: ReactNode,
    variant?: "primary" | "secondary"
}

export const Advantage: React.FC<AdvantagePropsType> = ({ title, text, children, variant = "primary" }) => {
    const titleWeight = variant === 'primary' ? "bold" : "regular"
    const titleSize = variant === 'primary' ? "medium" : "default"
    const textWeight = variant === 'primary' ? "regular" : "light"

    return (
        <div className={css.blockAdvantage}>
            <div className={css.icon}>
                {
                    children
                }
            </div>
            <div className={classNames(css.text, {[css.autoWidth]: variant === 'secondary'})}>
                <Typography weight={titleWeight} size={titleSize}>
                    {title}
                </Typography>
                {text && <Typography weight={textWeight}>
                    {text}
                </Typography>
                }
            </div>
        </div>
    );
};

