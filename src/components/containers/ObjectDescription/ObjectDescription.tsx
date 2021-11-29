import React from 'react'
import HeadLine from '../../shared/HeadLine/HeadLine'
import Typography from '../../shared/Typography/Typography'
import s from './ObjectDescription.module.scss'

interface Props {
    items: string[]
}

const ObjectDescription: React.FC<Props> = ({items}) => {
    return (
        <HeadLine title="Описание">
            {items.map((item, idx) => <Typography key={idx} className={s.descriptionItem}> {item}</Typography>)}
        </HeadLine>
    )
}

export default ObjectDescription