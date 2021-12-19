import { FC } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { Statistic } from "./Statistic";
import { ResComplexes } from "./ResComplexes";
import { MyHouses } from "./MyHouses";

import styles from "./MyObjects.module.scss";

const MyObjectsList: ITabItem[] = [
  {
    title: "Статистика",
    Component: <Statistic />,
  },
  {
    title: "Мои ЖК",
    Component: <ResComplexes />,
  },
  {
    title: "Мои дома",
    Component: <MyHouses />,
  },
];

export const MyObjects: FC = () => {
  return (
    <HorizontalTabs
      tabs={MyObjectsList}
      wrapperClassName={styles.tabsWrapper}
    />
  );
};
