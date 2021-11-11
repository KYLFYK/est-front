import { FC } from "react"
import css from './CardAgency.module.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
type CardAgencyType ={
    name:string
    description:string
    id:number
    img:any
    onDelete:(id:number)=>void
}


export const CardAgency :FC<CardAgencyType> = ({name,description,id,img,onDelete}) => {
    return(
        <div className={css.card}>
            <div className={css.card_}>
                <img src={img}  alt="1" className={css.img}/>
                <div className={css.nameCompany}>
                    <div>{name}</div>
                    <DeleteOutlinedIcon onClick={()=>onDelete(id)} style={{color:'#EB5757'}} />
                </div>

                <div className={css.description}>{description}</div>
            </div>
        </div>
    )
}