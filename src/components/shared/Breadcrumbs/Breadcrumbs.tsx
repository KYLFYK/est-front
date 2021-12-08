import React, { ReactNode } from 'react';
import s from './Breadcrumbs.module.scss'
import Typography from "../Typography/Typography";
import { IOption } from '../../../utils/interfaces/general';
import classNames from 'classnames';


type BreadcrumbsPropsType = {
    items: string[]
    text?: string
    children?: ReactNode,
    variant?: "primary" | "secondary",
    className?: string,
}

export const Breadcrumbs: React.FC<BreadcrumbsPropsType> = ({ className, items, text, children, variant = "primary" }) => {

    return (
        <div className={s.blockAdvantage}>
            {items.map((i, id) => {
                return (
                    <div key={id} style={{display: 'flex'}}>
                        <Typography className={id < items.length-1 ? s.secondaryItem : s.primaryItem} size={'small'} weight={'light'} >
                            {i}
                        </Typography>
                        {id < items.length-1 && 
                            <Typography className={s.secondaryItem} size={'small'} weight={'light'} >
                                {'>'}
                            </Typography>}
                    </div>
                )
            })}
        </div>
    );
};

