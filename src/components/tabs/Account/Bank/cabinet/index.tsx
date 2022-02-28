import { FC } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../shared/HorizontalTabs/HorizontalTabs";
import { Settings } from "./Settings";
import {accFromToken} from '../../../../../lib/localStorage/localStorage'

import commonStyles from "../../Admin/AdminRoleStyles.module.scss";

const BankTabs: ITabItem[] = [
  {
    title: "Настройка",
    Component: <Settings />,
  },
];

export const BankCabinetPage: FC = () => {
  console.log('accFromToken()', accFromToken())
  return (
    <HorizontalTabs
      wrapperClassName={commonStyles.horizontalTabs}
      tabs={BankTabs}
    />
  );
};
