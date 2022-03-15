import React, {FC} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import {GuideInfoType} from "./GuidesItem";
import {CheckBoxOff, CheckBoxOn} from "./CheckBox";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
type TypeObjectT={
    index:number
    guide:GuideInfoType
    onClick:(e:string | null,index:number,guide:any)=>void
    activeMenu:string|null
    disable?:boolean
    onDelete?:()=>void
}

const TypeObjectEdit : FC<TypeObjectT> = ({guide,onClick,activeMenu,index,disable,onDelete}) => {

    const onActiveMenu = (e: string | null,guide: any) => {
        onClick(e,index,guide)
    }
    return(
        <div>
            <div className={css.grid_4}>
                <div onClick={onDelete}>
                    <DeleteOutlineIcon
                        fontSize={'small'}
                        className={disable ? css.colorDelete : css.colorDisable}
                    />
                </div>
                <div onClick={() => onActiveMenu(guide.value, guide)}>
                    <Typography
                        className={css.guide}
                        size={"small"}
                        color={activeMenu === guide.value ? 'nude' : "tertiary"}
                    >
                        {guide.type_ru} -
                        {guide.value}
                    </Typography>
                </div>
                <div className={css.checkbox}>
                    {
                        guide.isMulti
                            ?<CheckBoxOn disable={false}/>
                            :<CheckBoxOff disable={false}/>
                    }

                    {/*<input type={'checkbox'} checked={guide.isMulti}>*/}
                    {/*</input>*/}
                </div>
            </div>
        </div>
    )
};

export default TypeObjectEdit;