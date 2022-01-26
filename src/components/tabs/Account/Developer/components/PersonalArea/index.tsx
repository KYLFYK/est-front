import {FC, useEffect} from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { Account } from "./Account";
import { Settings } from "./Settings";

import styles from "./Account.module.scss";
import {observer} from "mobx-react-lite";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";

const PersonalAreaTabs: ITabItem[] = [
  {
    title: "Аккаунт застройщика",
    Component: <Account  />,
  },
  {
    title: "Настройки",
    Component: <Settings  />,
  },
];

export const PersonalArea: FC = observer(() => {

  const store = useStoreDeveloperCabinet()

  useEffect(()=>{
    store.fetch()
  },[])

  return (
    <HorizontalTabs
      wrapperClassName={styles.tabsWrapper}
      tabs={PersonalAreaTabs}
    />
  );
})
