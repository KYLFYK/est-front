import classNames from "classnames"
import React from "react"
import QuestionPopup from "../../../../shared/QuestionPopup/QuestionPopup"
import Typography from "../../../../shared/Typography/Typography"
import { ILegalPurityArticle } from "../../config"
import s from './LegalPurityGeneralTab.module.scss'

interface Props {
    data: ILegalPurityArticle[]
}

const LegalPurityGeneralTab: React.FC<Props> = ({ data }) => (
    <div>
        {data.map((group) => (
            <div key={group.value} className={s.group}>
                <div className={s.groupTitle}>
                    <Typography weight="bold">{group.value}</Typography>
                    {group.description && <QuestionPopup text={group.description} />}
                </div>
                <div className={s.groupContent}>
                    {group.label.map((item, itemIdx) => (
                        <div className={classNames(s.item, { [s.fullWidth]: !itemIdx })} key={item.title}>
                            <div className={s.itemTitle}>
                                <Typography weight="light">{item.title}</Typography>
                                {item.description && <QuestionPopup text={item.description} />}
                            </div>
                            <Typography weight="medium">{item.text}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
)

export default LegalPurityGeneralTab