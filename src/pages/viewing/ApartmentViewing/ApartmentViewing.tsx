import React, {useEffect, useRef, useState} from 'react';
import {NextPage} from "next";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../mobx/stores/ApartamentStore/ApartmentStore";
import {useBreadcrumbsStore} from "../../../mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import {useRouter} from "next/router";
import {datetoDayFormat} from "../../../lib/mapping/objectDates";
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS} from "../../../components/containers/Filter/config";
import {MainContainer} from "../../../components/containers/MainContainer/MainContainer";
import {Breadcrumbs} from "../../../components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../../components/shared/Views/Views";
import {NameEstate} from "../../../components/shared/NameEstate/NameEstate";
import {AdressEstate} from "../../../components/shared/AdressEstate/AdressEstate";
import {HorizontalTabs} from "../../../components/shared/HorizontalTabs/HorizontalTabs";
import GeneralInfo from "../../../components/containers/GeneralInfo/GeneralInfo";
import {MappingDescription, MappingGeneralInfo, MappingLegalPurity} from "../../../lib/mapping/Apartment/apartmentMapping";
import css from "../../../../styles/slider.module.scss";
import ObjectDescription from "../../../components/containers/ObjectDescription/ObjectDescription";
import ToursContainer from "../../../components/containers/ToursContainer/ToursContainer";
import ObjectSpecifications from "../../../components/containers/ObjectSpecifications/ObjectSpecifications";
import {sortGuide, sortObject_specsTypeGuide} from "../../../utils/conversionIcons/conversionIcons";
import Map from "../../../components/containers/Maps/MapInfrastructure";
import ObjectDeveloper from "../../../components/containers/ObjectDeveloper/ObjectDeveloper";
import {MappingDeveloperInfo} from "../../../lib/mapping/ResidentComplex/residentComplexMapping";
import ObjectLegalPurity from "../../../components/containers/ObjectLegalPurity/ObjectLegalPurity";
import {Mortgage} from "../../../components/shared/Mortgage/Mortgage";
import {Record} from "../../../components/containers/Record/Record";
import RecordAgent from "../../../components/containers/Record/RecordAgent.json";
import {Footer} from "../../../components/widget/Footer/ui/Footer";

const ApartmentViewing = observer(() => {
    return(
        <div>
            ApartmentViewing
        </div>
    )


        // const store = useStore();
        // const breadCrumbsStore = useBreadcrumbsStore();
        // const tabs = [
        //     { title: "Общая информация" },
        //     (props?.online_tour?.threeD_tour?.url || props?.online_tour?.vr_tour?.url) && { title: "Онлайн-тур" },
        //     { title: "Архитектура" },
        //     { title: "Инфраструктура" },
        //     props.object_developer_info && { title: "Застройщик" },
        //     props.legalPurityData && { title: "Юридическая чистота" },
        //     { title: "Записаться на просмотр" },
        // ];
        // const general = useRef(null);
        // const tours = useRef(null);
        // const architec = useRef(null);
        // const infra = useRef(null);
        // const legal = useRef(null);
        // const develop = useRef(null);
        // const record = useRef(null);
        // const [refs, setRefs] = useState<any>([]);
        //
        // const router = useRouter();
        //
        // const views = [datetoDayFormat(props.publish), props.views, props?.agency];
        //
        // useEffect(() => {
        //     setRefs([
        //         general.current,
        //         props.online_tour && tours.current,
        //         architec.current,
        //         infra.current,
        //         props.object_developer_info && develop.current,
        //         props.legalPurityData && legal.current,
        //         record.current,
        //     ]);
        //     store.fetch(router.query.id);
        //     breadCrumbsStore.addBreadCrumbs(
        //         `${
        //             FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)
        //                 ? FILTER_ACTIONS_OPTIONS.filter(
        //                     (a: any) => props.orderType === a.value
        //                 )[0].label
        //                 : "нет сделки"
        //         } ${
        //             FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0]
        //                 ? FILTER_HOUSE_TYPE_OPTIONS.filter(
        //                     (a: any) => props.type === a.value
        //                 )[0].label
        //                 : "нет типа"
        //         }`,
        //         1
        //     );
        //     breadCrumbsStore.addBreadCrumbs(props.name, 2);
        // }, [router.query.id, store]);
        //
        // return (
        //     <MainContainer
        //         keywords={props.name}
        //         title={props.name}
        //         city={city}
        //         personalAccount={personalAccount}
        //         refs={refs}
        //     >
        //         <Breadcrumbs location={"object"} />
        //         <Views items={views} />
        //         <NameEstate item={props.name} />
        //         <AdressEstate item={props.address} />
        //         <HorizontalTabs refs={refs} tabs={tabs} />
        //         <div ref={general}>
        //             <GeneralInfo
        //                 info={MappingGeneralInfo(props.info_options, props.object_specs)}
        //                 price={props.price}
        //                 images={props.images}
        //                 classSlider={css.image}
        //             />
        //         </div>
        //         <ObjectDescription items={MappingDescription(props.description_items)} />
        //         {(props?.online_tour?.threeD_tour?.url || props?.online_tour?.vr_tour?.url) && (
        //             <div ref={tours}>
        //                 <ToursContainer Online_tour={props.online_tour} />
        //             </div>
        //         )}
        //         <div ref={architec}>
        //             <ObjectSpecifications
        //                 specificationsLists={sortObject_specsTypeGuide(
        //                     props.object_specs
        //                         .map((guid: any) => sortGuide(guid, guid.subtitle_ru))
        //                         .filter((f: any) => f !== undefined)
        //                 )}
        //                 title={"Архитектурно-планировочные решения"}
        //             />
        //         </div>
        //         <div ref={infra}>
        //             <Map
        //                 currentHouse={props}
        //                 location={"infrastructure"}
        //                 InfrastructureInfo={infrastructureInfo}
        //             />
        //         </div>
        //
        //         {props.object_developer_info && (
        //             <div ref={develop}>
        //                 <ObjectDeveloper
        //                     developerData={MappingDeveloperInfo(props.object_developer_info)}
        //                 />
        //             </div>
        //         )}
        //         {props.legalPurityData && (
        //             <div ref={legal}>
        //                 {props.legalPurityData && (
        //                     <ObjectLegalPurity
        //                         legalPurityData={MappingLegalPurity(props.legalPurityData)}
        //                     />
        //                 )}
        //             </div>
        //         )}
        //
        //         <Mortgage />
        //         <div ref={record}>
        //             <Record Record={RecordAgent.Record} title={"квартиру"} nameObject={props.name} />
        //         </div>
        //         <Footer color={"nude"} />
        //     </MainContainer>
        // );
})

export default ApartmentViewing;