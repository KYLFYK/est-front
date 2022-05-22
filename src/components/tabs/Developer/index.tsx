import React from "react"
import { IArticleGeneral, IOption } from "../../../utils/interfaces/general"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import DeveloperAbout from "./components/About/About"
import DeveloperActivity from "./components/Activity/DeveloperActivity"
import DeveloperContacts from "./components/Contacts/Contacts"
import DeveloperMassMedia, { IDeveloperArticleItem } from "./components/MassMedia/DeveloperMassMedia"
import DeveloperOwners, { IDeveloperCompanyData } from "./components/Owners/DeveloperOwners"
import DeveloperRequisites from "./components/Requisites/DeveloperRequisites"
import DeveloperRisksTab from "./components/Risks/DeveloperRisksTab"
import DeveloperStatisticTab from "./components/Statistic/DeveloperStatisticTab"
import css from './developerTabs.module.scss'

export interface IDeveloperTabsData {
    about?: string[],
    contacts?: IOption<IArticleGeneral>[],
    requisits?: IOption<IArticleGeneral>[],
    owners?: {
        company: IDeveloperCompanyData,
        goverment: IOption<IArticleGeneral>[]
    },
    activities?: {
        primary: string[],
        secondary: string[]
    },
    news?: IDeveloperArticleItem[],
    statistics?: IOption<IArticleGeneral[]>[],
    risks?: IOption<IArticleGeneral>[],
}
interface Props {
    tabsData: IDeveloperTabsData
}

const DeveloperTabs: React.FC<Props> = ({ tabsData: { news, statistics, risks, activities, owners, requisits, contacts, about } }) => {
    
    let tab = []
    if (about && about.length) tab.push({ title: "О застройщике", Component: <DeveloperAbout paragraphs={about} /> })
    if (contacts && contacts.length) tab.push({ title: "Контакты", Component: <DeveloperContacts items={contacts} /> })
    if (requisits && requisits.length) tab.push({ title: "Реквизиты", Component: <DeveloperRequisites items={requisits} /> })
    if (owners) tab.push({ title: "Учредители", Component: <DeveloperOwners companyData={owners.company} govermentData={owners.goverment} /> })
    if (activities) tab.push({ title: "Виды деятельности", Component: <DeveloperActivity primaryActivities={activities.primary} secondaryActivities={activities.secondary} /> })
    if (news && news.length) tab.push({ title: "СМИ о застройщике", Component: <DeveloperMassMedia articlesItems={news} /> })
    if (statistics && statistics.length) tab.push({ title: "Статистика", Component: <DeveloperStatisticTab items={statistics} /> })
    if (risks && risks.length) tab.push({ title: "Риски", Component: <DeveloperRisksTab items={risks} /> })
    return (
        <VerticalTabs
            className={css.wrapper}
            link={false}
            tabs={tab}
            classNameMenu={css.classNameMenu}
            classNameInfo={css.classNameInfo}
        />
    )
}

export default DeveloperTabs