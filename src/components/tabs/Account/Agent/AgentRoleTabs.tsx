// Тут описываем вертикальный набор табов для роли "Агенство" с использованием дочерних компонентов из папки components

import React from "react"
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs"
import ApplicationsViewTab from "./components/ApplicationsViewTab/ApplicationsViewTab"
import PersonalCabinetTab from "./components/PersonalCabinetTab/PersonalCabinetTab"

interface Props {
}

const AgentRoleTabs: React.FC<Props> = () => {
    return (
        <VerticalTabs
            tabs={[
                { title: "Личный кабинет", Component: <PersonalCabinetTab /> },
                { title: "Заявки на просмотр", Component: <ApplicationsViewTab /> },
                { title: "Мои объявления", Component: <div /> },
                { title: "Тарифы размещения", Component: <div /> },
                { title: "Профпоиск", Component: <div /> },
                { title: "Сообщения", Component: <div /> },
                { title: "Уведомления", Component: <div /> },
            ]}
        />
    )
}

export default AgentRoleTabs