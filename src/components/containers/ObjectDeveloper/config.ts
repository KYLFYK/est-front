import { IDeveloperTabsData } from "../../tabs/Developer";
import { DEVELOPER_ABOUT_PARAGRAPHS, DEVELOPER_CONTACTS, DEVELOPER_MASS_MEDIA_ARTICLES, DEVELOPER_OWNERS_COMPANY, DEVELOPER_OWNER_GOVERMENT, DEVELOPER_PRIMARY_ACTIVITIES, DEVELOPER_REQUISITS, DEVELOPER_RISKS, DEVELOPER_SECONDARY_ACTIVITIES, DEVELOPER_STATISTICS } from "../../tabs/Developer/config";
import { IObjectDeveloperInfo } from "./ObjectDeveloper";

export const OBJECT_DEVELOPER_TABS_DATA: IDeveloperTabsData = {
    about: DEVELOPER_ABOUT_PARAGRAPHS,
    contacts: DEVELOPER_CONTACTS,
    requisits: DEVELOPER_REQUISITS,
    owners: {
        company: DEVELOPER_OWNERS_COMPANY,
        goverment: DEVELOPER_OWNER_GOVERMENT,
    },
    activities: {
        primary: DEVELOPER_PRIMARY_ACTIVITIES,
        secondary: DEVELOPER_SECONDARY_ACTIVITIES,
    },
    news: DEVELOPER_MASS_MEDIA_ARTICLES,
    statistics: DEVELOPER_STATISTICS,
    risks: DEVELOPER_RISKS
}

export const OBJECT_DEVELOPER_INFO: IObjectDeveloperInfo = {
    x: "Брусника",
    developerType: "Девелоперская компания",
    logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
    risks: false,
    leasedAmmount: "183 дома в 103 ЖК",
    inProgressAmmount: "5 домов в 3 ЖК",
    tabsData: OBJECT_DEVELOPER_TABS_DATA
}