import React, {FC} from 'react';
import css from './Lines.module.scss'
import Typography from "../../Typography/Typography";
type LineV6Type={
    nameObject:string
    dateUpdate:string
    id:string
    totalArea:string
    onEdit:(url:string)=>void
    onDelete:(id:string)=>void
}

const LineV6 :FC<LineV6Type>= ({nameObject,dateUpdate,id,onEdit,onDelete,totalArea}) => {
    return (
        <div className={css.lineGridV6}>
            <div>
                <Typography  weight={"bold"}>
                    {nameObject}, {totalArea}
                </Typography>
            </div>

            <div className={css.df} style={{height:'19px'}}>
                <Typography weight={"light"} color={"tertiary"} >
                   Дата обновления:
                </Typography>
                <Typography color={"tertiary"} >
                    {dateUpdate}
                </Typography>
            </div>

            <div className={css.df} >
                <div className={css.cursor} onClick={()=>onEdit(id)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="#3D4550"/>
                    </svg>
                </div>
                <div className={css.cursor} onClick={()=>onDelete(id)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="#EB5757"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default LineV6;