import { FC, useEffect } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { AgencyTab } from "./agency";
import { DeveloperTab } from "./DeveloperTab";
import { OwnerTab } from "./OwnerTab";
// import { Statistic } from "./statistic";
import { AllAdsStore } from "../../../../../../mobx/role/admin/ads";

import commonStyles from "../../AdminRoleStyles.module.scss";

const AdminAdsTabs: ITabItem[] = [
  {
    title: "Агенты",
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

  const store = AllAdsStore;

  useEffect(() => {
    if (!store.loaded && !store.errorOnLoad) {
      store.uploadAllAds().then();
    }
  }, []);

  return (
    <HorizontalTabs
      wrapperClassName={commonStyles.horizontalTabs}
      tabs={AdminAdsTabs}
    />
  );
};
