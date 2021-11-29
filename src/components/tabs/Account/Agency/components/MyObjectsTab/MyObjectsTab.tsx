// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components

import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs"
import MyObjectArchive from "./components/MyObjectArchive"
import MyObjectActive from "./components/MyObjectsActive"
import MyObjectDraft from "./components/MyObjectsDraft"
import MyObjectVerification from "./components/MyObjectVerification"

interface Props {

}

const MyObjectsTab: React.FC<Props> = () => {
    return (
        <HorizontalTabs tabs={[
            { title: "Активные", Component: <MyObjectActive /> },
            { title: "Черновики", Component: <MyObjectDraft /> },
            { title: "Отправлены на проверку", Component: <MyObjectVerification /> },
            { title: "Архив", Component: <MyObjectArchive /> },
        ]} />
    )
}

export default MyObjectsTab