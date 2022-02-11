// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components
import {useEffect, useState} from "react"
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import PersonalCabinetStatistics from "./Statistics/Statistics";
import PersonalCabinetSettings from "./Settings/Settings";
import PersonalCabinetAccountInfo from "./AccountInfo/AccountInfo";
import AccountEditAgent from "./AccountEditAgent/AccountEditAgent";
import {useStoreAgentCabinet} from "../../../../../../mobx/role/agent/cabinet/AgentCabinet";
import {observer} from "mobx-react-lite";

export type InfoAccountAgencyType = {
    info:Array<{label:string,value:string}>
    id:string
    img:string
    statusVerification:'confirmed' | 'waiting' | 'notConfirmed' | 'resend'
}

const PersonalCabinetTab = observer(() => {
    const [edit, setEdit] = useState<boolean>(false)
    const store = useStoreAgentCabinet()

    useEffect(()=>{
        store.fetch()
    },[store])

    return (
        <>
            {
                !edit
                    ? <HorizontalTabs tabs={[
                        {title: "Статистика", Component: <PersonalCabinetStatistics/>},
                        {
                            title: "Аккаунт",
                            Component: <PersonalCabinetAccountInfo onEdit={() => setEdit(true)}/>
                        },
                        {title: "Настройки", Component: <PersonalCabinetSettings />},
                    ]}/>
                    : <AccountEditAgent onEdit={() => setEdit(false)}/>
            }
        </>
    )
})

export default PersonalCabinetTab