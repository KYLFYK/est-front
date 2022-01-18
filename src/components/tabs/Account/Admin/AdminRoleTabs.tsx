import React, { FC } from "react";
import VerticalTabs, {
  ITabItem,
} from "../../../shared/VerticalTabs/VerticalTabs";
import { UsersTab } from "./components/UsersTab/UsersTab";
import { AdsTabs } from "./components/AdsTabs";
// import { OwnerPage } from "./components/UsersTab/owners/OwnerPage";
// import { DeveloperPage } from "./components/UsersTab/developers/DeveloperPage";
// import { AgentPage } from "./components/UsersTab/agency/AgentPage";

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
    Component: <UsersTab />,
  },
];

export const AdminRoleTabs: FC = () => {
  return <VerticalTabs tabs={AdminTabs} link={false} />;
};
