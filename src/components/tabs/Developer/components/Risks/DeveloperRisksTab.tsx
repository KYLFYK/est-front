import React from 'react'
import { IArticleGeneral, IOption } from '../../../../../utils/interfaces/general'
import Typography from '../../../../shared/Typography/Typography'
import s from './DeveloperRisksTab.module.scss'

interface Props {
    items: IOption<IArticleGeneral>[]
}


const DeveloperRisksTab: React.FC<Props> = ({ items }) => {
    return (
        <div>
            {items.map((item, idx) => (
                <div key={idx} className={s.item}>
                    <Typography className={s.value} color="accent" weight="medium">{item.value}</Typography>
                    <div>
                        <Typography weight="light">{item.label.title}</Typography>
                        <Typography weight="medium">{item.label.text}</Typography>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DeveloperRisksTab