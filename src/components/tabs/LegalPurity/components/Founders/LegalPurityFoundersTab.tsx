import React from 'react'
import QuestionPopup from '../../../../shared/QuestionPopup/QuestionPopup'
import Typography from '../../../../shared/Typography/Typography'
import { ILegalPurityArticle } from '../../config'
import s from './LegalPurityFoundersTab.module.scss'

interface Props {
    data?: ILegalPurityArticle[]
}

const LegalPurityFoundersTab: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data && data.map((group) => (
                <div key={group.value} className={s.group}>
                    <div className={s.groupTitle}>
                        <Typography weight="bold">{group.value}</Typography>
                        {group.description && <QuestionPopup text={group.description} />}
                    </div>
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