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
import Image from "next/image";
import {ExclamationMarkMobile} from "../../../icons/Development/ExclamationMarkMobile";
import CircledKeyMobile from "../../../icons/Development/CircledKeyMobile";
import CircledSawMobile from "../../../icons/Development/CircledSawMobile";
import Typography from "../../shared/Typography/Typography";
import { AdvantageMobile } from 'src/components/shared/Advantage/AdvantageMobile';
import css from './mobile.module.scss'

interface Props {
    developerData: IObjectDeveloperInfo
}

const AccordionContainerMobile: FC<Props> = ({developerData}) => {

    return (
        <div className={css.content}>
            <Typography size={'subheader'} className={css.size} weight="bold">
                Застройщик
            </Typography>
            <div className={css.infoBlock}>
                <AdvantageMobile
                    title={developerData.name}
                    text={developerData.developerType}
                    className={css.iconItem}
                >
                    <div className={css.imgContainer}>
                        {
                            developerData.logo &&
                            <Image
                                className={css.img}
                                src={developerData.logo}
                                unoptimized alt="logo"
                                layout="fill"
                                loader={() => developerData.logo}
                            />
                        }
                    </div>
                </AdvantageMobile>
                <AdvantageMobile title="Риски" text={developerData.risks ? "Да" : "Нет"} className={css.iconItem}>
                    <ExclamationMarkMobile/>
                </AdvantageMobile>
                <AdvantageMobile title="Сдано" text={developerData.leasedAmmount} className={css.iconItem}>
                    <CircledKeyMobile/>
                </AdvantageMobile>
                <AdvantageMobile title="Строится" text={developerData.inProgressAmmount} className={css.iconItem}>
                    <CircledSawMobile/>
                </AdvantageMobile>
            </div>
            {
                developerData.tabsData.about &&
                developerData.tabsData.about?.length > 0 &&
                <InfoDeveloperMobile title={'О застройщике'}>
                    <DeveloperAbout paragraphs={developerData.tabsData.about}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.contacts &&
                <InfoDeveloperMobile title={'Контакты'}>
                    <DeveloperContacts items={developerData.tabsData.contacts}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.requisits &&
                <InfoDeveloperMobile title={'Реквизиты'}>
                    <DeveloperRequisites items={developerData.tabsData.requisits}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.owners
                && developerData.tabsData.owners.goverment
                && developerData.tabsData.owners.company
                &&
                <InfoDeveloperMobile title={'Учредители'}>
                    <DeveloperOwners
                        companyData={developerData.tabsData.owners.company}
                        govermentData={developerData.tabsData.owners.goverment}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.activities
                && developerData.tabsData.activities.primary
                && developerData.tabsData.activities.secondary
                &&
                <InfoDeveloperMobile title={'Виды деятельности'}>
                    <DeveloperActivity
                        primaryActivities={developerData.tabsData.activities.primary}
                        secondaryActivities={developerData.tabsData.activities.secondary}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.news &&
                developerData.tabsData.news?.length > 0 &&
                <InfoDeveloperMobile title={'СМИ о застройщике'}>
                    <DeveloperMassMedia articlesItems={developerData.tabsData.news}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.statistics &&
                developerData.tabsData.statistics?.length > 0 &&
                <InfoDeveloperMobile title={'Статистика'}>
                    <DeveloperStatisticTab items={developerData.tabsData.statistics}/>
                </InfoDeveloperMobile>
            }
            {
                developerData.tabsData.risks &&
                developerData.tabsData.risks?.length > 0 &&
                <InfoDeveloperMobile title={'Риски'}>
                    <DeveloperRisksTab items={developerData.tabsData.risks}/>
                </InfoDeveloperMobile>
            }
        </div>
    );
};

export default AccordionContainerMobile;