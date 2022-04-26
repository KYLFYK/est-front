import React, {FC} from 'react';
import {IObjectDeveloperInfo} from "../ObjectDeveloper/ObjectDeveloper";
import InfoDeveloperMobile from "./infoDelevolerMobile/infoDeveloperMobile";
import DeveloperAbout from "../../tabs/Developer/components/About/About";
import DeveloperContacts from "../../tabs/Developer/components/Contacts/Contacts";
import DeveloperRequisites from "../../tabs/Developer/components/Requisites/DeveloperRequisites";
import DeveloperOwners from "../../tabs/Developer/components/Owners/DeveloperOwners";
import DeveloperActivity from "../../tabs/Developer/components/Activity/DeveloperActivity";
import DeveloperMassMedia from "../../tabs/Developer/components/MassMedia/DeveloperMassMedia";
import DeveloperStatisticTab from "../../tabs/Developer/components/Statistic/DeveloperStatisticTab";
import DeveloperRisksTab from "../../tabs/Developer/components/Risks/DeveloperRisksTab";

interface Props {
    developerData: IObjectDeveloperInfo
}

const AccordionContainerMobile :FC<Props> = ({developerData}) => {
    return (
        <div style={{display:'flex',flexDirection:'column',gap:'10px',margin:"0 10px"}}>
            {
                developerData.tabsData.about &&
                <InfoDeveloperMobile title={'О застройщике'} >
                    <DeveloperAbout paragraphs={developerData.tabsData.about} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.contacts &&
                <InfoDeveloperMobile title={'Контакты'} >
                    <DeveloperContacts items={developerData.tabsData.contacts} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.requisits &&
                <InfoDeveloperMobile title={'Реквизиты'} >
                    <DeveloperRequisites items={developerData.tabsData.requisits} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.owners
                && developerData.tabsData.owners.goverment
                && developerData.tabsData.owners.company
                &&
                <InfoDeveloperMobile title={'Учредители'} >
                    <DeveloperOwners
                        companyData={developerData.tabsData.owners.company}
                        govermentData={developerData.tabsData.owners.goverment} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.activities
                && developerData.tabsData.activities.primary
                && developerData.tabsData.activities.secondary
                &&
                <InfoDeveloperMobile title={'Виды деятельности'} >
                    <DeveloperActivity
                        primaryActivities={developerData.tabsData.activities.primary}
                        secondaryActivities={developerData.tabsData.activities.secondary} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.news &&
                <InfoDeveloperMobile title={'СМИ о застройщике'} >
                    <DeveloperMassMedia articlesItems={ developerData.tabsData.news} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.statistics &&
                <InfoDeveloperMobile title={'Статистика'} >
                    <DeveloperStatisticTab items={developerData.tabsData.statistics} />
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.risks &&
                <InfoDeveloperMobile title={'Риски'} >
                    <DeveloperRisksTab items={developerData.tabsData.risks} />
                </InfoDeveloperMobile>
            }
        </div>
    );
};

export default AccordionContainerMobile;