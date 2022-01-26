import type {GetStaticProps, NextPage} from "next";
import React from "react";
import {MainContainer} from "src/components/containers/MainContainer/MainContainer";
import {HeadFilter} from "../src/components/containers/HeadFilter/Finder";
import {BestOffers} from "../src/components/containers/BestOffers/bestOffers";
import {IMAGES_SET} from "../src/components/containers/GeneralInfo/config";
import DevelopersContainer, {
    mockDevelopers, mockObjects,
} from "../src/components/containers/DevelopersContainer/DevelopersContainer";
import {AgentsContainer} from "../src/components/containers/AgentsContainer/AgentsContainer";
import mocAgent from "../src/components/containers/AgentsContainer/Agents.json";
import {Advantages} from "../src/components/containers/AdvantageList/AdvantageList";
import {mocAdvantages} from "../src/components/containers/AdvantageList/config";
import {OfferNews} from "../src/components/containers/OfferNews/offerNews";
import OurOffice from "../src/components/containers/OurOffice/OurOffice";
import {OurOfficeType} from "../src/components/containers/OurOffice/OurOffice";
import {observer} from "mobx-react-lite";
import {UrlMainPage} from "../src/api/mainPage/mainPage";

const city = ["Москва", "Санкт-Петербург", "Крым", "Сочи", "Нижний Новгород"];
const personalAccount = [
    {title: "Личный кабинет", href: "/User", message: 0},
    {title: "Избранное", href: "/User", message: 0},
    {title: "Сохраненные поиски", href: "/User", message: 0},
    {title: "Сообщения", href: "/User", message: 12},
    {title: "Уведомления", href: "/User", message: 3},
    {title: "Мои объекты", href: "/User", message: 0},
    {title: "Проверка объекта", href: "/User", message: 0},
];

const estateOffers = [
    {
        id: 1,
        url: "www.google.com",
        img: IMAGES_SET,
        tags: ["Покупка", "Таунхаус", "Новостройка"],
    },
    {
        id: 2,
        url: "www.google.com",
        img: IMAGES_SET,
        tags: ["Покупка", "Таунхаус", "Новостройка"],
    },
    {
        id: 3,
        url: "www.google.com",
        img: IMAGES_SET,
        tags: ["Покупка", "Таунхаус", "Новостройка"],
    },
];

const tagsButton = [
    "Покупка",
    "Аренда",
    "Дом",
    "Коммерческая недвижимость",
    "Новостройка",
    "Вторичное жилье",
    "Строящийся дом",
    "От собственника",
];

const ourOffice: OurOfficeType = {
    ourOffice: {
        positionMap: {
            lat: 44.959975,
            lng: 34.109053,
        },
        location: "start",
        contactsOffice: [
            {title: "metro", value: "Проспект Победы"},
            {title: "dot", value: "Крым, Ленина, 23 корпус 1"},
            {title: "time", value: "Ежедневно с 10:00 до 20:00"},
            {title: "phone", value: "+7 913 453 22 34", href: "tel:"},
            {title: "phone", value: "+7 913 453 22 35", href: "tel:"},
            {title: "printer", value: "+7 913 453 22 34"},
            {title: "email", value: "estatum@mail.com", href: "mailto:"},
        ],
        plotRoute: "www.google.com",
    },
};

const Start :React.FC<FetchMainType> = observer(({agents, developersArray}) => {

    return (
        <MainContainer
            keywords={"Главная"}
            title={"Главная"}
            city={city}
            personalAccount={personalAccount}
            footerColor="accent"
        >
            <HeadFilter/>
            <BestOffers tagsButton={tagsButton} bestOffers={estateOffers}/>
            <DevelopersContainer
                title={"Застройщики и агентства, которые нам доверяют"}
                developersInfo={developersArray}
            />
            <AgentsContainer
                title={"Наши агенты к вашим услугам"}
                agents={agents}
            />
            <Advantages advantages={mocAdvantages}/>
            <OfferNews/>
            <OurOffice ourOffice={ourOffice.ourOffice}/>
        </MainContainer>
    );
})

export default Start;

