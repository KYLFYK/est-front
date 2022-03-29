import React, {useEffect, useRef, useState} from 'react';
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
import css from "../../src/components/containers/cottages/СottagesComponents/cottages.module.scss";
import {ToggleButtons} from "../../src/components/shared/ToggleButtons/ToggleButtons";
import CottagesGallery, {Cottages3D, CottagesPhotos, CottagesVideo} from "../../src/components/containers/CottagesGallery/CottagesGalery";
import {FILTER_ACTIONS_OPTIONS} from "../../src/components/containers/Filter/config";
import {useBreadcrumbsStore} from "../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import {useRouter} from "next/router";

const OPTION_DATA = [
    {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
    {
        label: 'Сентябрь 2021',
        value: '1',
        title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'
    },
    {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
    {
        label: 'Ноябрь 2021',
        value: '3',
        title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'
    }
]

const tabs = [
    {title: "Галерея"},
    {title: "Об объекте"},
    {title: "Инфраструктура"},
    {title: "Коттеджи"},
    {title: "Варианты отделки"},
    {title: "Застройщик"},
    {title: "Ход строительства"},
];

const ComplexCottages = () => {

    const breadCrumbsStore = useBreadcrumbsStore();
    const router = useRouter()

    const infra = useRef(null);
    const cottages = useRef(null);
    const developer = useRef(null);
    const progress = useRef(null);
    const [refs, setRefs] = useState<any>([]);

    useEffect(()=>{
        setRefs([
            cottages.current,
            developer.current,
            infra.current,
            progress.current,
        ])
        breadCrumbsStore.addBreadCrumbs(`${FILTER_ACTIONS_OPTIONS.filter((a: any) => 'buy' === a.value)[0].label}`,1);
        breadCrumbsStore.addBreadCrumbs('Коттеджный посёлок Лесогор', 2);
    },[router.query.id, breadCrumbsStore])


    return (
        <MainContainer footerColor={"accent"} cabinetStyle={false}>
            <Breadcrumbs location={"object"} items={['Крым', 'Купить участок', 'Участок в Троицком 30 соток']}/>
            <Views items={['12.06.2021', '389']}/>
            <NameEstate item={'Коттеджный посёлок Лесогор'}/>
            <div style={{padding: '0px 60px'}}>
                <HorizontalTabs tabs={tabs} refs={refs}/>
            </div>
            <CottagesGallery/>
            <div ref={infra}>
                <Map
                    currentHouse={currentHouse}
                    infrastructura={infrastructura}
                    location={'infrastructure'}
                    InfrastructureInfo={'Всего 14км до Симферополя, столицы и делового центра Республики Крым, 25км до скоростной трассы Таврида и международного Аэропорта.'}/>
            </div>
            <div ref={cottages}>
                <Cottages/>
            </div>
            <div ref={developer}>
                <ObjectDeveloper
                    developerData={OBJECT_DEVELOPER_INFO}
                />
            </div>
            <div ref={progress}>
                <ConstructProgress
                    info={OPTION_DATA}
                    images={IMAGES_SET}
                />
            </div>



        </MainContainer>
    );
};
export default ComplexCottages



