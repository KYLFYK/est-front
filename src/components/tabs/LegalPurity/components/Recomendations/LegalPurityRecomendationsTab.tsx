import React from 'react'
import { IOption } from '../../../../../utils/interfaces/general'
import Typography from '../../../../shared/Typography/Typography'
import s from './LegalPurityRecomendationsTab.module.scss'

interface Props {
    data: IOption[]
}

const LegalPurityRecomendationsTab: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <div key={item.value} className={s.item}>
                    <Typography weight="medium">{item.value}</Typography>
                    <Typography weight="light">{item.label}</Typography>
                </div>
            ))}
        </div>
    )
}

export default LegalPurityRecomendationsTab