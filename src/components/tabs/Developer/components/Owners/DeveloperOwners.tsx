import React from "react"
import { IArticleGeneral, IOption } from "../../../../../utils/interfaces/general"
import Typography from "../../../../shared/Typography/Typography"
import s from './DeveloperOwners.module.scss'

export interface IDeveloperCompanyData {
    numericInfo: IOption<IArticleGeneral>[],
    defaultInfo: IOption<IArticleGeneral>[],
}

interface Props {
    companyData: IDeveloperCompanyData,
    govermentData: IOption<IArticleGeneral>[],
}

const DeveloperOwners: React.FC<Props> = ({ companyData, govermentData }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <Typography weight="bold">Информация о компании</Typography>
                {companyData.defaultInfo.map((item) => (
                    <div key={item.value} className={s.article}>
                        <Typography weight="light">{item.label.title}</Typography>
                        <Typography weight="medium">{item.label.text}</Typography>
                    </div>
                ))}
                <div className={s.row}>
                    {companyData.numericInfo.map((item) => (
                        <div key={item.value} className={s.article}>
                            <Typography weight="light">{item.label.title}</Typography>
                            <Typography weight="medium">{item.label.text}</Typography>
                        </div>
                    ))}
                </div>
            </div>
            <div className={s.content}>
                <Typography weight="bold">Сведения о государственной регистрации</Typography>
                {govermentData.map((item) => (
                    <div key={item.value} className={s.article}>
                        <Typography weight="light">{item.label.title}</Typography>
                        <Typography weight="medium">{item.label.text}</Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeveloperOwners