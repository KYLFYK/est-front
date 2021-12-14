import React, {FC, ReactNode, useState} from 'react';
import Typography from "../Typography/Typography";
import css from './DisappearingTitle.module.scss'
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
type DisappearingTitleType={
    title:string
    children:ReactNode
    height:number
}

const DisappearingTitle :FC<DisappearingTitleType> = ({title,children,height}) => {
    const [edit ,setEdit]=useState<boolean>(false)

    return (
        <>
            <div onClick={()=>setEdit(!edit)} style={{display:'flex'}} >
                <Typography className={css.title} weight={"bold"}>
                    {title}
                </Typography>
                <KeyboardArrowDownIcon className={css.title} fontSize={'small'}
                                       style={{
                                           color: edit ? '#C5A28E': '#96A2B5',
                                           transform: edit ?'rotate(180deg)':''
                                       }}
                />
            </div>
            <div  style={{height:edit? `${height*45+50}px` :''}} className={classNames( css.hiddenBlock )}>
                    {
                        children
                    }
            </div>
        </>
    );
};

export default DisappearingTitle;