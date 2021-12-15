import React from 'react'
import HeadLine from '../../shared/HeadLine/HeadLine'
import Typography from '../../shared/Typography/Typography'
import s from './ObjectDescription.module.scss'

interface Props {
    items: string[] | undefined
}

const ObjectDescription: React.FC<Props> = ({items}) => {
    return (
        <div className={s.container}>
            <HeadLine title="Описание">
                {items && items.map((item, idx) => <Typography key={idx} className={s.descriptionItem}> {item}</Typography>)}
            </HeadLine>
        </div>
    )
}

export default ObjectDescription