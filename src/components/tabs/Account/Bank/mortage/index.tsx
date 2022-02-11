import { FC } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../shared/HorizontalTabs/HorizontalTabs";
import { Catalog } from "./Catalog";
import { Statistics } from "./Statistics";

import commonStyles from "../../Admin/AdminRoleStyles.module.scss";

const BankMortageTabs: ITabItem[] = [
  {
    title: "Каталог заявок",
    Component: <Catalog />,
  },
  {
    title: "Статистика",
    Component: <Statistics />,
  },
];

export const Mortage: FC = () => {
  return (
    <HorizontalTabs
      wrapperClassName={commonStyles.horizontalTabs}
      tabs={BankMortageTabs}
    />
  );
};
