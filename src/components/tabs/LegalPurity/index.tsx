import React from "react"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import LegalPurityGeneralTab from "./components/General/LegalPurityGeneralTab"
import { LEGAL_PURITY_GENERAL_TAB } from "./config"


interface Props {
    tabsData?: any
}

const LegalPurityTabs: React.FC<Props> = ({ }) => {
    return (
        <VerticalTabs
            tabs={[
                { title: "Общие сведения", Component: <LegalPurityGeneralTab data={LEGAL_PURITY_GENERAL_TAB}/> },
            ]}
        />
    )
}

export default LegalPurityTabs