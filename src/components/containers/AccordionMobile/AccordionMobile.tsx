import React, { FC } from 'react';
import InfoDeveloperMobile from "./infoDelevolerMobile/infoDeveloperMobile";
import ContactMobile from "./contactMobile/contactMobile";
import RequisitesMobile from "./requisitesMobile/RequisitesMobile";
import FoundersMobile from "./foundersMobile/FoundersMobile";
import StatisticsMobile from "./StatisticsMobile";
import MediaDeveloperMobile from "./mediaDeveloperMobile/MediaDeveloperMobile";
import RisksMobile from "./risksMobile/RisksMobile";
import {IObjectDeveloperInfo} from "../ObjectDeveloper/ObjectDeveloper";
import DeveloperAbout from "../../tabs/Developer/components/About/About";


interface Props {
    developerData: IObjectDeveloperInfo
}

const AccordionMobile :FC<Props> = ({developerData}) => {

    return (
        <div>
            {
                developerData.tabsData.about &&
                <InfoDeveloperMobile title={'Контакты'} >
                    <DeveloperAbout paragraphs={developerData.tabsData.about} />
                </InfoDeveloperMobile>
            }

            <ContactMobile />
            <RequisitesMobile />
            <FoundersMobile />
            <MediaDeveloperMobile />
            <StatisticsMobile />
            <RisksMobile />
        </div>
    );
};

export default AccordionMobile;