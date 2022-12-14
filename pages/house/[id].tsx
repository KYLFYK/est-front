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
import ToursContainer from "../../src/components/containers/ToursContainer/ToursContainer";
import ObjectSpecifications from "../../src/components/containers/ObjectSpecifications/ObjectSpecifications";
import Map from "../../src/components/containers/Maps/MapInfrastructure/index";
import {infrastructura} from "../../src/components/containers/Maps/MapInfrastructure/config";
import ObjectLegalPurity from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity";
import {Mortgage} from "../../src/components/shared/Mortgage/Mortgage";
import {Record} from "../../src/components/containers/Record/Record";
import RecordAgent from "../../src/components/containers/Record/RecordAgent.json";
import {useBreadcrumbsStore} from "../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import {UrlObj} from "../../src/api/instance";
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS,} from "../../src/components/containers/Filter/config";
import {sortGuide, sortObject_specsTypeGuide,} from "../../src/utils/conversionIcons/conversionIcons";
import {conversionDate} from "../../src/utils/conversionDate/conversionDate";
import PaybackContainer from "../../src/components/containers/PaybackContainer/PaybackContainer";
import {plusUnitMeasurement} from "../../src/utils/plusUnitMeasurement/plusUnitMeasurement";
import {MobileOnly} from "../../src/components/containers/Adaptive/MobileOnly";
import {DesktopOnly} from "../../src/components/containers/Adaptive/DesktopOnly";
import ObjectLegalPurityMobile from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurityMobile";
import css from "../../styles/slider.module.scss";
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

const averagePrice = {
  price: "150 001 240",
  priceUSD: " 2 025 221.09",
  priceEU: "1 728 447.47",
  priceMetre: "79 000",
  priceMetreUSD: "1 0066.61",
  priceMetreEU: "910.31",
};

