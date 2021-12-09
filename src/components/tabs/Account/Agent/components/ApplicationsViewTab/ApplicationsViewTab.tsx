// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components

import { HorizontalTabs } from "../../../../../shared/HorizontalTabs/HorizontalTabs"
import ApplicationsViewCatalog from "./components/Catalog/Catalog"
import ApplicationsViewStatistics from "./components/Statistics"
import {useState} from "react";
import ViewingApplication from "./components/Catalog/ViewingApplication";

interface Props {

}

const agents =[
    {
        name: "Евгений",
        email: 'evgeniy@mail.ru',
        phone: '+7 999 888 77 11',
        convenientTime:'11:00-12:50',
        applicationDate:'27.08.2021',
        applicationTime:'13:00',
        agentName:'Валерий Сидоров',
        typeContract:'Аренда',
        object:'3-этажный коттедж',
        priceObject:'10 000 000',
        status: 'Новая заявка',
        idOffers: '1',
        url: '123',
    },
    {
        name: "Евгений",
        email: 'evgeniy@mail.ru',
        phone: '+7 999 222 77 11',
        convenientTime:'11:00-12:50',
        applicationDate:'27.08.2021',
        applicationTime:'13:00',
        agentName:'Валерий Сидоров',
        typeContract:'Аренда',
        object:'3-этажный коттедж',
        priceObject:'10 000 000',
        status: 'Новая заявка',
        idOffers: '2',
        url: '123'
    }
]
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
        id:'2',
        type:'bell',
        statusOrDate:'Запланировано',
        statusLetter:'',
        timeActive:'завтра в 11:00',
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
const newArre = (a:any)=>{
    applicationsView.unshift(a)
}
const addMessage = (e:{ message: string, date: string, time: string },index:number) => {
    applicationsView[index].message.push(e)
}


const ApplicationsViewTab: React.FC<Props> = () => {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <>
            {
                !edit
                    ? <HorizontalTabs tabs={[
                        {title: "Каталог заявок", Component: <ApplicationsViewCatalog agents={agents} onClick={()=>setEdit(true)} />},
                        {title: "Статистика", Component: <ApplicationsViewStatistics />}
                    ]}/>
                    : <ViewingApplication
                        newAr={newArre}
                        onAddMessage={addMessage}
                        applicationsView={applicationsView}
                        onClick={()=>setEdit(false)}
                    />
            }
        </>
    )
}

export default ApplicationsViewTab