import React, {FC, useEffect, useState} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import {translate} from "./Editing";
import {CheckBoxOff, CheckBoxOn} from "./CheckBox";

type VisionTypeT = {
    vision:string
    guideInfo:Array<string>
    index:number
    onCheckedType:(v:any)=>void
    disable?:boolean
}
const VisionCheckboxType:FC<VisionTypeT>  = ({vision,guideInfo,index,onCheckedType,disable}) => {

    const [visionType,setVisionType] =useState(vision)
    const [checked,setChecked] =useState<boolean>(guideInfo.some((checked: any) => checked === visionType))

    useEffect(()=>{
        setVisionType(vision)
        setChecked(guideInfo.some((checked: any) => checked === visionType))
    },[vision,guideInfo])

    return(
        <label  className={ !disable ? css.labelDisable : css.label  } >
            {
                guideInfo.some((checked: any) => checked === visionType)
                    ?<CheckBoxOn disable={disable} />
                    :<CheckBoxOff disable={disable}/>

            }
            <input type={'checkbox'}
                   defaultChecked={false}
                   checked={guideInfo.some((checked: any) => checked === visionType)}
                   onChange={(e) =>{
                       onCheckedType(visionType)
                       setChecked(!e)
                   }}
                   className={css.checkboxVision}
            >
            </input>
            <Typography color={"tertiary"} size={"small"} className={css.mL_5}>
                {translate(visionType)}
            </Typography>
        </label>
    )
};

export default VisionCheckboxType;