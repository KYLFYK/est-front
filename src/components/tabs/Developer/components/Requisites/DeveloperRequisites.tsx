import React from 'react'
import { IArticleGeneral, IOption } from '../../../../../utils/interfaces/general'
import Typography from '../../../../shared/Typography/Typography'
import s from './DeveloperRequisites.module.scss'

interface Props {
    items: IOption<IArticleGeneral>[]
}

interface IArticlesData {
    fullName: IOption<IArticleGeneral> | null,
    address: IOption<IArticleGeneral> | null,
    inn: IOption<IArticleGeneral> | null,
    okato: IOption<IArticleGeneral> | null,
    ogrn: IOption<IArticleGeneral> | null,
    okpo: IOption<IArticleGeneral> | null,
    kpp: IOption<IArticleGeneral> | null,
    oktmo: IOption<IArticleGeneral> | null,
    rest: IOption<IArticleGeneral>[]
}

const DeveloperRequisites: React.FC<Props> = ({ items }) => {
    const articles: IArticlesData = items.reduce((articles: IArticlesData, current: IOption<IArticleGeneral>): IArticlesData => {
        const value = current.value

        if (Object.keys(articles).includes(String(value)))
            return { ...articles, [value]: current }

        return { ...articles, rest: [...articles.rest, current] }

    }, {
        fullName: null,
        address: null,
        inn: null,
        okato: null,
        ogrn: null,
        okpo: null,
        kpp: null,
        oktmo: null,
        rest: []
    })

    return (
        <div className={s.wrapper}>
            <div className={s.article}>
                <Typography weight="light">{articles.fullName?.label.title}</Typography>
                <Typography weight="medium">{articles.fullName?.label.text}</Typography>
            </div>
            <div className={s.article}>
                <Typography weight="light">{articles.address?.label.title}</Typography>
                <Typography weight="medium" color="nude">{articles.address?.label.text}</Typography>
            </div>

            <div className={s.restList}>
                {articles.rest.map((item) => (
                    <div className={s.article} key={item.value}>

                        <Typography weight="light">{item.label.title}</Typography>
                        <Typography weight="medium">{item.label.text}</Typography>
                    </div>
                ))}

            </div>

            <div className={s.pairArticle}>
                <div className={s.article}>
                    <Typography weight="light">{articles.inn?.label.title}</Typography>
                    <Typography weight="medium" color="nude">{articles.inn?.label.text}</Typography>
                </div>
                <div className={s.article}>
                    <Typography weight="light">{articles.okato?.label.title}</Typography>
                    <Typography weight="medium">{articles.okato?.label.text}</Typography>
                </div>
            </div>

            <div className={s.pairArticle}>
                <div className={s.article}>
                    <Typography weight="light">{articles.ogrn?.label.title}</Typography>
                    <Typography weight="medium" color="nude">{articles.ogrn?.label.text}</Typography>
                </div>
                <div className={s.article}>
                    <Typography weight="light">{articles.okpo?.label.title}</Typography>
                    <Typography weight="medium">{articles.okpo?.label.text}</Typography>
                </div>
            </div>

            <div className={s.pairArticle}>
                <div className={s.article}>
                    <Typography weight="light">{articles.kpp?.label.title}</Typography>
                    <Typography weight="medium" color="nude">{articles.kpp?.label.text}</Typography>
                </div>
                <div className={s.article}>
                    <Typography weight="light">{articles.oktmo?.label.title}</Typography>
                    <Typography weight="medium">{articles.oktmo?.label.text}</Typography>
                </div>
            </div>

        </div>
    )
}

export default DeveloperRequisites