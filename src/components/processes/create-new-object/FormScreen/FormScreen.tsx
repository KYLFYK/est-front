import Link from "next/link";
import React, { FC, useState, useCallback, useEffect } from "react";
import NavArrowIcon from "../../../../icons/NavArrow/NavArrow";
import { ObjectTypes } from "../../../../utils/interfaces/objects";
import Typography from "../../../shared/Typography/Typography";
import AboutObject from "../components/AboutObjectTab/AboutObject";
import GeneralInfoDataTab from "../components/GeneralInfoObjectTab/GeneralInfoDataTab";
import GeneralInfoDescriptionTab from "../components/GeneralInfoObjectTab/GeneralInfoDescriptionTab";
import GeneralInfoPhotosTab from "../components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import HouseInfoDetailsTab from "../components/HouseInfoTab/HouseInfoDetailsTab";
import HouseInfoInterierTab from "../components/HouseInfoTab/HouseInfoInterierTab";
import InfrastructureTab from "../components/InfrastructureTab/InfrastructureTab";
import LandInfoTab from "../components/LandInfoTab/LandInfoTab";
import LegalPurityDetails from "../components/LegalPurityTab/LegalPurityDetails";
import LegalPurityFounders from "../components/LegalPurityTab/LegalPurityFounders";
import MultipleHorizontalTab, {
  ICreateObjectTabs,
} from "../components/MultipleHorizontalTab/MultipleHorizontalTab";
import CreateObjectSuccessPage from "../components/SuccessPage/SuccessPage";
import { observer } from "mobx-react-lite";
import {
  GuideObject,
  ObjectGuides,
} from "../../../../mobx/stores/objects/GuidesStore";
import { toJS } from "mobx";

import s from "./FormScreen.module.scss";

interface Props {
  objectType: ObjectTypes;
  clearObjectType: () => void;
}

const objEnumToString: (type: ObjectTypes) => GuideObject = (type) => {
  switch (type) {
    case ObjectTypes.APARTMENTS:
      return "apartment";
    case ObjectTypes.HOUSE:
      return "house";
    case ObjectTypes.LAND:
      return "land";
    case ObjectTypes.TOWNHOUSE:
      return "townhouse";
  }
};

