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

export interface IDeveloperTabsData {
    about: string[],
    contacts: IOption<IArticleGeneral>[],
    requisits: IOption<IArticleGeneral>[],
    owners: {
        company: IDeveloperCompanyData,
        goverment: IOption<IArticleGeneral>[]
    },
    activities: {
        primary: string[],
        secondary: string[]
    },
    news: IDeveloperArticleItem[],
    statistics: IOption<IArticleGeneral[]>[],
    risks: IOption<IArticleGeneral>[],
}
interface Props {
    tabsData: IDeveloperTabsData
}

const DeveloperTabs: React.FC<Props> = ({ tabsData: { news, statistics, risks, activities, owners, requisits, contacts, about } }) => {
    return (
        <VerticalTabs
            tabs={[
                { title: "О застройщике", Component: <DeveloperAbout paragraphs={about} /> },
                { title: "Контакты", Component: <DeveloperContacts items={contacts} /> },
                { title: "Реквизиты", Component: <DeveloperRequisites items={requisits} /> },
                { title: "Учредители", Component: <DeveloperOwners companyData={owners.company} govermentData={owners.goverment} /> },
                { title: "Виды деятельности", Component: <DeveloperActivity primaryActivities={activities.primary} secondaryActivities={activities.secondary} /> },
                { title: "СМИ о застройщике", Component: <DeveloperMassMedia articlesItems={news} /> },
                { title: "Статистика", Component: <DeveloperStatisticTab items={statistics} /> },
                { title: "Риски", Component: <DeveloperRisksTab items={risks} /> },

            ]}
        />
    )
}

export default DeveloperTabs