// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components

import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs"
import ApplicationsViewCatalog from "./components/Catalog/Catalog"
import ApplicationsViewStatistics from "./components/Statistics"
import {useState, useEffect} from "react"
import ViewingApplication from "./components/Catalog/ViewingApplication"
import { observer } from "mobx-react-lite"
import {useAgentReqStore} from '../../../../../../mobx/role/agent/request/AgentReq'
import {Empty, Loader} from '../../../../../shared/Loader/Loader'
import Typography from "../../../../../shared/Typography/Typography";

interface Props {

}

const applicationsView :Array<{id:string
    type:string
    statusOrDate:string
    statusLetter:string
    timeActive:string
    dateActive:string //
    phone:string
    email:string
    name:string
    agentName:string
    theme:string
    message:Array<{message:string,date:string,time:string}>}>=[
    {
        id:'1',
        type:'letter',
        statusOrDate:'31.08.2021',
        statusLetter:'Доставлено',
        timeActive:'9.08',
        dateActive:'',
        phone:'89997772211',
        email:' zhenya71@yandex.ru',
        name:'Евгений',
        agentName:"Виталий Панкратов",
        theme:"Подборка коттеджа",
        message:[{message:'Здравстуйте Евгений',time:'11:00',date:'09.10.2021'}]
    },{
        id:'1',
        type:'bell',
        statusOrDate:'Запланировано',
        statusLetter:'',
        timeActive:'11:00',
        dateActive:'11.10.2021',
        phone:'89997772211',
        email:' zhenya71@yandex.ru',
        name:'Евгений',
        agentName:"Виталий Панкратов",
        theme:"Подборка коттеджа",
        message:[]
    }
]
// mock only test
const addSchedule = (a:any)=>{
    applicationsView.unshift(a)
}
const addMessage = (e:{ message: string, date: string, time: string },index:number) => {
    applicationsView[index].message.push(e)
}

const ApplicationsViewTab: React.FC<Props> = observer(() => {

    const store = useAgentReqStore()
    const [edit, setEdit] = useState<any>({edit: false, id: ''})
    useEffect(() => {
        store.fetchReqs(+localStorage.getItem('idUserEstatum')! )
    },[])

    return (
        <>
            {store.initialData.loading && <Loader/>}
            {store.initialData.error && <Typography size={"big"}>Заявки отсутствуют</Typography>}
            {(!store.initialData.loading && !store.initialData.error) && !edit.edit &&
                <HorizontalTabs tabs={[
                    {title: "Каталог заявок", Component: <ApplicationsViewCatalog agents={store.get().data} setEdit={setEdit} />},
                    /*{title: "Статистика", Component: <ApplicationsViewStatistics />}*/
                ]}/>
            }
            {(!store.initialData.loading && !store.initialData.error) && edit.edit &&
                <ViewingApplication
                    onAddSchedule={addSchedule}
                    onAddMessage={addMessage}
                    applicationsView={applicationsView}
                    onClick={setEdit}
                    id={edit.id}
                />
            }
        </>
    )
})

export default ApplicationsViewTab