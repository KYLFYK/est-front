import React, { FC } from "react"
import css from './CardAgency.module.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from "../Typography/Typography";

type CardAgencyType = {
    name: string
    description: string
    id: number
    img: any
    onDelete: (id: number) => void
    phone: string
}


export const CardAgency: FC<CardAgencyType> = ({ name, description, id, img, onDelete, phone }) => {
    return (
        <div className={css.card}>
            <div className={css.card_}>
                <img
                    src={img}
                    alt={name}
                    className={css.img}
                    style={{ borderRadius: phone ? '50%' : '0', width: phone ? '80px' : '' }}
                />
                <hr color={'#F2F2F2'} style={{ width: '100%', height: '1px', margin: '14px 0' }} />
                <div className={css.nameCompany}>
                    <Typography size={'default'} weight={'medium'}>{name}</Typography>
                    <DeleteOutlinedIcon onClick={() => onDelete(id)} style={{ color: '#EB5757' }} />
                </div>
                <Typography size={'default'} className={css.description}> {description} </Typography>
                {
                    phone && <Typography size={'default'} className={css.description}> {phone} </Typography>
                }
            </div>
        </div>
    )
}