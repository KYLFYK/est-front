import { FC } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { Account } from "./Account";
import { Settings } from "./Settings";

import styles from "./Account.module.scss";

const PersonalAreaTabs: ITabItem[] = [
  {
    title: "Аккаунт застройщика",
    Component: <Account />,
  },
  {
    title: "Настройки",
    Component: <Settings />,
  },
];

export const PersonalArea: FC = () => {
  return (
    <HorizontalTabs
      wrapperClassName={styles.tabsWrapper}
      tabs={PersonalAreaTabs}
    />
  );
};
