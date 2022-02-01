// Тут создаем компонент горизонтального набора таб с использованием компонентов дочерней папки components
import {useEffect, useState} from "react"
import imgMoc from './AccountInfo/logoFalse.svg'
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import PersonalCabinetStatistics from "./Statistics/Statistics";
import PersonalCabinetSettings from "./Settings/Settings";
import PersonalCabinetAccountInfo from "./AccountInfo/AccountInfo";
import AccountEdit from "./AccountEdit/AccountEdit";
import {useStoreAgentCabinet} from "../../../../../../mobx/role/agent/cabinet/AgentCabinet";
import {observer} from "mobx-react-lite";

export type InfoAccountAgencyType = {
    info:Array<{label:string,value:string}>
    id:string
    img:string
    statusVerification:'confirmed' | 'waiting' | 'notConfirmed' | 'resend'
}
const infoAccountAgency :InfoAccountAgencyType ={
    info:[
        {label: 'Наименование', value: 'Estatum'},
        {label: 'Статус', value: 'Агентство'},
        {label: 'Адрес', value: 'Смоленская обл., г.Смоленск, ул.Советская, д.64'},
        {label: 'Телефон', value: '+7(495) 006 78 69'},
        {label: 'E-mail', value: 'estatum@mail.com'},
        {label: 'Сайт', value: 'estatum'},
        {label: 'Описание', value: 'описание'},
    ],
    id:'1',
    img:imgMoc,
    statusVerification:'notConfirmed'
}

const infoAgencyMoc = {
    name: 'Estatum',
    status: 'Agency',
    address: 'Смоленская обл. г.Смоленск',
    phone: '+7 999 777 55 11',
    email: 'estatum@mail.com',
    website: 'estatum.com',
    description: 'You agency'
}


const agentsList = [{
    name: "name",
    status: 0,
    experience: '25лет',
    phone: '+7 999 888 77 11',
    email: '123ivanov@mail.ru',
    rating: 1,
    url: 'url',
    id: 1,
}, {
    name: "name2",
    status: 1,
    experience: '5лет',
    phone: '+7 999 888 77 11',
    email: '123ivanov@mail.ru',
    rating: 2,
    url: 'url2',
    id: 2,
}, {
    name: "name3",
    status: 0,
    experience: '15лет',
    phone: '+7 999 888 77 11',
    email: '123ivanov@mail.ru',
    rating: 3,
    url: 'url3',
    id: 3,
},]

const personalCabinet = {
        phones: ['+7 999 888 77 55', '+7 999 888 77 66', '+7 999 888 77 44'],
        login: "Estatum",
        passwordOld: '1235',
        passwordNew: '',
        messagePhone: '+7 999 888 77 55',
        messageEmail: 'estatum@estatum.com'
}

const PersonalCabinetTab = observer(() => {
    const [edit, setEdit] = useState<boolean>(false)
    const store = useStoreAgentCabinet()

    useEffect(()=>{
        store.fetch()
    },[])

    const accountEdit = {
        name: store.initialData.name,
        status: store.initialData.status,
        address: store.initialData.address,
        phone: store.initialData.phone,
        email: store.initialData.email,
        website: store.initialData.website,
        description: store.initialData.description
    }

    store.get()
    return (
        <>
            {
                !edit
                    ? <HorizontalTabs tabs={[
                        {title: "Статистика", Component: <PersonalCabinetStatistics/>},
                        {
                            title: "Аккаунт",
                            Component: <PersonalCabinetAccountInfo
                                onEdit={() => setEdit(true)}
                                // statusVerification={infoAccountAgency.statusVerification}
                                // info={infoAccountAgency.info}
                                // img={infoAccountAgency.img}
                                statusVerification={store.initialData.statusVerification}
                                info={store.initialData.info}
                                img={store.initialData.img}
                            />
                        },
                        {title: "Настройки", Component: <PersonalCabinetSettings personalCabinet={personalCabinet}/>},
                    ]}/>
                    : <AccountEdit onEdit={() => setEdit(false)} infoAgency={accountEdit}/>
            }
        </>
    )
})

export default PersonalCabinetTab