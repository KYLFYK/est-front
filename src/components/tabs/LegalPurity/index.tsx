import React from "react"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import LegalPurityEncumbrancesTab from "./components/Encumbrances/LegalPurityEncumbrancesTab"
import LegalPurityFoundersTab from "./components/Founders/LegalPurityFoundersTab"
import LegalPurityGeneralTab from "./components/General/LegalPurityGeneralTab"
import LegalPurityRecomendationsTab from "./components/Recomendations/LegalPurityRecomendationsTab"
import { LEGAL_PURITY_ENCUMBRANCES, LEGAL_PURITY_GENERAL_TAB, LEGAL_PURITY_OWNERS, LEGAL_PURITY_RECOMENDS } from "./config"


interface Props {
    tabsData?: any
}

const LegalPurityTabs: React.FC<Props> = ({ }) => {
    return (
        <VerticalTabs
            tabs={[
                { title: "Общие сведения", Component: <LegalPurityGeneralTab data={LEGAL_PURITY_GENERAL_TAB}/> },
                { title: "Собственники", Component: <LegalPurityFoundersTab data={LEGAL_PURITY_OWNERS}/> },
                { title: "Обременения", Component: <LegalPurityEncumbrancesTab data={LEGAL_PURITY_ENCUMBRANCES}/> },
                { title: "Рекомендации", Component: <LegalPurityRecomendationsTab data={LEGAL_PURITY_RECOMENDS}/> },
            ]}
        />
    )
}

export default LegalPurityTabs