// Тут описываем вертикальный набор табов для роли "Агенс" с использованием дочерних компонентов из папки components
import React from "react"
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs"
import MyObjectsTab from "./components/MyObjectsTab/MyObjectsTab"

type Props = {
    storybook?:boolean
}

const AgencyRoleTabs: React.FC<Props> = ({storybook }) => {
    return (
        <VerticalTabs
            link={true}
            storybook={storybook}
            tabs={[
                { title: "Аккаунт Агентства", Component: <div /> },
                { title: "Избранное", Component: <div /> },
                { title: "Сохранённые поиски", Component: <div /> },
                { title: "Сообщения", Component: <div /> },
                { title: "Уведомления", Component: <div /> },
                { title: "Мои объекты", Component: <MyObjectsTab /> },
                { title: "Проверка объекта", Component: <div /> },
            ]}
        />
    )
}

export default AgencyRoleTabs