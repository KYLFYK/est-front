// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components

import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs"
import ApplicationsViewCatalog from "./components/Catalog"
import ApplicationsViewStatistics from "./components/Statistics"
import {useState} from "react";

interface Props {

}

const ApplicationsViewTab: React.FC<Props> = () => {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <>
            {
                !edit
                    ? <HorizontalTabs tabs={[
                        {title: "Каталог заявок", Component: <ApplicationsViewCatalog />},
                        {title: "Статистика", Component: <ApplicationsViewStatistics />}
                    ]}/>
                    : <div onClick={()=>setEdit(false)}>edit</div>
            }
        </>

    )
}

export default ApplicationsViewTab