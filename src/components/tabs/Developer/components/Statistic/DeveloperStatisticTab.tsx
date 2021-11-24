import React from "react"
import { IArticleGeneral, IOption } from "../../../../../utils/interfaces/general"
import Typography from "../../../../shared/Typography/Typography"
import s from './DeveloperStatisticTab.module.scss'

interface Props {
    items: IOption<IArticleGeneral[]>[]
}

const DeveloperStatisticTab: React.FC<Props> = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.value} className={s.statisticGroup}>
                    <Typography weight="medium">{item.value}</Typography>
                    <div className={s.statisticGroupContent}>
                        {item.label.map((label) => (
                            <div key={label.text} className={s.statItem}>
                                <Typography weight="medium" color="accent">{label.title}</Typography>
                                <Typography weight="light">{label.text}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DeveloperStatisticTab