import type {NextPage} from "next";
import {observer} from "mobx-react-lite";
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import {Breadcrumbs} from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../src/components/shared/Views/Views";
import {NameEstate} from "../../src/components/shared/NameEstate/NameEstate";
import {IMAGES_SET} from "../../src/components/containers/GeneralInfo/config";
import GeneralInfo from "../../src/components/containers/GeneralInfo/GeneralInfo";
import ObjectSpecifications from "../../src/components/containers/ObjectSpecifications/ObjectSpecifications";
import Planning from "../../src/components/containers/Planning/Planning/Plannings";
import PlanningFilter from "../../src/components/containers/PlanningFilter/PlanningFilter";
import Map from "../../src/components/containers/Maps/MapInfrastructure/index";
import ObjectDeveloper from "../../src/components/containers/ObjectDeveloper/ObjectDeveloper";
import ConstructProgress from "../../src/components/containers/ConstructProgress/ConstructProgress";
import {
  MappingDeveloperInfo,
  MappingGeneralInfo,
  MappingShedule,
} from "src/lib/mapping/ResidentComplex/residentComplexMapping";
import {datetoDayFormat} from "src/lib/mapping/objectDates";
import {sortGuide, sortObject_specsTypeGuide,} from "../../src/utils/conversionIcons/conversionIcons";
import {useBreadcrumbsStore} from "../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import {useStore} from "../../src/mobx/stores/ComplexStore/ComplexStore";
import {UrlObj} from "../../src/api/instance";
import {FILTER_ACTIONS_OPTIONS} from "../../src/components/containers/Filter/config";
import css from "../../styles/slider.module.scss";
import AccordionContainerMobile from "../../src/components/containers/AccordionMobile/AccordionContainerModile";
import {DesktopOnly} from "src/components/containers/Adaptive/DesktopOnly";
import {MobileOnly} from "../../src/components/containers/Adaptive/MobileOnly";
import {GeneralInfoMobile} from "../../src/components/containers/GeneralInfo/GeneralInfoMobile";
import {HorizontalTabsObjects} from "../../src/components/shared/HorizontalTabs/HorizontalTabsObjects";

const city = ["????????????", "??????????-??????????????????", "????????", "????????", "???????????? ????????????????"];

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
    title: "???? ??????????????",
  },
  {
    title: "??????????????????????",
  },
  {
    title: "??????????????????????",
  },
  {
    title: "????????????????",
  },
  {
    title: "????????????????????????????",
  },
  {
    title: "????????????????????",
  },
];

const ResidentialComplex: NextPage = observer((props: any) => {
  const store = useStore();
  const breadCrumbsStore = useBreadcrumbsStore();
  const router = useRouter();

  const general = useRef(null);
  const specs = useRef(null);
  const architec = useRef(null);
  const plansec = useRef(null);
  const infra = useRef(null);
  const developer = useRef(null);
  const [refs, setRefs] = useState<any>([]);

  const views = props.publish
    ? [datetoDayFormat(props.publish), props.views]
    : [];

  useEffect(() => {
    setRefs([
      general.current,
      specs.current,
      architec.current,
      plansec.current,
      infra.current,
      developer.current,
    ]);
    store.fetch(router.query.id);
    breadCrumbsStore.addBreadCrumbs(
      `${
        FILTER_ACTIONS_OPTIONS.filter(
          (a: any) => props.orderType === a.value
        )[0].label
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
      footerColor={"accent"}
      refs={refs}
    >
      <div className={css.vh_wh}>
        <Breadcrumbs location={"object"} />
        <Views items={views} />
        <NameEstate item={props.name} />
        <DesktopOnly>
          {/*<AdressEstate item={props.address} />*/}
          <HorizontalTabsObjects tabs={tabs} refs={refs} />
          <div ref={general}>
            <GeneralInfo
                residentialComplex
                info={MappingGeneralInfo(
                    props.name,
                    props.address,
                    props.category,
                    props.info_options[0],
                    props.object_specs
                )}
                images={
                  props.images
                      ? props.images.map((el: { id: number; url: string }) => el.url)
                      : IMAGES_SET
                }
                // classSlider={css.image}
            />
          </div>
        </DesktopOnly>
        <MobileOnly>
          <GeneralInfoMobile
              info={MappingGeneralInfo(
                  props.name,
                  props.address,
                  props.category,
                  props.info_options[0],
                  props.object_specs
              )}
              images={
                props.images
                    ? props.images.map((el: { id: number; url: string }) => el.url)
                    : IMAGES_SET
              }
          />
        </MobileOnly>
        <div ref={specs}>
          <ObjectSpecifications
              specificationsLists={sortObject_specsTypeGuide(
                  props.object_specs
                      .map((guid: any) => sortGuide(guid, guid.subtitle_ru))
                      .filter((f: any) => f !== undefined)
              ).filter(
                  (s: any) =>
                      s.subtitle === "?????????????? ???? ????????????????????" ||
                      s.subtitle === "????????????????????????"
              )}
              title={"??????????????????????"}
          />
        </div>
        <div ref={architec}>
          <ObjectSpecifications
              specificationsLists={sortObject_specsTypeGuide(
                  props.object_specs
                      .map((guid: any) => sortGuide(guid, guid.subtitle_ru))
                      .filter((f: any) => f !== undefined)
              ).filter(
                  (s: any) =>
                      s.subtitle === "??????????????????????-?????????????????????? ????????????????????" ||
                      s.subtitle === "???????????????????? ????????????????????????"
              )}
              title={"????????????????????????-?????????????????????????? ??????????????"}
          />
        </div>
        <div ref={plansec}>
          {props.planningList.length > 0 && (
              <Planning
                  FilterComponent={<PlanningFilter />}
                  planningList={props.planningList}
              />
          )}
        </div>
        <div ref={infra}>
          <Map
              currentHouse={props}
              location={"infrastructure"}
              InfrastructureInfo={props.info_options[0].infrastructure}
          />
        </div>
        <MobileOnly>
          <div ref={developer}>
            <AccordionContainerMobile
                developerData={MappingDeveloperInfo(props.object_developer_info)}
            />
          </div>
        </MobileOnly>
        <DesktopOnly>
          <div ref={developer}>
            <ObjectDeveloper
                developerData={MappingDeveloperInfo(props.object_developer_info)}
            />
          </div>
        </DesktopOnly>
        {props.schedule.length > 0 ? (
            <ConstructProgress
                info={MappingShedule(props.schedule)}
                images={
                  props.images
                      ? props.images.map((el: { id: number; url: string }) => el.url)
                      : IMAGES_SET
                }
            />
        ) : (
            <div style={{ height: "40px" }}> </div>
        )}
      </div>

    </MainContainer>
  );
});

export default ResidentialComplex;

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`${process.env.HOST}${UrlObj.complex}/${params.id}`);
  const object = await res.json();

  return {
    props: object,
  };
}
