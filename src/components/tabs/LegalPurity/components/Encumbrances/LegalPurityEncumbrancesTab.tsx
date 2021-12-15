import React from 'react'
import QuestionPopup from '../../../../shared/QuestionPopup/QuestionPopup'
import Typography from '../../../../shared/Typography/Typography'
import { ILegalPurityEncumbrances } from '../../config'
import { transformStatusToIcon } from '../../lib'
import s from './LegalPurityEncumbrancesTab.module.scss'

interface Props {
    data?: ILegalPurityEncumbrances[]
}

const LegalPurityEncumbrancesTab: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data && data.map((group) => (
                <div key={group.title} className={s.group}>
                    <Typography weight="bold">{group.title}</Typography>
                    <div className={s.groupContent}>
                        {group.encumbrances.map((enc) => (
                            <div key={enc.text} className={s.item}>
                                <div className={s.icon}>
                                    {transformStatusToIcon(enc.status)}
                                </div>
                                <Typography weight="medium">{enc.text}</Typography>
                                {enc.description && <QuestionPopup text={enc.description} />}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LegalPurityEncumbrancesTab