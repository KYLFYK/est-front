import React from "react";
import ExclamationMarkIcon from "../../../icons/Development/ExclamationMark";
import { Advantage } from "../../shared/Advantage/Advantage";
import HeadLine from "../../shared/HeadLine/HeadLine";
import DeveloperTabs, { IDeveloperTabsData } from "../../tabs/Developer";
import s from "./ObjectDeveloper.module.scss";
import Image from "next/image";
import CircledKeyIcon from "../../../icons/Development/CircledKey";
import CircledSawIcon from "../../../icons/Development/CircledSaw";

export interface IObjectDeveloperInfo {
  name: string;
  developerType: string;
  logo: string;
  risks: boolean;
  leasedAmmount: string;
  inProgressAmmount: string;
  tabsData: IDeveloperTabsData;
}

interface Props {
  developerData: IObjectDeveloperInfo;
}

const ObjectDeveloper: React.FC<any> = ({ developerData }) => {
  return (
    <div className={s.container}>
      <HeadLine title="Застройщик" className={s.headLine}>
        <div className={s.infoBlock}>
          <Advantage
            title={developerData.name}
            text={developerData.developerType}
            className={s.iconItem_name}
            classNameMargin={s.classNameMargin}
            titleWeight={"bold"} 
            titleSize={'default'}
            textWeight={'light'}
          >
            <div className={s.imgContainer}>
              {developerData.logo && (
                <Image
                  className={s.img}
                  src={developerData.logo}
                  unoptimized
                  alt="logo"
                  layout="fill"
                  loader={() => developerData.logo}
                />
              )}
            </div>
          </Advantage>
          <Advantage
            title="Риски"
            text={developerData.risks ? "Да" : "Нет"}
            className={s.iconItem}
            classNameMargin={s.classNameMargin}
            titleWeight={"bold"} 
            titleSize={'default'}
            textWeight={'light'}
          >
            <ExclamationMarkIcon />
          </Advantage>
          <Advantage
            title="Сдано"
            text={developerData.leasedAmmount}
            className={s.iconItem}
            classNameMargin={s.classNameMargin}
            titleWeight={"bold"} 
            titleSize={'default'}
            textWeight={'light'}
          >
            <CircledKeyIcon />
          </Advantage>
          <Advantage
            title="Строится"
            text={developerData.inProgressAmmount}
            className={s.iconItemMr_0}
            classNameMargin={s.classNameMargin}
            titleWeight={"bold"} 
            titleSize={'default'}
            textWeight={'light'}
          >
            <CircledSawIcon />
          </Advantage>
        </div>
        <DeveloperTabs tabsData={developerData.tabsData} />
      </HeadLine>
    </div>
  );
};

export default ObjectDeveloper;
