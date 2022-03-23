import { FC } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { AgencyTab } from "./agency";
import { DevelopersTab } from "./developers";
import { OwnersTab } from "./owners";
import { StatisticsTab } from "./statistics";

import commonStyles from "../../AdminRoleStyles.module.scss";

const AdminUsersTabs: ITabItem[] = [
  {
    title: "Агенты",
    Component: <AgencyTab />,
  },
  {
    title: "Застройщики",
    Component: <DevelopersTab />,
  },
  /*{
    title: "Статистика",
    Component: <StatisticsTab />,
  },*/
];

export const UsersTab: FC = () => {
  return (
    <HorizontalTabs
      wrapperClassName={commonStyles.horizontalTabs}
      tabs={AdminUsersTabs}
    />
  );
};
