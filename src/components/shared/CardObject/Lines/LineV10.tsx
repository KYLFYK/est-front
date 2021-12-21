import React, {FC} from 'react';
import Typography from "../../Typography/Typography";
import css from './Lines.module.scss'
type LineV10Type={
    nameObject:string
    totalArea:string
    dateArchive:string
    onDelete:(id:string)=>void
    id:string
}

const LineV10 :FC<LineV10Type> = ({nameObject,totalArea,dateArchive,id,onDelete}) => {
    return (
        <div className={css.lineGridV6}>
            <div style={{height:"19px"}}>
                <Typography weight={"bold"}>
                    {nameObject}, {totalArea}
                </Typography>
            </div>

            <div className={css.df} style={{height:"19px"}}>
                <Typography weight={"light"} color={"tertiary"}>
                    В архиве c:
                </Typography>
                <Typography color={"tertiary"}>
                    {dateArchive}
                </Typography>
            </div>
           <div onClick={()=>onDelete(id)} className={css.cursor}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="#EB5757"/>
               </svg>
           </div>
        </div>
    );
};

export default LineV10;