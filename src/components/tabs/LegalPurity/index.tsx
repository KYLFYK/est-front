import React from "react"
import {IObjectLegalPurityTabs} from "../../containers/ObjectLegalPurity/config"
import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs"
import LegalPurityEncumbrancesTab from "./components/Encumbrances/LegalPurityEncumbrancesTab"
import LegalPurityFoundersTab from "./components/Founders/LegalPurityFoundersTab"
import LegalPurityGeneralTab from "./components/General/LegalPurityGeneralTab"
import LegalPurityRecomendationsTab from "./components/Recomendations/LegalPurityRecomendationsTab"
import css from './legalPurity.module.scss'

interface Props {
    tabsData?: IObjectLegalPurityTabs
}

const LegalPurityTabs: React.FC<Props> = ({tabsData}) => {
    const tabsFilter = []
    if (tabsData && tabsData.general.length > 0) tabsFilter.push({
        title: "Общие сведения",
        Component: <LegalPurityGeneralTab data={tabsData && tabsData.general}/>
    })
    if (tabsData && tabsData.founders.length > 0) tabsFilter.push({
        title: "Собственники",
        Component: <LegalPurityFoundersTab data={tabsData && tabsData.founders}/>
    })
    if (tabsData && tabsData.encumbrances[0]?.encumbrances.length > 0) tabsFilter.push({
        title: "Обременения",
        Component: <LegalPurityEncumbrancesTab data={tabsData && tabsData.encumbrances}/>
    })
    if (tabsData && tabsData.recomendations.length > 0) tabsFilter.push({
        title: "Рекомендации",
        Component: <LegalPurityRecomendationsTab data={tabsData && tabsData.recomendations}/>
    })
    return (
        <div>
            <VerticalTabs
                className={css.wrapper}
                link={false}
                tabs={tabsFilter.length > 0
                    ? tabsFilter
                    : [{title: "Общие сведения", Component: <LegalPurityGeneralTab data={tabsData && tabsData.general}/>}]
                }
            />
        </div>

    )
}

export default LegalPurityTabs