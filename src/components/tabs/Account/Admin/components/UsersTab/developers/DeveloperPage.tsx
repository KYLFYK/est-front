import { FC, useState } from "react";
import Link from "next/link";
import { BackIcon } from "../../../../../../../icons/BackIcon";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import {
  ITabItem,
  HorizontalTabs,
} from "../../../../../../shared/HorizontalTabs/HorizontalTabs";
import { Account } from "./tabs/Account";
import { LegalInfo } from "./tabs/LegalInfo";
import { SMI } from "./tabs/SMI";
import { Statistics } from "./tabs/Statistics";
import { Risk } from "./tabs/Risk";
import { Settings } from "./tabs/Settings";

import styles from "../agency/agency.module.scss";

const PageHorizontalTabs: ITabItem[] = [
  {
    title: "Аккаунт",
    Component: <Account />,
  },
  {
    title: "Юридические сведения",
    Component: <LegalInfo />,
  },
  {
    title: "СМИ о застройщике",
    Component: <SMI />,
  },
  {
    title: "Статистика",
    Component: <Statistics />,
  },
  {
    title: "Риски",
    Component: <Risk />,
  },
  {
    title: "Настройки",
    Component: <Settings />,
  },
];

export const DeveloperPage: FC = () => {
  const [haveUnsaved, setUnsaved] = useState<boolean>(true);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href={"/cabinet"}>
          <a className={styles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Редактирование профиля застройщика</span>
          </a>
        </Link>
      </div>
      <div className={`${styles.contentHeader} ${styles.littleMargin}`}>
        <span className={styles.title}>DEAL</span>
        {haveUnsaved && (
          <div className={styles.rightSide}>
            <span className={styles.unsaved}>Есть несохранённые изменения</span>
            <BaseButton
              onClick={() => {
                setUnsaved(false);
              }}
              type={"secondary"}
              isActive
            >
              Сохранить
            </BaseButton>
          </div>
        )}
      </div>
      <div className={styles.tabsWrapper}>
        <HorizontalTabs
          wrapperClassName={styles.tabs}
          tabs={PageHorizontalTabs}
        />
      </div>
    </div>
  );
};
