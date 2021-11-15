import React, {ReactNode} from 'react';
import css from './Advantage.module.scss'
import Typography from "../Typography/Typography";


type AdvantagePropsType = {
    title: string
    text: string
    children:ReactNode
}

export const Advantage: React.FC<AdvantagePropsType> = ({title, text,children}) => {
    return (
        <div className={css.blockAdvantage}>
            <div>
                {
                    children
                }
            </div>
            <div className={css.text}>
                <Typography  weight="bold">
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </div>
        </div>
    );
};

