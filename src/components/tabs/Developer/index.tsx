import React from "react"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import DeveloperAbout from "./components/About/About"
import DeveloperContacts from "./components/Contacts/Contacts"
import { ABOUT_PARAGRAPHS, DEVELOPER_CONTACTS } from "./config"

const DeveloperTabs: React.FC<{}> = () => {
    return (
        <VerticalTabs
            tabs={[
                { title: "О застройщике", Component: <DeveloperAbout paragraphs={ABOUT_PARAGRAPHS} /> },
                { title: "Контакты", Component: <DeveloperContacts items={DEVELOPER_CONTACTS}/> }
            ]}
        />
    )
}

export default DeveloperTabs