import React, { useState } from "react";
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs";
import Favourites from "./components/Favourites/Favourites";
import SavedSearches from "./components/SavedSearches/SavedSearches";
import Message from "./components/Message/Message";
import MyObjects from "./components/MyObjects/MyObjects";
import CheckingObject from "./components/CheckingObject/CheckingObject";
import AgentsNotifications from "../Agent/components/Notifications/Notifications";
import { useStoreDeveloperNotificationsStore } from "../../../../mobx/role/developer/notifications/notifications";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";

const OwnerRoleTabs = () => {
  const store = useStoreDeveloperNotificationsStore();

  const [notification, setNotification] = useState<
    Array<{ date: string; time: string; message: string; read: boolean }>
  >(store.initialData.notifications);

  const onReadAll = () => {
    const newNotification = notification.map((t) => ({ ...t, read: true }));
    setNotification(newNotification);
  };

  const onRead = (number: number) => {
    const newNotification = notification.map((t, index) =>
      index === number ? { ...t, read: true } : t
    );
    setNotification(newNotification);
  };

  const deleteNotification = (number: number) => {
    const newNotification = notification.filter((t, index) => index !== number);
    setNotification(newNotification);
  };

  return (
    <VerticalTabs
      link={true}
      tabs={[
        { title: "Личный кабинет", Component: <PersonalAccount /> },
        { title: "Избранное", Component: <Favourites /> },
        { title: "Сохранённые поиски", Component: <SavedSearches /> },
        // { title: "Сообщения", Component: <Message /> },
        {
          title: "Уведомления",
          Component: (
            <AgentsNotifications
              onRead={onRead}
              onReadAll={onReadAll}
              notification={notification}
              onDelete={deleteNotification}
            />
          ),
        },
        { title: "Мои объекты", Component: <MyObjects /> },
        // { title: "Проверка объекта", Component: <CheckingObject /> },
      ]}
    />
  );
};

export default OwnerRoleTabs;
