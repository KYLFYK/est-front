import React from "react"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import DeveloperAbout from "./components/About/About"
import DeveloperActivity from "./components/Activity/DeveloperActivity"
import DeveloperContacts from "./components/Contacts/Contacts"
import DeveloperMassMedia from "./components/MassMedia/DeveloperMassMedia"
import DeveloperOwners from "./components/Owners/DeveloperOwners"
import DeveloperRequisites from "./components/Requisites/DeveloperRequisites"
import { ABOUT_PARAGRAPHS, DEVELOPER_CONTACTS, DEVELOPER_MASS_MEDIA_ARTICLES, DEVELOPER_OWNERS_COMPANY, DEVELOPER_OWNER_GOVERMENT, DEVELOPER_PRIMARY_ACTIVITIES, DEVELOPER_REQUISITS, DEVELOPER_SECONDARY_ACTIVITIES } from "./config"

const DeveloperTabs: React.FC<{}> = () => {
    return (
        <VerticalTabs
            tabs={[
                { title: "О застройщике", Component: <DeveloperAbout paragraphs={ABOUT_PARAGRAPHS} /> },
                { title: "Контакты", Component: <DeveloperContacts items={DEVELOPER_CONTACTS} /> },
                { title: "Реквизиты", Component: <DeveloperRequisites items={DEVELOPER_REQUISITS}/> },
                { title: "Учредители", Component: <DeveloperOwners companyData={DEVELOPER_OWNERS_COMPANY} govermentData={DEVELOPER_OWNER_GOVERMENT}/> },
                { title: "Виды деятельности", Component: <DeveloperActivity primaryActivities={DEVELOPER_PRIMARY_ACTIVITIES} secondaryActivities={DEVELOPER_SECONDARY_ACTIVITIES}/> },
                { title: "СМИ о застройщике", Component: <DeveloperMassMedia articlesItems={DEVELOPER_MASS_MEDIA_ARTICLES}/> },
                
            ]}
        />
    )
}

export default DeveloperTabs