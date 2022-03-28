import React, {FC, useRef, useState} from 'react';
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import {Breadcrumbs} from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../src/components/shared/Views/Views";
import {NameEstate} from "../../src/components/shared/NameEstate/NameEstate";
import {AdressEstate} from "../../src/components/shared/AdressEstate/AdressEstate";
import {HorizontalTabs} from "../../src/components/shared/HorizontalTabs/HorizontalTabs";
import GeneralInfo from "../../src/components/containers/GeneralInfo/GeneralInfo";
import {IMAGES_SET, INFO_OPTIONS} from "../../src/components/containers/GeneralInfo/config";
import Typography from "./../../src/components/shared/Typography/Typography";
import {FinishesOptions} from "../../src/components/containers/finishesOptions/finishesOptions";
import Map from "../../src/components/containers/Maps/MapInfrastructure";
import {currentHouse, infrastructura} from "../../src/components/containers/Maps/MapInfrastructure/config";
import {Mortgage} from "../../src/components/shared/Mortgage/Mortgage";
import PaybackContainer, {numberApplications} from "../../src/components/containers/PaybackContainer/PaybackContainer";
import PaybackPeriod from 'src/components/shared/PaybackPeriod/PaybackPeriod';
import PaybackPeriodColumn from 'src/components/shared/PaybackPeriodColumn/PaybackPeriodColumn';
import ObjectDeveloper from "../../src/components/containers/ObjectDeveloper/ObjectDeveloper";
import {OBJECT_DEVELOPER_INFO} from "../../src/components/containers/ObjectDeveloper/config";
import ConstructProgress from 'src/components/containers/ConstructProgress/ConstructProgress';
import {OPTION_DATA} from 'src/pages/residential-complex/HousingComplex';
import {Record} from "../../src/components/containers/Record/Record";
import RecordAgent from "../../src/components/containers/Record/RecordAgent.json";

const tabs = [
    {title: "Галерея"},
    {title: "Общая информация"},
    {title: "Варианты отделки"},
    {title: "Инфраструктура"},
    {title: "Ипотека"},
    {title: "Окупаемость"},
    {title: "Застройщик"},
    {title: "Ход строительства"},
];
const finishesCards = [
    {
        src: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        url: '',
        countryFishing: 'Швеция'
    },
    {
        src: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        url: '',
        countryFishing: 'Япония'
    },
    {src: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg', url: '', countryFishing: 'Дания'},
]
const averagePrice = {
    price: '150 001 240',
    priceUSD: ' 2 025 221.09',
    priceEU: '1 728 447.47',
    priceMetre: '79 000',
    priceMetreUSD: '1 0066.61',
    priceMetreEU: '910.31',
}

const generalInformationData = [
    {title: "Территория и инфраструктура" ,text:'Закрытая охраняемая территория, круглосуточное видеонаблюдение. В пешей доступности остановка, детсад и школа. 40% территории — зеленые  насаждения.\n' +
            'Благоустроена внутренняя территория посёлка.\n' +
            'Пешеходные зоны, уличное освещение, озеленение придомовой территории. Вблизи огромное пространство для зоны семейных пикников, выгула собак и велопрогулок на свежем горном воздухе.'},
    {title: "Дом и коммуникации" ,text:'Вода, канализация, электричество, оптоволоконный кабель. Оптимальные планировки, панорамные окна, просторные гостиные, удобные гардеробные, — все это сделает проживающих неженками!\n' +
            'Участок позволяет разместить парковочное место и зону отдыха как с  фронтальной, так и с тыльной части дома. При покупке  дизайн-проект — в подарок.'},
    {title:'Условия покупки и цены',text:'Дом площадью 90 м² на земельном участке площадью  6 соток. Забор и озеленение придомовой территории входят в стоимость. Дома могут быть выполнены с тремя вариациями планировочных решений на выбор, а так же с отделкой «под  ключ» по одному из вариантов выбранного дизайн-проекта (стоимость определяется в индивидуальном порядке).\n' +
            'Есть возможность выбора дома у леса, с красивыми  деревьями на участке.'}
]

const infraD = 'Всего 14 км до Симферополя, столицы и делового центра Республики Крым, 25 км до скоростной трассы ТАВРИДА и международного Аэропорта. До ближайшего курортного города Алушты всего 20 минут езды по трассе Ялта — Симферополь. Расположение посёлка позволяет вести уединённую размеренную жизнь в дали от городской суеты в гармонии с природой, при этом не лишая себя благ цивилизации и возможности комфортно добираться как до места работы, так и на отдых на любой из  курортов Южного берега Крыма.'

const Cottages = () => {

    const general = useRef(null)
    const finishingOptions = useRef(null)
    const infra = useRef(null)
    const generalInformation = useRef(null)
    const payback = useRef(null)
    const developer = useRef(null)
    const constructProgress = useRef(null)
    const record = useRef(null)
    const [refs, setRefs] = useState<any>([]);

    return (
        <MainContainer footerColor={"nude"} cabinetStyle={false}>
            <Breadcrumbs location={"object"} items={['Крым', 'Купить участок', 'Участок в Троицком 30 соток']}/>
            <Views items={['12.06.2021', '389']}/>
            <NameEstate item={'Дом в коттеджнном посёлоке Лесогор'}/>
            <AdressEstate item={'Крым респ., Ялта городской округ, Гурзуф пгт, ул. Ялтинская, 12К'}/>
            <div style={{padding: '0px 60px'}}>
                <HorizontalTabs tabs={tabs} refs={refs}/>
            </div>
            <div ref={general}>
                <GeneralInfo
                    info={INFO_OPTIONS} price={300000} images={IMAGES_SET}
                    // classSlider={css.image}
                />
            </div>
            <div ref={generalInformation}>
                <GeneralInformation generalInformation={generalInformationData} />
            </div>
            <div style={{margin: '20px 60px'}} ref={finishingOptions}>
                <FinishesOptions
                    finishesCards={finishesCards}
                />
            </div>
            <div ref={infra}>
                <Map
                    currentHouse={currentHouse}
                    infrastructura={infrastructura}
                    location={'infrastructure'}
                    InfrastructureInfo={infraD}/>
            </div>
            <Mortgage/>
            <div ref={payback} style={{margin: '60px'}}>
                <Typography size={"subheader"} weight={"bold"}>
                    Окупаемость
                </Typography>
                <div
                     style={{marginTop: '30px', display: 'grid', gridTemplateColumns: "1fr 1fr", gap: '20px'}}>
                    <PaybackPeriod/>
                    <PaybackPeriodColumn tableColumn={numberApplications}
                                         title={"Срок окупаемости дома в Крыму и других городах"}/>
                </div>
            </div>
            <div ref={developer}>
                <ObjectDeveloper developerData={OBJECT_DEVELOPER_INFO}/>
            </div>
            <div ref={constructProgress}>
                <ConstructProgress images={IMAGES_SET} info={OPTION_DATA}/>
            </div>
            <div ref={record}>
                <Record Record={RecordAgent.Record} title={'дом'}/>
            </div>
        </MainContainer>
    );
};

export default Cottages;

type GeneralInformationType = {
    generalInformation: Array<{ title: string, text: string }>
}

const GeneralInformation: FC<GeneralInformationType> = ({generalInformation}) => {
    return (
        <div style={{display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', margin: '60px'}}>
            {
                generalInformation.map((general,index) => (
                    <div key={index}>
                        <div>
                            <Typography size={"subheader"} weight={"bold"}>
                                {general.title}
                            </Typography>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <Typography>
                                {general.text}
                            </Typography>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}