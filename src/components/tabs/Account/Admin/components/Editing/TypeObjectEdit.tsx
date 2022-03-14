import React, {FC} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import {GuideInfoType} from "./GuidesItem";

type TypeObjectT={
    index:number
    guide:GuideInfoType
    onClick:(e:string | null,index:number,guide:any)=>void
    activeMenu:string|null
}

const TypeObjectEdit : FC<TypeObjectT> = ({guide,onClick,activeMenu,index}) => {

    const onActiveMenu = (e: string | null,guide: any) => {
        onClick(e,index,guide)
    }
    return(
        <div>
            <div className={css.grid_3}>
                <div onClick={() => onActiveMenu(guide.value, guide)}>
                    <Typography
                        className={css.guide}
                        size={"small"}
                        color={activeMenu === guide.value ? 'nude' : "tertiary"}
                    >
                        {guide.value}
                    </Typography>
                </div>
                <div className={css.checkbox}>
                    <input type={'checkbox'} checked={guide.isMulti}>
                    </input>
                </div>
            </div>
        </div>
    )
};

export default TypeObjectEdit;