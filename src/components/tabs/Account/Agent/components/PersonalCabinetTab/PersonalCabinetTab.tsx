// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components

import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs"
import PersonalCabinetAccountInfo from "./components/AccountInfo"
import PersonalCabinetAgents from "./components/Agents"
import PersonalCabinetSettings from "./components/Settings"
import PersonalCabinetStatistics from "./components/Statistics"

interface Props {

}

const PersonalCabinetTab: React.FC<Props> = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Статистика", Component: <PersonalCabinetStatistics />},
            {title: "Аккаунт агенства", Component: <PersonalCabinetAccountInfo />},
            {title: "Агенты", Component: <PersonalCabinetAgents />},
            {title: "Настройки", Component: <PersonalCabinetSettings />},
        ]}/> 
    )
}

export default PersonalCabinetTab