export const getStaticProps : GetStaticProps<FetchMainType> = async ()=> {
    const apiAgents = await fetch (`https://estatum.f-case.ru/api/${UrlMainPage.agentOur}?amount=${3}`)
    const apiDeveloper = await fetch(`https://estatum.f-case.ru/api/${UrlMainPage.developerOur}?amount=${5}`)
    const agentsArray :Array<FetchMainAgentsType> = await apiAgents.json()
    const developers :Array<FetchMainDeveloperType> = await apiDeveloper.json()

    const date = new Date()
    const years = date.getFullYear()

    const agents:Array<AgentsType> = agentsArray.map((agent) => (
        {
            id: agent.id,
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
            connection: {
                whatsApp: agent.agentProperty.messengers.whatsApp,
                telegram: agent.agentProperty.messengers.telegram,
                email: agent.email,
                phone: agent.agentProperty.phone[0].value,
            },
            infoAgent: {
                fullName: agent.agentProperty.name,
                heldPost: agent.agentProperty.position,
                professionalExperience: (years - +agent.agentProperty.experience.substr(0, 4)).toString(),
                completed: agent.agentProperty.rating.toString(),   //  <- WANTED MOCK
                inWork: agent.agentProperty.rating.toString(),      //  <- WANTED MOCK

                whatsApp: agent.agentProperty.messengers.whatsApp,
                telegram: agent.agentProperty.messengers.telegram,
                email: agent.email,
                phone: agent.phone,
            }
        }
    ))
    const developersArray = developers.map((developer) => (
        {
            // id:developer[index].id,
            img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=",
            title: developer.developerProperty.name,
            description: developer.developerProperty.type,
            developerInfo: {
                title: developer.developerProperty.name,
                location: developer.developerProperty.address,
                passed: '50 in 50',              //  <- WANTED MOCK
                objectsDeveloper: mockObjects  //  <- WANTED MOCK
            },
        }
    ))
    return {
        props: {agents, developersArray},
    }
}

type FetchMainAgentsType ={
    "id": number
    "createAt": string
    "updateAt": string
    "email": string
    "phone": string
    "markAsDelete": boolean
    "isConfirmed":boolean
    "role": string
    "customerProperty": null | boolean,
    "developerProperty": null | boolean,
    "agencyProperty": null | boolean,
    "agentProperty": {
        "id": number
        "name": string
        "position":string
        "phone": Array<{ "ord": number, "value": string }>
        "experience": string
        "rating": number
        "inviteLink":string
        "messengers": {
            "telegram": string
            "whatsApp": string
        },
        "agencyId":number
    },
    "adminProperty": null | boolean
    "bankProperty": null | boolean
}

type AgentsType = {
    img:string
    connection: {
        whatsApp: string
        telegram: string
        email:string
        phone: string
    },
    infoAgent: {
        fullName: string
        heldPost: string
        professionalExperience: string
        completed: string
        inWork: string

        whatsApp: string
        telegram: string
        email: string
        phone: string
    }
}

type FetchMainDeveloperType ={
    "id": number
    "createAt": string
    "updateAt": string
    "email": string
    "phone": string
    "markAsDelete": boolean,
    "isConfirmed": boolean,
    "role": string
    "customerProperty": null | boolean
    "developerProperty": {
        "id": number
        "name": string
        "type": string
        "phone":Array<{ord:string, value:number}>
        "address": string
        "site": string
        "description": string
        "legalFullName": string
        "legalAddress": string
        "authorizedCapital": number
        "OKFS": string
        "OKOPF": string
        "OKOGU": null | string
        "INN": string
        "OGRN": string
        "KPP": string
        "OKATO": null | string
        "OKPO": string
        "OKTMO": string
        "status": string
        "leaderName": string
        "founders": string
        "enterpriseSize": number
        "numberOfStaff": number
        "branch": number
        "revenue": number
        "netProfit": number
        "netAssets": number
        "registrationDate": string
        "registrationAuthorityName": string
        "registrationAuthorityAddress": string
        "registeringAuthorityLocated": string
        "mainOccupation": string
        "extraOccupations": Array<{ord:string, value:number}>
        "statistics": Array<{items:Array<{items:string, value:number}>, title:string}>
        "risks": null | boolean
    },
    "agencyProperty": null | boolean
    "agentProperty": null | boolean
    "adminProperty": null | boolean
    "bankProperty": null | boolean
}

type DeveloperType = {
    img: string
    title: string
    description: string
    developerInfo: {
        title: string
        location: string
        passed: string
        objectsDeveloper: Array<{nameObject:string, id:string}>
    },
}

type FetchMainType={
    agents: Array<AgentsType>
    developersArray:  Array<DeveloperType>
}


