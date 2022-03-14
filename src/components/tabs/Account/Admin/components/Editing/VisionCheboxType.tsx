import React, {FC, useEffect, useState} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import {translate} from "./Editing";

type VisionTypeT = {
    vision:string
    guideInfo:Array<string>
    index:number
    onCheckedType:(v:any)=>void
}
const VisionCheckboxType:FC<VisionTypeT>  = ({vision,guideInfo,index,onCheckedType}) => {

    const [visionType,setVisionType] =useState(vision)
    const [checked,setChecked] =useState<boolean>(guideInfo.some((checked: any) => checked === visionType))

    useEffect(()=>{
        setVisionType(vision)
        setChecked(guideInfo.some((checked: any) => checked === visionType))
    },[vision,guideInfo])

    return(
        <label  className={css.label} >
            <input type={'checkbox'}
                   defaultChecked={false}
                   checked={guideInfo.some((checked: any) => checked === visionType)}
                   onChange={(e) =>{
                       onCheckedType(visionType)
                       setChecked(!e)
                   }}
            >
            </input>
            <Typography color={"tertiary"} size={"small"}>
                {translate(visionType)}
            </Typography>
        </label>
    )
};

export default VisionCheckboxType;