const FormScreen: FC<Props> = observer(({ clearObjectType, objectType }) => {
  const guidesStore = ObjectGuides;

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [activeSubTabIdx, setActiveSubTabIdx] = useState<number>(0);
  const [tabsProp, setTabsProp] = useState<ICreateObjectTabs[]>([]);
  const [succesAdvertisementId, setSuccesAdvertisementId] =
    useState<string | null>(null);

  const lastSubTabIdx = tabsProp[activeTabIdx]?.Components.length - 1;
  const lastTabIdx = tabsProp.length - 1;
  const isLastScreen =
    activeTabIdx === lastTabIdx && activeSubTabIdx === lastSubTabIdx;

  const handleNextTab = useCallback(() => {
    if (isLastScreen) return;

    if (activeSubTabIdx < lastSubTabIdx) {
      setActiveSubTabIdx(activeSubTabIdx + 1);
      return;
    }
    setActiveSubTabIdx(0);
    setActiveTabIdx(activeTabIdx + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabIdx, activeSubTabIdx, isLastScreen, lastSubTabIdx]);

  const handlePrevTab = useCallback(() => {
    if (activeTabIdx === 0 && activeSubTabIdx === 0) {
      clearObjectType();
      return;
    }

    if (activeSubTabIdx > 0) {
      setActiveSubTabIdx(activeSubTabIdx - 1);
      return;
    }

    setActiveSubTabIdx(tabsProp[activeTabIdx - 1].Components.length - 1);
    setActiveTabIdx(activeTabIdx - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabIdx, activeSubTabIdx]);

  const handlePublish = (advertisementId: string) => {
    setSuccesAdvertisementId(advertisementId);
  };

  console.log(
    guidesStore.readyToWork ? toJS(guidesStore.readyToWork) : undefined
  );

  useEffect(() => {
    if (
      (!guidesStore.loaded && !guidesStore.errorOnLoad) ||
      objEnumToString(objectType) !== guidesStore.loadedObject
    ) {
      guidesStore.uploadGuides(objEnumToString(objectType)).then();
    }
  }, [objectType, guidesStore]);

  useEffect(() => {
    const AboutTabComponents: JSX.Element[] =
      objectType === ObjectTypes.LAND
        ? [
            <LandInfoTab
              objectType={objectType}
              key={331}
              onNextTab={handleNextTab}
              onPrevTab={handlePrevTab}
            />,
          ]
        : [
            <HouseInfoDetailsTab
              objectType={objectType}
              key={33}
              onNextTab={handleNextTab}
              onPrevTab={handlePrevTab}
            />,
            <HouseInfoInterierTab
              objectType={objectType}
              key={33}
              onNextTab={handleNextTab}
              onPrevTab={handlePrevTab}
            />,
          ];
    const aboutTabLabel =
      objectType === ObjectTypes.LAND ? "Об учатске" : "О доме";
    setTabsProp([
      {
        isDone: activeTabIdx > 0,
        label: "Об объекте",
        Components: [
          <AboutObject
            key={1}
            objectType={objectType}
            onNextTab={handleNextTab}
            onPrevTab={handlePrevTab}
          />,
        ],
      },
      {
        isDone: activeTabIdx > 1,
        label: "Основная информация",
        Components: [
          <GeneralInfoDescriptionTab
            objectType={objectType}
            key={23}
            onNextTab={handleNextTab}
            onPrevTab={handlePrevTab}
          />,
          <GeneralInfoPhotosTab
            objectType={objectType}
            key={3}
            onNextTab={handleNextTab}
            onPrevTab={handlePrevTab}
          />,
          <GeneralInfoDataTab
            objectType={objectType}
            key={51}
            onNextTab={handleNextTab}
            onPrevTab={handlePrevTab}
          />,
        ],
      },
      {
        isDone: activeTabIdx > 2,
        label: "Инфраструктура",
        Components: [
          <InfrastructureTab
            objectType={objectType}
            key={231}
            onNextTab={handleNextTab}
            onPrevTab={handlePrevTab}
          />,
        ],
      },
      {
        isDone: activeTabIdx > 3,
        label: aboutTabLabel,
        Components: AboutTabComponents,
      },
      {
        isDone: activeTabIdx > 4,
        label: "Юридическая чистота",
        Components: [
          <LegalPurityDetails
            objectType={objectType}
            key={231}
            onNextTab={handleNextTab}
            onPrevTab={handlePrevTab}
          />,
          <LegalPurityFounders
            objectType={objectType}
            key={231}
            onPrevTab={handlePrevTab}
            onPublish={handlePublish}
          />,
        ],
      },
    ]);
  }, [handleNextTab, handlePrevTab, activeTabIdx, objectType]);

  if (succesAdvertisementId)
    return (
      // Ваше объявление опубликовано CreateObjectSuccessPage
      <div>
        <div className={s.nav}>
          <div className={s.navContent}>
            <Link href="/ads">
              <a className={s.link}>
                <Typography
                  weight="medium"
                  icon={<NavArrowIcon className={s.arrowIcon} />}
                >
                  Вернуться в личный кабинет
                </Typography>
              </a>
            </Link>
          </div>
          <div className={s.divider} />
        </div>
        <CreateObjectSuccessPage
          typeObjectCreate={objectType}
          advertisementId={succesAdvertisementId}
        />
      </div>
    );

  return (
    <div>
      <div className={s.nav}>
        <div className={s.navContent}>
          <Link href="/ads">
            <a className={s.link}>
              <Typography weight="medium" icon={<NavArrowIcon />}>
                Новый объект
              </Typography>
            </a>
          </Link>
          <div>
            <Typography icon="+" color="tertiary" size="small">
              Добавить агента к объекту
            </Typography>
          </div>
        </div>
        <div className={s.divider} />
      </div>
      <MultipleHorizontalTab
        activeSubTabIdx={activeSubTabIdx}
        activeTabIdx={activeTabIdx}
        tabs={tabsProp}
      />
    </div>
  );
});

export default FormScreen;