const sortInfoOptions = (option: {}) => {
  // ???????????????????? ?? ???????????? ???????????? - info_options
  const infoOptions = [];
  const keysOption = Object.keys(option);

  for (let n = 0; n < keysOption.length; n++) {
    if (keysOption[n] === "total_floor")
      infoOptions.push({
        label: "??????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "total_area")
      infoOptions.push({
        label: "?????????? ??????????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "area")
      infoOptions.push({
        label: "?????????????? ????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "land_area")
      infoOptions.push({
        label: "??????????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "bathroom_area")
      infoOptions.push({
        label: "???????????? ??????????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "kitchen_area")
      infoOptions.push({
        label: "??????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "total_rooms")
      infoOptions.push({
        label: "???????????? ?? ????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
    if (keysOption[n] === "living_area")
      infoOptions.push({
        label: "?????????? ??????????????",
        //@ts-ignore
        value: option[keysOption[n]] !== null ? option[keysOption[n]] : "",
      });
  }
  return infoOptions;
};

const House = observer((props: any) => {
  const tabs = [
    { title: "?????????? ????????????????????" },
    props.online_tour && { title: "????????????-??????" },
    { title: "??????????????????????" },
    { title: "????????????????????????????" },
    props.legalPurityData && { title: "?????????????????????? ??????????????" },
    { title: "??????????????????????" },
    props.object_developer_info && { title: "????????????????????" },
    { title: "???????????????????? ???? ????????????????" },
  ];

  let floors = props.info_options?.floors
    ? props.info_options.floors
    : [{ floor: "", value: "" }];
  const construction_feat = props.info_options?.construction_features
    ? props.info_options.construction_features
    : [{ title: "", value: "" }];
  const construction_features = [...construction_feat];
  // delete props.info_options.floors
  // delete props.info_options.construction_features
  const infoOptions = sortInfoOptions(props.info_options);
  const optionFloors = floors
    ? floors.map((floo: any) => ({ label: floo.floor, value: floo.value }))
    : [
        {
          label: "1",
          value: "2",
        },
      ];
  const construction_featuresFilter = construction_features.map(
    (construction, index) => ({
      value: index % 2 ? "construction_features2" : "construction_features1",
      label: { title: construction.title, text: "" },
    })
  );

  infoOptions.push(...optionFloors);
  const construction_featuresSpec = {
    subtitle: "?????????????????????? ??????????????????????????",
    specificationsItems: construction_featuresFilter,
  };
  let object_specsGuide: Array<{
    value: string;
    label: { title: string; text: string };
  }> = props.object_specs
    .map((guid: any) => sortGuide(guid, guid.subtitle_ru))
    .filter((f: any) => f !== undefined);
  const object_specs = sortObject_specsTypeGuide(object_specsGuide);
  object_specs.splice(2, 0, construction_featuresSpec);

  const legalPurityData = {
    encumbrances: false,
    risks: props.legalPurityData.risks,
    tabsData: {
      general: [
        {
          value: "???????????? ???? ????????",
          description: "?????? ?????????????????????? ?????????????????? ?? ???????????? ???? ????????",
          label: [
            {
              title: "??????????",
              text: props.legalPurityData.address,
            },
            {
              title: "?????????????????????? ??????????",
              text: props.legalPurityData.cadastalNumber,
            },
            {
              title: "?????????????????????? ??????????????????",
              text: props.legalPurityData.cadastralPrice,
            },
            {
              title: "?????????? ??????????????",
              text:
                props.legalPurityData.areaValue +
                " " +
                props.legalPurityData.areaUnits,
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
              text: props.legalPurityData.currentOwnerName,
            },
            {
              title: "77-77-08/011/2021-0308",
              text: conversionDate(props.legalPurityData.currentOwnerStartDate),
            },
          ],
        },
        {
          value: "???????????????????? ??????????????????",
          description: "?????????????????????? ?????????????????? ???????????????????? ????????????????????",
          label: [
            {
              title: `${props.legalPurityData.previewOwners.owners.length} ??????????????????`,
              text: props.legalPurityData.previewOwners.owners.join(""),
            },
            {
              title: "77-77-08/011/2021-0308",
              text:
                conversionDate(props.legalPurityData.previewOwners.startDate) +
                " - " +
                conversionDate(props.legalPurityData.previewOwners.finishDate),
            },
          ],
        },
      ],
      encumbrances: [
        {
          title: "?????????????? ??????????????????",
          encumbrances: props.legalPurityData.encumbrances
            ? props.legalPurityData.encumbrances.map((encum: any) => ({
                status: encum.status ? 0 : 1,
                description: encum.description,
                text: encum.title,
              }))
            : [],
        },
      ],
      recomendations: props.legalPurityData.recomendations
        ? props.legalPurityData.recomendations.map((rec: any) => ({
            value: rec.title,
            label: rec.description,
          }))
        : [],
    },
  };

  const breadCrumbsStore = useBreadcrumbsStore();
  const general = useRef(null);
  const tours = useRef(null);
  const architec = useRef(null);
  const infra = useRef(null);
  const legal = useRef(null);
  const payback = useRef(null);
  const developer = useRef(null);
  const record = useRef(null);
  const [refs, setRefs] = useState<any>([]);

  const router = useRouter();

  const views = [conversionDate(props.publish), props.views, props.agency];

  useEffect(() => {
    setRefs([
      general.current,
      props.online_tour && tours.current,
      architec.current,
      infra.current,
      props.legalPurityData && legal.current,
      payback.current,
      props.object_developer_info && developer.current,
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
        <div>
          <HorizontalTabsObjects tabs={tabs} refs={refs} />
        </div>
        <div ref={general}>
          {infoOptions && (
            <GeneralInfo
              info={plusUnitMeasurement(infoOptions)}
              price={props.price}
              images={props.images}
              // classSlider={css.image}
            />
          )}
        </div>
      </DesktopOnly>
      <MobileOnly>
        <GeneralInfoMobile
          info={plusUnitMeasurement(infoOptions)}
          price={props.price}
          images={props.images}
        />
      </MobileOnly>
      {props.description && <ObjectDescription items={[props.description]} />}
      <div ref={tours}>
        {(props?.online_tour?.threeD_tour?.url ||
          props?.online_tour?.vr_tour?.url) && (
          <ToursContainer Online_tour={props.online_tour} />
        )}
      </div>
      <div ref={architec}>
        {object_specs && (
          <ObjectSpecifications
            specificationsLists={object_specs}
            title={"????????????????????????-?????????????????????????? ??????????????"}
          />
        )}
      </div>
      <div ref={infra}>
        <Map
          currentHouse={JSON.parse(JSON.stringify(props))}
          infrastructura={infrastructura}
          location={"infrastructure"}
          InfrastructureInfo={
            props.description_items ? props.description_items : ""
          }
        />
      </div>

      <MobileOnly>
        <div ref={legal}>
          {legalPurityData && (
            <ObjectLegalPurityMobile legalPurityData={legalPurityData} />
          )}
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div ref={legal}>
          {legalPurityData && (
            <ObjectLegalPurity legalPurityData={legalPurityData} />
          )}
        </div>
      </DesktopOnly>
      <Mortgage />
      <div ref={payback}>
        <PaybackContainer
          currentHouse={JSON.parse(JSON.stringify(props))}
          averagePrice={averagePrice}
        />
      </div>
      </div>
        <div ref={record} style={{backgroundColor:'#1A4862'}}>
          <Record
            Record={RecordAgent.Record}
            title={"??????"}
            nameObject={props.name}
          />
        </div>
      <div ref={developer}>
        {/*<ObjectDeveloper developerData={store.initialData.object_developer_info}/>*/}
      </div>
    </MainContainer>
  );
});

export default House;

export async function getServerSideProps({ params }: any) {
  const res = await fetch(
    // `${process.env.HOST}${UrlObj.house}/${params.id}`
    `https://estatum.f-case.ru/api/${UrlObj.house}/${params.id}`
    // `http://marketplace-back:8008/api/${UrlObj.house}/${params.id}`
  );

  const house = await res.json();
  return {
    props: house,
  };
}
