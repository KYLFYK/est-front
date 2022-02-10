import React, {useEffect} from "react";
import {MainContainer} from "src/components/containers/MainContainer/MainContainer";
import {HeadFilter} from "../src/components/containers/HeadFilter/Finder";
import {BestOffers} from "../src/components/containers/BestOffers/bestOffers";
import {IMAGES_SET} from "../src/components/containers/GeneralInfo/config";
import DevelopersContainer from "../src/components/containers/DevelopersContainer/DevelopersContainer";
import {AgentsContainer} from "../src/components/containers/AgentsContainer/AgentsContainer";
import {Advantages} from "../src/components/containers/AdvantageList/AdvantageList";
import {mocAdvantages} from "../src/components/containers/AdvantageList/config";
import {OfferNews} from "../src/components/containers/OfferNews/offerNews";
import OurOffice from "../src/components/containers/OurOffice/OurOffice";
import {OurOfficeType} from "../src/components/containers/OurOffice/OurOffice";
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";
import {useStoreMainPage} from "../src/mobx/mainPage/mainPage";
const city = ["Москва", "Крым", "Сочи"];
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
        url: "/residential-complex/1",
        img: IMAGES_SET,
        tags: ["Покупка", "ЖК", "Новостройка"],
    },
    {
        id: 2,
        url: "/house/1",
        img: IMAGES_SET,
        tags: ["Покупка", "Дом"],
    },
    {
        id: 3,
        url: "/plat/1",
        img: IMAGES_SET,
        tags: ["Покупка", "Участок"],
    },
];

const tagsButton = [
    "Квартира",
    "Дом",
    "Новостройка",
    "Вторичное жилье",
    "ЖК",
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
            // {title: "phone", value: "+7 913 453 22 35", href: "tel:"},
            // {title: "printer", value: "+7 913 453 22 34"},
            {title: "email", value: "estatum@mail.com", href: "mailto:"},
        ],
        plotRoute: "www.google.com",
    },
};

const Start = observer(({ }) => {

    const router = useRouter()
    useEffect(()=>{
        if (router.asPath === '/#contact'){
            router.push('/#contact')
        }// eslint-disable-next-line
    },[router.asPath])

    return (
        <MainContainer
            keywords={"Главная"}
            title={"Главная"}
            city={city}
            personalAccount={personalAccount}
            footerColor="accent"
        >
            <HeadFilter/>
            <BestOffers tagsButton={tagsButton}/>
            <DevelopersContainer
                title={"Застройщики и агентства, которые нам доверяют"}
            />
            <AgentsContainer
                title={"Наши агенты к вашим услугам"}
            />
            <Advantages advantages={mocAdvantages}/>
            <OfferNews/>
            <div id={'contact'}>
                <OurOffice  ourOffice={ourOffice.ourOffice}/>
            </div>
        </MainContainer>
    );
})

export default Start;







