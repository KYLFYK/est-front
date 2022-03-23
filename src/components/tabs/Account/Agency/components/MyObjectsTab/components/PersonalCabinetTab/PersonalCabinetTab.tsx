// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components
import { useEffect, useState } from "react";
import { HorizontalTabs } from "../../../../../../../shared/HorizontalTabs/HorizontalTabs";
import PersonalCabinetAccountInfo from "./components/AccountInfo/AccountInfo";
import PersonalCabinetAgents from "./components/Agents/Agents";
import PersonalCabinetSettings from "./components/Settings/Settings";
import PersonalCabinetStatistics from "./components/Statistics/Statistics";
import AccountEditAgency from "./components/AccountEdit/AccountEditAgency";
import { useStoreAgencyCabinet } from "../../../../../../../../mobx/role/agency/cabinet/AgencyCabinet";
import css from './PersonalCabinet.module.scss'
export type InfoAccountAgencyType = {
  info: Array<{ label: string; value: string }>;
  id: string;
  img: string;
  statusVerification: "confirmed" | "waiting" | "notConfirmed" | "resend";
};

const agentsList = [
  {
    name: "name",
    status: 0,
    experience: "25лет",
    phone: "+7 999 888 77 11",
    email: "123ivanov@mail.ru",
    rating: 1,
    url: "url",
    id: 1,
  },
  {
    name: "name2",
    status: 1,
    experience: "5лет",
    phone: "+7 999 888 77 11",
    email: "123ivanov@mail.ru",
    rating: 2,
    url: "url2",
    id: 2,
  },
  {
    name: "name3",
    status: 0,
    experience: "15лет",
    phone: "+7 999 888 77 11",
    email: "123ivanov@mail.ru",
    rating: 3,
    url: "url3",
    id: 3,
  },
];

const personalCabinet = {
  phones: ["+7 999 888 77 55", "+7 999 888 77 66", "+7 999 888 77 44"],
  login: "Estatum",
  passwordOld: "1235",
  passwordNew: "",
  messagePhone: "+7 999 888 77 55",
  messageEmail: "estatum@estatum.com",
};

const PersonalCabinetTab = () => {
  const store = useStoreAgencyCabinet();
  useEffect(() => {
    store.fetch().then();
  }, [store]);

  const [edit, setEdit] = useState<boolean>(false);
  return (
    <>
      {!edit ? (
        <HorizontalTabs
            wrapperClassName={css.wrapper}
          tabs={[
            { title: "Статистика", Component: <PersonalCabinetStatistics /> },
            {
              title: "Аккаунт агентства",
              Component: (
                <PersonalCabinetAccountInfo onEdit={() => setEdit(true)} />
              ),
            },
            {
              title: "Агенты",
              Component: <PersonalCabinetAgents agents={agentsList} />,
            },
            {
              title: "Настройки",
              Component: (
                <PersonalCabinetSettings personalCabinet={personalCabinet} />
              ),
            },
          ]}
        />
      ) : (
        <AccountEditAgency onEdit={() => setEdit(false)} />
      )}
    </>
  );
};

export default PersonalCabinetTab;
