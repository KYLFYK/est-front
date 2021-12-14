import React, {FC, ReactNode, useState} from 'react';
import Typography from "../Typography/Typography";
import css from './DisappearingTitle.module.scss'
import classNames from "classnames";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BaseDatePicker from "../BaseDatePicker/BaseDatePicker";
type DisappearingTitleType={
    title:string
    children:ReactNode
    height:number

    DatePicker?:boolean
    valueDateStart?:any
    onValueDateStart?:(date:Date)=>void
    valueDateEnd?:any
    onValueDateEnd?:(date:Date)=>void
}

const DisappearingTitle :FC<DisappearingTitleType> = ({
                                                          title,
                                                          children,
                                                          height,
                                                          DatePicker,
                                                          valueDateStart,
                                                          valueDateEnd,
                                                          onValueDateStart,
                                                          onValueDateEnd}) => {
    const [edit ,setEdit]=useState<boolean>(false)

    return (
        <>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}  >
                <div onClick={()=>setEdit(!edit)} style={{display:'flex'}}>
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
                <div>
                    {
                        DatePicker && <BaseDatePicker
                            endDate={valueDateEnd}
                            startDate={valueDateStart}
                            onChangeEndDate={e=>{
                                onValueDateEnd && onValueDateEnd(e)
                            }}
                            onChangeStartDate={e=>{
                                onValueDateStart && onValueDateStart(e)
                            }}  />
                    }
                </div>

            </div>
            <div  style={{height:edit? `${height*60+50}px` :''}} className={classNames( css.hiddenBlock )}>
                    {
                        children
                    }
            </div>
        </>
    );
};

export default DisappearingTitle;