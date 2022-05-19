// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components
import { useEffect, useState } from "react";
import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs";
// import PersonalCabinetStatistics from "./Statistics/Statistics";
import { Settings } from "./Settings/Settings";
import PersonalCabinetAccountInfo from "./AccountInfo/AccountInfo";
import AccountEditAgent from "./AccountEditAgent/AccountEditAgent";
import { SettingsEditAgent } from "./Settings/SettingsEditAgent";
import { useStoreAgentCabinet } from "../../../../../../mobx/role/agent/cabinet/AgentCabinet";
import { observer } from "mobx-react-lite";

// export type InfoAccountAgencyType = {
//   info: Array<{ label: string; value: string }>;
//   id: string;
//   img: string;
//   statusVerification: "confirmed" | "waiting" | "notConfirmed" | "resend";
// };

const PersonalCabinetTab = observer(() => {
  const [edit, setEdit] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const store = useStoreAgentCabinet();
  
  const onEdit = (tabId: number) => {
    setEdit(false);
    setCurrent(tabId);
  };

  useEffect(() => {
    store.fetch();
  }, [store]);

  return (
    <>
      {!edit ? (
        <HorizontalTabs
          setCurrent={setCurrent}
          current={current}
          tabs={[
            /*{title: "Статистика", Component: <PersonalCabinetStatistics/>},*/
            {
              title: "Аккаунт",
              Component: (
                <PersonalCabinetAccountInfo onEdit={() => setEdit(true)} />
              ),
            },
            {
              title: "Настройки",
              Component: <Settings onEdit={() => setEdit(true)} />,
            },
          ]}
          style={{
            margin: 0,
            marginBottom: 24,
            marginLeft: -10,
          }}
        />
      ) : (
        (current === 0 && <AccountEditAgent onEdit={onEdit} />) ||
        (current === 1 && <SettingsEditAgent onEdit={onEdit} />)
      )}
    </>
  );
});

export default PersonalCabinetTab;
