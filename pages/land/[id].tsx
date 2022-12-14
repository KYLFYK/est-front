import {observer} from "mobx-react-lite";
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import {Breadcrumbs} from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../src/components/shared/Views/Views";
import {NameEstate} from "../../src/components/shared/NameEstate/NameEstate";
import {AdressEstate} from "../../src/components/shared/AdressEstate/AdressEstate";
import GeneralInfo from "../../src/components/containers/GeneralInfo/GeneralInfo";
import ObjectDescription from "../../src/components/containers/ObjectDescription/ObjectDescription";
import ObjectSpecifications from "../../src/components/containers/ObjectSpecifications/ObjectSpecifications";
import Map from "../../src/components/containers/Maps/MapInfrastructure/index";
import {infrastructura} from "../../src/components/containers/Maps/MapInfrastructure/config";
import ObjectLegalPurity from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity";
import {Mortgage} from "../../src/components/shared/Mortgage/Mortgage";
import {Record} from "../../src/components/containers/Record/Record";
import RecordAgent from "../../src/components/containers/Record/RecordAgent.json";
import {UrlObj} from "../../src/api/instance";
import {ObjectLandType} from "../../src/api/obj/land";
import {conversionDate} from "../../src/utils/conversionDate/conversionDate";
import {sortGuide, sortObject_specsTypeGuide,} from "../../src/utils/conversionIcons/conversionIcons";
import {useBreadcrumbsStore} from "../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS,} from "../../src/components/containers/Filter/config";
import {MobileOnly} from "../../src/components/containers/Adaptive/MobileOnly";
import {DesktopOnly} from "../../src/components/containers/Adaptive/DesktopOnly";
import css from "../../styles/slider.module.scss";
import ObjectLegalPurityMobile from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurityMobile";
import {GeneralInfoMobile} from "../../src/components/containers/GeneralInfo/GeneralInfoMobile";
import {HorizontalTabsObjects} from "../../src/components/shared/HorizontalTabs/HorizontalTabsObjects";

const city = ["????????????", "????????", "????????"];
const personalAccount = [
  { title: "???????????? ??????????????", href: "/User", message: 0 },
  { title: "??????????????????", href: "/User", message: 0 },
  { title: "?????????????????????? ????????????", href: "/User", message: 0 },
  { title: "??????????????????", href: "/User", message: 12 },
  { title: "??????????????????????", href: "/User", message: 3 },
  { title: "?????? ??????????????", href: "/User", message: 0 },
  { title: "???????????????? ??????????????", href: "/User", message: 0 },
];

const tabs = [
  {
    title: "?????????? ????????????????????",
  },
  {
    title: "???? ??????????????",
  },
  {
    title: "????????????????????????????",
  },
  {
    title: "?????????????????????? ??????????????",
  },
  {
    title: "???????????????????? ???? ????????????????",
  },
];

const Land = observer((props: ObjectLandType) => {
  const breadCrumbsStore = useBreadcrumbsStore();
  const general = useRef(null);
  const specs = useRef(null);
  const infra = useRef(null);
  const legal = useRef(null);
  const record = useRef(null);
  const [refs, setRefs] = useState<any>([]);

  const router = useRouter();

  const views = [
    props.publish ? props.publish : "",
    props.views?.toString() ? props.views?.toString() : "",
    props.agency ? props.agency : "",
  ];

  useEffect(() => {
    setRefs([
      general.current,
      specs.current,
      infra.current,
      legal.current,
      record.current,
    ]);
    breadCrumbsStore.addBreadCrumbs(
      `${
        FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)
          ? FILTER_ACTIONS_OPTIONS.filter(
              (a: any) => props.orderType === a.value
            )[0].label
          : "?????? ????????????"
      } ${
        FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0]
          ? FILTER_HOUSE_TYPE_OPTIONS.filter(
              (a: any) => props.type === a.value
            )[0].label
          : "?????? ????????"
      }`,
      1
    );
    breadCrumbsStore.addBreadCrumbs(props.name, 2);
  }, [router.query.id]);

  return (
    <MainContainer
      keywords={props.name}
      title={props.name}
      city={city}
      personalAccount={personalAccount}
      footerColor={"accent"}
      refs={refs}
    >
      <div className={css.vh_wh}>
      <Breadcrumbs location={"object"} />
      <Views items={views} />
      <NameEstate item={props.name} />
      <DesktopOnly>
        <AdressEstate item={props.address} />
        <HorizontalTabsObjects tabs={tabs} refs={refs} />
        <div ref={general}>
          <GeneralInfo
            info={props.info_options}
            price={props.price}
            images={props.images}
            classSlider={css.image}
          />
        </div>
      </DesktopOnly>
      <MobileOnly>
        <GeneralInfoMobile
          info={props.info_options}
          price={props.price}
          images={props.images}
        />
      </MobileOnly>
      <ObjectDescription items={props.description_items} />
      <div ref={specs}>
        {props.object_specs && (
          <ObjectSpecifications
            specificationsLists={props.object_specs}
            title={"???? ??????????????"}
          />
        )}
      </div>
      <div ref={infra}>
        <Map
          currentHouse={props}
          infrastructura={infrastructura}
          location={"infrastructure"}
          InfrastructureInfo={props.description_Info.toString()}
        />
      </div>
      <MobileOnly>
        <div ref={legal}>
          {props.legalPurityData && (
            <ObjectLegalPurityMobile legalPurityData={props.legalPurityData} />
          )}
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div ref={legal}>
          {props.legalPurityData && (
            <ObjectLegalPurity legalPurityData={props.legalPurityData} />
          )}
        </div>
      </DesktopOnly>
      <Mortgage />
      </div>
        <div ref={record} style={{backgroundColor:'#1A4862'}}>
          <Record
            Record={RecordAgent.Record}
            title={"??????????????"}
            nameObject={props.name}
          />
        </div>
    </MainContainer>
  );
});

