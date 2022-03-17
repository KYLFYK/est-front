import { FC, useEffect, useState } from "react";
import {
  HorizontalTabs,
  ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import { Account } from "./Account";
import { Settings } from "./Settings";
import { LegalInfoEditDeveloper } from "./LegalInfoEditDeveloper";

import styles from "./Account.module.scss";
import { observer } from "mobx-react-lite";
import { useStoreDeveloperCabinet } from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import AccountEditDeveloper from "./AccountEditDeveloper";
import {SettingsEditDeveloper} from './SettingEditDeveloper';

export const PersonalArea: FC = observer(() => {
  const [edit, setEdit] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const store = useStoreDeveloperCabinet();

  const onEdit = (tabId: number) => {
    setEdit(false)
    setCurrent(tabId)
  }

  useEffect(() => {
    store.fetch();
  }, [store]);


  return (
    <>
      {!edit ? (
        <HorizontalTabs
          setCurrent={setCurrent}
          current={current}
          wrapperClassName={styles.tabsWrapper}
          tabs={[
            {
              title: "Аккаунт застройщика",
              Component: <Account onEdit={() => setEdit(true)} />,
            },
            {
              title: "Настройки",
              Component: <Settings onEdit={() => setEdit(true)} />,
            },
            {
              title: "Юр.Данные",
              Component: <LegalInfoEditDeveloper />,
            },
          ]}
        />
      ) : current === 0 && <AccountEditDeveloper onEdit={onEdit} />
          ||
          current === 1 && <SettingsEditDeveloper onEdit={onEdit} />
      }
    </>
  );
});
