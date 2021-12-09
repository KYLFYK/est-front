import React, {FC, ReactNode, useState} from 'react';
import Typography from "../Typography/Typography";
import css from './DisappearingTitle.module.scss'
import classNames from "classnames";
type DisappearingTitleType={
    title:string
    children:ReactNode
    height:number
}

const DisappearingTitle :FC<DisappearingTitleType> = ({title,children,height}) => {
    const [edit ,setEdit]=useState<boolean>(false)

    return (
        <>
            <div onClick={()=>setEdit(!edit)} >
                <Typography className={css.title} weight={"bold"}>
                    {title}
                </Typography>
            </div>
            <div  style={{height:edit? `${height*40+50}px` :''}} className={classNames( css.hiddenBlock )}>
                    {
                        children
                    }
            </div>
        </>
    );
};

export default DisappearingTitle;