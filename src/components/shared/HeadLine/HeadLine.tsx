import React, {FC, ReactNode} from 'react';
import Typography from "../Typography/Typography";
import css from './HeadLine.module.scss'

type HeadLineType = {
    children:ReactNode
    title:string
}

const HeadLine :FC<HeadLineType> = ({children,title}) => {
    return (
        <>
            <div className={css.margin}>
                <Typography size={'subheader'} className={css.size} weight="bold" >
                    {title}
                </Typography>
            </div>
            {
                children
            }
        </>
    );
};

export default HeadLine;