export default Land;

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`${process.env.HOST}${UrlObj.land}/${params.id}`);
  // const objectPlatApi: IgetLandIdSSPType = await res.json()
  const objectPlatApi = await res.json();

  const object_specsGuide:
    | Array<{ value: string; label: { title: string; text: string } }>
    | [] = objectPlatApi?.object_specs
    ?.map((guid: any) => sortGuide(guid, guid.subtitle_ru))
    .filter((f: any) => f !== undefined);

  const objectPlat = {
    images: [
      // ????????
      {
        url: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        id: 0,
      },
      {
        url: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        id: 1,
      },
      {
        url: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
        id: 2,
      },
    ],
    object_id: objectPlatApi.object_id,
    lang: "ru",
    name: objectPlatApi.name,
    type: objectPlatApi.type,
    category: objectPlatApi.category,
    address: objectPlatApi.address,
    city: objectPlatApi.city ? objectPlatApi.city : "",
    lat: +objectPlatApi.lat,
    lng: +objectPlatApi.lng,
    price: objectPlatApi.price,
    sort: objectPlatApi.sort ? objectPlatApi.sort : 0,
    planning: objectPlatApi.planning,
    favorite: false,
    orderType: objectPlatApi.orderType,
    publish: conversionDate(objectPlatApi.publish),
    views: objectPlatApi.views,
    agency: objectPlatApi.agency ? objectPlatApi.agency : "",
    info_options: objectPlatApi.info_options,
    description_items: [objectPlatApi.description_items],
    description_Info: [objectPlatApi.description_Info],
    object_specs: sortObject_specsTypeGuide(object_specsGuide),
    legalPurityData: {
      //fail
      encumbrances: false,
      risks: objectPlatApi.legalPurityData.risks,
      tabsData: {
        general: [
          {
            value: "???????????? ???? ????????",
            description: "?????? ?????????????????????? ?????????????????? ?? ???????????? ???? ????????",
            label: [
              {
                title: "??????????",
                text: objectPlatApi.legalPurityData.address,
              },
              {
                title: "?????????????????????? ??????????",
                text: objectPlatApi.legalPurityData.cadastalNumber,
              },
              {
                title: "?????????????????????? ??????????????????",
                text: objectPlatApi.legalPurityData.cadastralPrice,
              },
              {
                title: "?????????? ??????????????",
                text:
                  objectPlatApi.legalPurityData.areaValue +
                  " " +
                  objectPlatApi.legalPurityData.areaUnits,
              },
            ],
          },
        ],
        founders: [
          {
            value: "?????????????? ??????????????????",
            label: [
              {
                title: "?????????????????????? ??????????????????????",
                text: objectPlatApi.legalPurityData.currentOwnerName,
              },
              {
                title: "77-77-08/011/2021-0308",
                text: conversionDate(
                  objectPlatApi.legalPurityData.currentOwnerStartDate
                ),
              },
            ],
          },
          {
            value: "???????????????????? ??????????????????",
            description: "?????????????????????? ?????????????????? ???????????????????? ????????????????????",
            label: [
              {
                title: `${objectPlatApi.legalPurityData.previewOwners.owners.length} ??????????????????`,
                text: objectPlatApi.legalPurityData.previewOwners.owners.join(
                  ""
                ),
              },
              {
                title: "77-77-08/011/2021-0308",
                text:
                  conversionDate(
                    objectPlatApi.legalPurityData.previewOwners.startDate
                  ) +
                  " - " +
                  conversionDate(
                    objectPlatApi.legalPurityData.previewOwners.finishDate
                  ),
              },
            ],
          },
        ],
        encumbrances: [
          {
            title: "?????????????? ??????????????????",
            encumbrances: objectPlatApi.legalPurityData.encumbrances
              ? objectPlatApi.legalPurityData.encumbrances.map(
                  (encum: any) => ({
                    status: encum.status ? 0 : 1,
                    description: encum.description,
                    text: encum.title,
                  })
                )
              : [
                  {
                    status: 0,
                    description: "???????????? ???? ??????????????",
                    text: "???????????? ???? ??????????????",
                  },
                ],
          },
        ],
        recomendations: objectPlatApi.legalPurityData.recomendations
          ? objectPlatApi.legalPurityData.recomendations.map((rec: any) => ({
              value: rec.title,
              label: rec.description,
            }))
          : [
              {
                value: "???????????? ???? ??????????????",
                label: "???????????? ???? ??????????????",
              },
            ],
      },
    },
  };
  return {
    props: objectPlat,
  };
}
