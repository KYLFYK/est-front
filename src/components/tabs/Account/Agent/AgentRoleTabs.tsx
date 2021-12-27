// Тут описываем вертикальный набор табов для роли "Агенство" с использованием дочерних компонентов из папки components
import React, {useState} from "react"
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs"
import ApplicationsViewTab from "./components/ApplicationsViewTab/ApplicationsViewTab"
import PersonalCabinetTab from "./components/PersonalCabinetTab/PersonalCabinetTab"
import MyAds from "./components/MyAds/MyAds";
import AgentsNotifications from "./components/Notifications/Notifications";
import PlacementRates from "./components/PlacementRates/PlacementRates";
import ProfSearch from "./components/ProfSearch/ProfSearch";
import Messages from "./components/Messages/Messages";

interface Props {
}

const notifications =[
    {date:'22.03.2021',time:'17:30',message:'Автоматическое возобновление публикаций выключено', read:false},
    {date:'22.03.2021',time:'15:30',message:'Автоматическое возобновление публикаций выключеноАвтоматическое возобновление публикаций выключ', read:false},
    {date:'21.03.2021',time:'13:30',message:'Автоматическое возобновление публикаций выключено', read:true},
    {date:'20.03.2021',time:'11:30',message:'Автоматическое возобновление публикаций выключено', read:true},
]

const AgentRoleTabs  = () => {
    const [notification,setNotification]=useState<Array<{date:string, time:string,message:string, read:boolean}>>(notifications)

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
        <VerticalTabs
            tabs={[
                { title: "Личный кабинет", Component: <PersonalCabinetTab /> },
                { title: "Заявки на просмотр", Component: <ApplicationsViewTab /> },
                { title: "Мои объявления", Component: <MyAds /> },
                { title: "Тарифы размещения", Component: <PlacementRates /> },
                { title: "Профпоиск", Component: <ProfSearch /> },
                { title: "Сообщения", Component: <Messages /> },
                { title: "Уведомления", Component: <AgentsNotifications
                        onRead={onRead}
                        onReadAll={onReadAll}
                        notification={notification}
                        onDelete={deleteNotification}
                    /> },
            ]}
        />
    )
}

export default AgentRoleTabs