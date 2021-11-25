import React from 'react'
import Typography from '../../../../shared/Typography/Typography'
import { ILegalPurityEncumbrances } from '../../config'
import { transformStatusToIcon } from '../../lib'
import s from './LegalPurityEncumbrancesTab.module.scss'

interface Props {
    data: ILegalPurityEncumbrances[]
}

const LegalPurityEncumbrancesTab: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data.map((group) => (
                <div key={group.title} className={s.group}>
                    <Typography weight="bold">{group.title}</Typography>
                    <div className={s.groupContent}>
                        {group.encumbrances.map((enc) => (
                            <div key={enc.text} className={s.item}>
                                <div>
                                    {transformStatusToIcon(enc.status)}
                                </div>
                                <Typography weight="medium">{enc.text}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LegalPurityEncumbrancesTab