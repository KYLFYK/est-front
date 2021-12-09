import React, { ReactNode } from 'react';
import s from './Views.module.scss'
import Typography from "../Typography/Typography";
import ViewIcon from '../../../icons/ViewIcon/ViewIcon';
import { IOption } from '../../../utils/interfaces/general';
import classNames from 'classnames';


type ViewsPropsType = {
    items: string[]
    text?: string
    children?: ReactNode,
    variant?: "primary" | "secondary",
    className?: string,
}

export const Views: React.FC<ViewsPropsType> = ({ className, items, text, children, variant = "primary" }) => {

    return (
        <div className={s.blockAdvantage}>
            {items.map((i, id) => {
                return (
                    <div key={id} style={{display: 'flex'}}>
                        <Typography icon={id===1 && <ViewIcon/>} iconPosition={'start'} className={s.item} size={'small'} weight={'light'} >
                            {i}
                        </Typography>
                    </div>
                )
            })}
        </div>
    );
};

