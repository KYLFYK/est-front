import React from 'react'
import Typography from '../../../../shared/Typography/Typography'
import { ILegalPurityArticle } from '../../config'
import s from './LegalPurityFoundersTab.module.scss'

interface Props {
    data: ILegalPurityArticle[]
}

const LegalPurityFoundersTab: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data.map((group) => (
                <div key={group.value} className={s.group}>
                    <Typography weight="bold">{group.value}</Typography>
                    <div className={s.groupContent}>
                        {group.label.map((item, idx) => (
                            <div key={idx} className={s.item}>
                                <Typography weight="light">{item.title}</Typography>
                                {item.text.split(',').map((text) => (
                                    <Typography weight="medium" key={text}>{text}</Typography>
                                ))}

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LegalPurityFoundersTab