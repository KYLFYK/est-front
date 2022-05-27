import React, { FC, useEffect, useState } from "react";
import {
  NewObjectActionTypes,
  ObjectTypes,
} from "../../../utils/interfaces/objects";
import Link from "next/link";
import s from "../create-new-object/StartScreen/StartScreen.module.scss";
import Typography from "../../shared/Typography/Typography";
import NavArrowIcon from "../../../icons/NavArrow/NavArrow";
import { IEditInfo, IInfoLoaded } from "../../../hooks/useEditObject";
import MultipleHorizontalTab, {
  ICreateObjectTabs,
} from "../create-new-object/components/MultipleHorizontalTab/MultipleHorizontalTab";
import { observer } from "mobx-react-lite";
import { CreateNewObjectStore } from "../../../mobx/stores/objects/CreateNewOnbjectStore";
import { CreateObjectTab } from "./CreateObjectTab";

interface Props {
  objectType: ObjectTypes;
  clearObjectType: () => void;
  action: NewObjectActionTypes;
  presets?: IEditInfo;
  info?: IInfoLoaded;
  resetEditState?: () => void;
}

export const CreateObjectV2: FC<Props> = observer(({ presets, info }) => {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [activeSubTabIdx, setActiveSubTabIdx] = useState<number>(0);
  const [tabsProp, setTabsProp] = useState<ICreateObjectTabs[]>([]);

  const { params, fetchParams } = CreateNewObjectStore;

  useEffect(() => {
    if (!params.loaded && !params.errorOnLoad) {
      fetchParams();
    }
  }, []);

  console.log(tabsProp);

  useEffect(() => {
    if (params.loaded && params.data) {
      setTabsProp(
        params.data.apartment.map((el) => ({
          label: el.name,
          isDone: false,
          Components: el.subSections.map((subSection, key) => (
            <CreateObjectTab
              key={key}
              subSection={subSection}
              handlePrev={() => {
                console.log("");
              }}
              handleNext={() => {
                console.log("");
              }}
            />
          )),
        }))
      );
    }
  }, [params.loaded, params.data]);

  return (
    <div>
      <div className={s.nav}>
        <div className={s.navContent}>
          <Link href="/ads">
            <a className={s.link}>
              <Typography weight="medium" icon={<NavArrowIcon />}>
                {presets?.editMode ? "Редактирование объекта" : "Новый объект"}
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
      {presets?.editMode ? (
        info &&
        info.loaded &&
        info.object &&
        info.loadedId == presets.object ? (
          <MultipleHorizontalTab
            activeSubTabIdx={activeSubTabIdx}
            activeTabIdx={activeTabIdx}
            tabs={tabsProp}
          />
        ) : null
      ) : (
        <MultipleHorizontalTab
          activeSubTabIdx={activeSubTabIdx}
          activeTabIdx={activeTabIdx}
          tabs={tabsProp}
        />
      )}
    </div>
  );
});
