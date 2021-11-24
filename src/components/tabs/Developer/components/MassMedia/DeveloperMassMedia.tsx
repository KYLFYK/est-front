import React from "react"
import DeveloperMassMediaCard from "./Card"
import s from './DeveloperMassMedia.module.scss'

export interface IDeveloperArticleItem {
    link: string,
    date: Date,
    title: string,
    description: string,
    icon: string,
    id: string,
}

interface Props {
    articlesItems: IDeveloperArticleItem[]
}

const DeveloperMassMedia: React.FC<Props> = ({ articlesItems }) => {
    return (
        <div className={s.wrapper}>
            {articlesItems.map((item) => (
                <DeveloperMassMediaCard
                    key={item.id}
                    link={item.link}
                    icon={item.icon}
                    description={item.description}
                    title={item.title}
                    date={item.date}
                />
            ))}
        </div>
    )
}

export default DeveloperMassMedia