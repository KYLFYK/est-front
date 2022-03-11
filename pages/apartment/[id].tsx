import type { NextPage } from "next";
import { observer } from "mobx-react-lite";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainContainer } from "../../src/components/containers/MainContainer/MainContainer";
import { Breadcrumbs } from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import { Views } from "../../src/components/shared/Views/Views";
import { NameEstate } from "../../src/components/shared/NameEstate/NameEstate";
import { AdressEstate } from "../../src/components/shared/AdressEstate/AdressEstate";
import { HorizontalTabs } from "../../src/components/shared/HorizontalTabs/HorizontalTabs";
import GeneralInfo from "../../src/components/containers/GeneralInfo/GeneralInfo";
import ObjectDescription from "../../src/components/containers/ObjectDescription/ObjectDescription";
import ToursContainer from "../../src/components/containers/ToursContainer/ToursContainer";
import ObjectSpecifications from "../../src/components/containers/ObjectSpecifications/ObjectSpecifications";
import Map from "../../src/components/containers/Maps/MapInfrastructure/index";
import { infrastructura } from "../../src/components/containers/Maps/MapInfrastructure/config";
import ObjectLegalPurity from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity";
import ObjectDeveloper from "../../src/components/containers/ObjectDeveloper/ObjectDeveloper";
import { Mortgage } from "../../src/components/shared/Mortgage/Mortgage";
import { Record } from "../../src/components/containers/Record/Record";
import RecordAgent from "../../src/components/containers/Record/RecordAgent.json";
import { Footer } from "../../src/components/widget/Footer/ui/Footer";
import {
  MappingGeneralInfo,
  MappingDescription,
  MappingLegalPurity,
} from "src/lib/mapping/Apartment/apartmentMapping";
import { MappingDeveloperInfo } from "src/lib/mapping/ResidentComplex/residentComplexMapping";
import { datetoDayFormat } from "src/lib/mapping/objectDates";
import {
  sortObject_specsTypeGuide,
  sortGuide,
} from "../../src/utils/conversionIcons/conversionIcons";
import { useStore } from "../../src/mobx/stores/ApartamentStore/ApartmentStore";
import { useBreadcrumbsStore } from "../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import { instance, UrlObj } from "../../src/api/instance";
import {
  FILTER_ACTIONS_OPTIONS,
  FILTER_HOUSE_TYPE_OPTIONS,
} from "../../src/components/containers/Filter/config";

const city = ["Москва", "Санкт-Петербург", "Крым", "Сочи", "Нижний Новгород"];
const personalAccount = [
  { title: "Личный кабинет", href: "/User", message: 0 },
  { title: "Избранное", href: "/User", message: 0 },
  { title: "Сохраненные поиски", href: "/User", message: 0 },
  { title: "Сообщения", href: "/User", message: 12 },
  { title: "Уведомления", href: "/User", message: 3 },
  { title: "Мои объекты", href: "/User", message: 0 },
  { title: "Проверка объекта", href: "/User", message: 0 },
];

const infrastructureInfo =
  "В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.";

const Apartment: NextPage = observer((props: any) => {
  const store = useStore();
  const breadCrumbsStore = useBreadcrumbsStore();
  const tabs = [
    { title: "Общая информация" },
    (props?.online_tour?.threeD_tour?.url || props?.online_tour?.vr_tour?.url) && { title: "Онлайн-тур" },
    { title: "Архитектура" },
    { title: "Инфраструктура" },
    props.object_developer_info && { title: "Застройщик" },
    props.legalPurityData && { title: "Юридическая чистота" },
    { title: "Записаться на просмотр" },
  ];
  const general = useRef(null);
  const tours = useRef(null);
  const architec = useRef(null);
  const infra = useRef(null);
  const legal = useRef(null);
  const develop = useRef(null);
  const record = useRef(null);
  const [refs, setRefs] = useState<any>([]);

  const router = useRouter();

  const views = [datetoDayFormat(props.publish), props.views, props?.agency];

  useEffect(() => {
    setRefs([
      general.current,
      props.online_tour && tours.current,
      architec.current,
      infra.current,
      props.object_developer_info && develop.current,
      props.legalPurityData && legal.current,
      record.current,
    ]);
    store.fetch(router.query.id);
    breadCrumbsStore.addBreadCrumbs(
      `${
        FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)
          ? FILTER_ACTIONS_OPTIONS.filter(
              (a: any) => props.orderType === a.value
            )[0].label
          : "нет сделки"
      } ${
        FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0]
          ? FILTER_HOUSE_TYPE_OPTIONS.filter(
              (a: any) => props.type === a.value
            )[0].label
          : "нет типа"
      }`,
      1
    );
    breadCrumbsStore.addBreadCrumbs(props.name, 2);
  }, [router.query.id, store]);

  return (
    <MainContainer
      keywords={props.name}
      title={props.name}
      city={city}
      personalAccount={personalAccount}
      refs={refs}
    >
      <Breadcrumbs location={"object"} />
      <Views items={views} />
      <NameEstate item={props.name} />
      <AdressEstate item={props.address} />
      <HorizontalTabs refs={refs} tabs={tabs} />
      <div ref={general}>
        <GeneralInfo
          info={MappingGeneralInfo(props.info_options, props.object_specs)}
          price={props.price}
          images={props.images}
        />
      </div>
      <ObjectDescription items={MappingDescription(props.description_items)} />
      {(props?.online_tour?.threeD_tour?.url || props?.online_tour?.vr_tour?.url) && (
        <div ref={tours}>
          <ToursContainer Online_tour={props.online_tour} />
        </div>
      )}
      <div ref={architec}>
        <ObjectSpecifications
          specificationsLists={sortObject_specsTypeGuide(
            props.object_specs
              .map((guid: any) => sortGuide(guid, guid.subtitle_ru))
              .filter((f: any) => f !== undefined)
          )}
          title={"Архитектурно-планировочные решения"}
        />
      </div>
      <div ref={infra}>
        <Map
          currentHouse={props}
          location={"infrastructure"}
          InfrastructureInfo={infrastructureInfo}
        />
      </div>

      {props.object_developer_info && (
        <div ref={develop}>
          <ObjectDeveloper
            developerData={MappingDeveloperInfo(props.object_developer_info)}
          />
        </div>
      )}
      {props.legalPurityData && (
        <div ref={legal}>
          {props.legalPurityData && (
            <ObjectLegalPurity
              legalPurityData={MappingLegalPurity(props.legalPurityData)}
            />
          )}
        </div>
      )}

      <Mortgage />
      <div ref={record}>
        <Record Record={RecordAgent.Record} title={"квартиру"} />
      </div>
      <Footer color={"nude"} />
    </MainContainer>
  );
});

export default Apartment;

export async function getServerSideProps({ params }: any) {
  const res = await fetch(
    `https://estatum.f-case.ru/api/${UrlObj.apartment}/${params.id}`
  );
  const object = await res.json();
  return {
    props: object,
  };
}
