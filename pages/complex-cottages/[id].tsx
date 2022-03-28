import React, {useRef, useState} from 'react';
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import {Breadcrumbs} from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../src/components/shared/Views/Views";
import {NameEstate} from "../../src/components/shared/NameEstate/NameEstate";
import {HorizontalTabs} from "../../src/components/shared/HorizontalTabs/HorizontalTabs";
import Map from "../../src/components/containers/Maps/MapInfrastructure";
import {currentHouse, infrastructura} from "../../src/components/containers/Maps/MapInfrastructure/config";
import Cottages from "../../src/components/containers/cottages/Сottages";
import ObjectDeveloper from "../../src/components/containers/ObjectDeveloper/ObjectDeveloper";
import {OBJECT_DEVELOPER_INFO} from "../../src/components/containers/ObjectDeveloper/config";
import {IMAGES_SET} from "../../src/components/containers/GeneralInfo/config";
import ConstructProgress from "../../src/components/containers/ConstructProgress/ConstructProgress";


const OPTION_DATA = [
    {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
    {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
    {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
    {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
]

const tabs = [
    { title: "Галерея" },
    { title: "Об объекте" },
    { title: "Инфраструктура" },
    { title: "Коттеджи" },
    { title: "Варианты отделки" },
    { title: "Застройщик" },
    { title: "Ход строительства" },
];

const ComplexCottages = () => {

    const infra = useRef(null);
    const cottages = useRef(null);
    const developer = useRef(null);
    const [refs, setRefs] = useState<any>([]);

    return (
        <MainContainer footerColor={"accent"} cabinetStyle={false} >
            <Breadcrumbs location={"object"} items={['Крым', 'Купить участок', 'Участок в Троицком 30 соток']} />
            <Views items={['12.06.2021','389']}/>
            <NameEstate item={'Коттеджный посёлок Лесогор'}/>
            <div style={{padding:'0px 60px'}}>
                <HorizontalTabs tabs={tabs} refs={refs}/>
            </div>
            <div ref={infra}>
                <Map
                    currentHouse={currentHouse}
                    infrastructura={infrastructura}
                    location={'infrastructure'} InfrastructureInfo={'Всего 14км до Симферополя, столицы и делового центра Республики Крым, 25км до скоростной трассы Таврида и международного Аэропорта.'}/>
            </div>
            <div ref={cottages}>
                <Cottages/>
            </div>
            <div ref={developer}>
                <ObjectDeveloper
                    developerData={OBJECT_DEVELOPER_INFO}
                />
            </div>
            <ConstructProgress
                info={OPTION_DATA}
                images={IMAGES_SET}
            />


        </MainContainer>
    );
};
export default ComplexCottages