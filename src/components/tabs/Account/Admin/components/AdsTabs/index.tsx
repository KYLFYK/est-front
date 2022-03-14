import { FC } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { AgencyTab } from "./agency";
import { DeveloperTab } from "./DeveloperTab";
import { OwnerTab } from "./OwnerTab";
import { Statistic } from "./statistic";

import commonStyles from "../../AdminRoleStyles.module.scss";

const AdminAdsTabs: ITabItem[] = [
  {
    title: "Агентства",
    Component: <AgencyTab />,
  },
  {
    title: "Застройщики",
    Component: <DeveloperTab />,
  },
  {
    title: "Собственники",
    Component: <OwnerTab />,
  },
  /*{
    title: "Статистика",
    Component: <Statistic />,
  },*/
];

export const AdsTabs: FC = () => {
  return (
    <HorizontalTabs
      wrapperClassName={commonStyles.horizontalTabs}
      tabs={AdminAdsTabs}
    />
  );
};
