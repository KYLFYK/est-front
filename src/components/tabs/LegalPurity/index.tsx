import React from "react"
import { IObjectLegalPurityTabs } from "../../containers/ObjectLegalPurity/config"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import LegalPurityEncumbrancesTab from "./components/Encumbrances/LegalPurityEncumbrancesTab"
import LegalPurityFoundersTab from "./components/Founders/LegalPurityFoundersTab"
import LegalPurityGeneralTab from "./components/General/LegalPurityGeneralTab"
import LegalPurityRecomendationsTab from "./components/Recomendations/LegalPurityRecomendationsTab"


interface Props {
    tabsData: IObjectLegalPurityTabs
}

const LegalPurityTabs: React.FC<Props> = ({ tabsData }) => {
    return (
        <VerticalTabs
            tabs={[
                { title: "Общие сведения", Component: <LegalPurityGeneralTab data={tabsData.general} /> },
                { title: "Собственники", Component: <LegalPurityFoundersTab data={tabsData.founders} /> },
                { title: "Обременения", Component: <LegalPurityEncumbrancesTab data={tabsData.encumbrances} /> },
                { title: "Рекомендации", Component: <LegalPurityRecomendationsTab data={tabsData.recomendations} /> },
            ]}
        />
    )
}

export default LegalPurityTabs