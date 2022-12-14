import React, {FC} from 'react';
import Typography from "../../Typography/Typography";
import css from "./Lines.module.scss";

type LineV8Type={
    id:string
    onEdit:(id:string)=>void
    onDelete:(id:string)=>void
    status:string
    nameObject:string
    totalArea:string
}

const LineV8 :FC<LineV8Type>= ({id,nameObject,totalArea,status,onEdit,onDelete}) => {
    return (
        <div className={css.lineGridV8}>
            <div className={css.df} style={{height:"19px"}}>
                <Typography className={css.paddingRight_30} weight={"bold"}>
                    {nameObject}, {totalArea}
                </Typography>
                <Typography color={status ==='отклонено'? "red" : "tertiary"}>
                    {status}
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

export default LineV8;