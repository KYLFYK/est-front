import React, {FC, useState} from "react";
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs";
import {PersonalArea} from "./components/PersonalArea";
import {MyObjects} from "./components/MyObjects";
import AgentsNotifications from "../Agent/components/Notifications/Notifications";
import {useStoreDeveloperNotificationsStore} from "../../../../mobx/role/developer/notifications/notifications";


export const DeveloperRoleTabs: FC = () => {

    const store = useStoreDeveloperNotificationsStore()

    const [notification,setNotification]=useState<Array<{id:string,date:string, time:string,message:string, read:boolean}>>(store.initialData.notifications)

    const onReadAll = () => {
        const newNotification = notification.map(t=>({...t, read:true}))
        setNotification(newNotification)
    }
    const onRead = (number:number) => {
        const newNotification = notification.map((t,index)=>index===number? {...t,read:true} : t  )
        setNotification(newNotification)
    }
    const deleteNotification = (number:number) =>{
        const newNotification = notification.filter((t,index)=>index !==number)
        setNotification(newNotification)
    }
    return (
        <div>
            <VerticalTabs
                link={true}
                tabs={[
                    {title: "Личный кабинет", Component: <PersonalArea/>},
                    {title: "Мои объекты", Component: <MyObjects/>},
                    {title: "Уведомления", Component: <AgentsNotifications
                            onRead={onRead}
                            onReadAll={onReadAll}
                            notification={notification}
                            onDelete={deleteNotification}
                        />},
                ]}
            />
        </div>

    );
};
