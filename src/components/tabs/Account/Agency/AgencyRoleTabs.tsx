// Тут описываем вертикальный набор табов для роли "Агенс" с использованием дочерних компонентов из папки components
import React, {useState} from "react"
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs"
import MyObjectsTab from "./components/MyObjectsTab/MyObjectsTab"
import PersonalCabinetTab from "./components/MyObjectsTab/components/PersonalCabinetTab/PersonalCabinetTab";
import ApplicationsViewTab from "../Agent/components/ApplicationsViewTab/ApplicationsViewTab";
import MyAds from "../Agent/components/MyAds/MyAds";
import PlacementRates from "../Agent/components/PlacementRates/PlacementRates";
import ProfSearch from "../Agent/components/ProfSearch/profSearch/ProfSearch";
import Messages from "../Agent/components/Messages/Messages";
import AgentsNotifications from "../Agent/components/Notifications/Notifications";
import css from './AgencyRoleTabs.module.css'

type Props = {
    storybook?:boolean
}
const notifications =[
    {date:'22.03.2021',time:'17:30',message:'Автоматическое возобновление публикаций выключено', read:false},
    {date:'22.03.2021',time:'15:30',message:'Автоматическое возобновление публикаций выключеноАвтоматическое возобновление публикаций выключ', read:false},
    {date:'21.03.2021',time:'13:30',message:'Автоматическое возобновление публикаций выключено', read:true},
    {date:'20.03.2021',time:'11:30',message:'Автоматическое возобновление публикаций выключено', read:true},
]
const AgencyRoleTabs: React.FC<Props> = ({storybook }) => {

    const [notification,setNotification]=useState<Array<{date:string, time:string,message:string, read:boolean}>>(notifications)

    const onReadAll = () => {
        const newNotification = notification.map(t=>({...t, read:true}))
        setNotification(newNotification)
    }
    const onRead = (number:number) => {
        const newNotification = notification.map((t,index)=>index===number? {...t,read:!t.read} : t  )
        setNotification(newNotification)
    }
    const deleteNotification = (number:number) =>{
        const newNotification = notification.filter((t,index)=>index !==number)
        setNotification(newNotification)
    }
    return (
        <VerticalTabs
            className={css.verticalTabsMargin}
            link={true}
            storybook={storybook}
            tabs={[
                { title: "Личный кабинет", Component: <PersonalCabinetTab /> },
                { title: "Заявки", Component: <ApplicationsViewTab /> },
                { title: "Мои объявления", Component: <MyAds /> },
                { title: "Тарифы размещения", Component: <PlacementRates /> },
                // { title: "Профпоиск", Component: <ProfSearch /> },
                // { title: "Сообщения", Component: <Messages /> },
                { title: "Уведомления", Component:  <AgentsNotifications
                onRead={onRead}
                onReadAll={onReadAll}
                notification={notification}
                onDelete={deleteNotification}
                /> },
            ]}
        />
    )
}

export default AgencyRoleTabs