import React, { FC } from "react";
import VerticalTabs, {
  ITabItem,
} from "../../../shared/VerticalTabs/VerticalTabs";
import { UsersTab } from "./components/UsersTab/UsersTab";
import { AdsTabs } from "./components/AdsTabs";
import Messages from "../Agent/components/Messages/Messages";

const AdminTabs: ITabItem[] = [
  {
    title: "Пользователи",
    Component: <UsersTab />,
  },
  {
    title: "Объявления",
    Component: <AdsTabs />,
  },
  {
    title: "Сообщения",
    Component: <Messages />,
  },
];

export const AdminRoleTabs: FC = () => {
  return <VerticalTabs tabs={AdminTabs} link />;
};
