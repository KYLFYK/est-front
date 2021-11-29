// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components

import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs"
import ApplicationsViewCatalog from "./components/Catalog"
import ApplicationsViewStatistics from "./components/Statistics"

interface Props {

}

const ApplicationsViewTab: React.FC<Props> = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Каталог заявок", Component: <ApplicationsViewCatalog />},
            {title: "Статистика", Component: <ApplicationsViewStatistics />}
        ]}/> 
    )
}

export default ApplicationsViewTab