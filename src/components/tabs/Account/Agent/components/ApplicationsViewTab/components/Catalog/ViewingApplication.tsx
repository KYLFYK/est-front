import React, {FC, useState} from 'react';
import Typography from "../../../../../../../shared/Typography/Typography";
import BackPage from "../../../Others/BackPage/BackPage";
import ApplicationsViewCatalog from "./Catalog";
import {BaseDropDown} from "../../../../../../../shared/BaseDropDown/BaseDropDown";
import {makeStyles} from "@material-ui/core";
import {BaseInput} from "../../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../../shared/BaseButton/BaseButtons";
import ViewingLetter from "./message/ViewingLetter";
import ViewingBell from "./message/ViewingBell";
import css from './ViewingApplication.module.scss'
import { observer } from "mobx-react-lite"
import {useAgentReqStore} from '../../../../../../../../mobx/role/agent/request/AgentReq'

export const useStyles = makeStyles(() => ({
        select: {
            height: 40,
        },
        column: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            gap: 15,
        },
        typography: {
            margin: '8px 0 5px 0'
        },
        typographyMargin: {
            marginTop: '42px'
        },
        buttonMargin: {
            marginTop: '33px',
            height:'38px'
        },
        heightInput: {
            height: 36,
        },
        buttonMarginP: {
            marginTop: '110px'
        },
        marginBottom: {
            marginBottom: '30px',
        },
        card: {
            backgroundColor: "#FFFFFF",
            border: '1px solid #f2f2f2',
            padding: '10px 20px',
            margin: "20px 0",
        },
        marginMessage: {
            margin: '30px 0 20px 0'
        },
        marginRight_20: {
            marginRight: 20,
        },
        jc: {
            display: "flex",
            justifyContent: 'center',
            width: "100%",
        }
    })
)

const options = [
    {value: 'phone', label: 'Звонок'},
    {value: 'letter', label: 'Письмо'},
]
type ViewingApplicationType = {
    onClick: () => void
    applicationsView: Array<{
        id:string
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
        message:Array<{message:string,date:string,time:string}>
    }>,
    onAddSchedule:(a:{ id: string; type: string; statusOrDate: string; statusLetter: string;
        timeActive: string; dateActive: string; phone: string; email: string; name: string;
        agentName: string; theme: string; message:Array<string> })=>void
    onAddMessage:(e:{ message: string, date: string, time: string },index:number)=>void
}




const ViewingApplication: FC<ViewingApplicationType> = ({onClick, applicationsView, onAddSchedule, onAddMessage}) => {

    const store = useAgentReqStore()

    const date = new Date
    const functionZeroDate = (date:string) =>{
        if(date.length > 1) return date
        return '0'+date
    }
    const dateValue = [functionZeroDate(date.getFullYear().toString()),
        functionZeroDate((date.getMonth()+1).toString()),
        functionZeroDate(date.getDate().toString())].join('-')

    const classes = useStyles()
    const [valueDropDown, setValueDropDown] = useState<string>('Звонок')
    const [valueDate, setValueDate] = useState<string>(dateValue)
    const [valueTime, setValueTime] = useState<string>('')
    const [valueTheme, setValueTheme] = useState<string>('')
    const [valueMessage, setValueMessage] = useState<string>('')

    const addSchedule = () =>{
        const action ={
            id:'3',
            type:'bell',
            statusOrDate:"Запланировано",
            dateActive:valueDate,
            timeActive:valueTime,
            name:applicationsView[0].name,
            agentName:applicationsView[0].agentName,
            phone:applicationsView[0].phone,
            email:applicationsView[0].email,
            theme:'',
            message:[],
            statusLetter:'',
        }
        onAddSchedule(action)
        setValueTime('')
    }

    const letterUser = () =>{
        const date = new Date
        const dateValue = [functionZeroDate(date.getFullYear().toString()),
            functionZeroDate((date.getMonth()+1).toString()),
            functionZeroDate(date.getDate().toString())].join('-')
        const action={
            id:'3',
            type:'letter',
            statusOrDate:dateValue.split('-').reverse().join('.'),
            dateActive:(valueDate.split('-').reverse().splice(0,2).join('.')),
            timeActive:(`${date.getHours()}:${date.getMinutes()}`),                                  // create time 18:00
            name:applicationsView[0].name,
            agentName:applicationsView[0].agentName,
            phone:applicationsView[0].phone,
            email:applicationsView[0].email,
            theme:valueTheme,
            message:[valueMessage],
            statusLetter:'',
        }
        onAddSchedule(action)
        setValueTheme('')
        setValueMessage('')
    }

    return (
        <div>
            <BackPage onBackPage={onClick} title={"Просмотр заявок"}/>
            <Typography weight={"bold"}>
                Заявка
            </Typography>
            <ApplicationsViewCatalog agents={store.initialData}/>
            <Typography weight={"bold"}>
                Новое действие
            </Typography>
            <div>
                <div className={classes.marginBottom}>
                    <div className={classes.column}>
                        <div>
                            <Typography color={"tertiary"} className={classes.typography}>
                                Действие
                            </Typography>
                            <BaseDropDown
                                value={valueDropDown}
                                options={options}
                                placeholder={valueDropDown}
                                onChange={e => setValueDropDown(e)}
                                className={classes.select}
                            />
                        </div>
                        <div>
                            <Typography color={"tertiary"} className={classes.typography}>
                                Кому
                            </Typography>
                            <BaseInput
                                className={classes.heightInput}
                                value={store.initialData.data[0].phone}
                                disabled={true}/>
                        </div>
                        <div>
                            <Typography color={"tertiary"} className={classes.typography}>
                                Имя
                            </Typography>
                            <BaseInput
                                className={classes.heightInput}
                                value={store.initialData.data[0].name}
                                disabled={true}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',alignItems:'flex-end'}}>
                            <div style={{width:"150px"}} >
                                <BaseInput
                                    className={css.baseInputStyle}
                                    onChange={e=>setValueDate(e.currentTarget.value)}
                                    type={"date"}
                                    value={valueDate}
                                />
                            </div>

                            <div style={{display: 'flex',flexDirection:'row-reverse'}}>
                                <BaseInput
                                    className={classes.heightInput}
                                    style={{marginTop:'8px'}}
                                    value={valueTime}
                                    onChange={e=>setValueTime(e.currentTarget.value)}
                                    placeholder={'в 19:00'}
                                />
                            </div>
                        </div>
                        <BaseButton
                            className={classes.buttonMargin}
                            onClick={addSchedule}
                        >
                            Запланировать
                        </BaseButton>
                        <BaseButton
                            className={classes.buttonMargin}
                            onClick={() => window.open(`tel:${applicationsView[0].phone}`)}
                            type={"secondary"} isActive
                        >
                            Позвонить
                        </BaseButton>
                    </div>
                    {
                        valueDropDown === 'letter'
                        &&
                        <div style={{display: 'grid', gridTemplateColumns: '4fr 1fr', gap: '20px'}}>
                            <div>
                                <Typography color={"tertiary"} className={classes.typography}>
                                    Тема
                                </Typography>
                                <BaseInput
                                    value={valueTheme}
                                    onChange={e=>setValueTheme(e.currentTarget.value)}
                                />
                                <Typography color={"tertiary"} className={classes.typography}>
                                    Текст письма
                                </Typography>
                                <BaseInput
                                    value={valueMessage}
                                    onChange={e=>setValueMessage(e.currentTarget.value)}
                                />
                            </div>

                            <BaseButton
                                className={classes.buttonMarginP}
                                onClick={letterUser}
                                type={"secondary"} isActive
                            >
                                Отправать сообщение
                            </BaseButton>
                        </div>
                    }
                </div>
                <hr color={'#f2f2f2'}/>
            </div>
            <Typography weight={"bold"} className={classes.marginMessage}>
                Действия по заявке
            </Typography>
            {
                applicationsView.map((application,index)=>{
                    return application.type ==='bell'
                        ?  <ViewingBell
                            messages={application.message}
                            dateActive={application.dateActive}
                            statusOrDate={application.statusOrDate}
                            timeActive={application.timeActive}
                            email={application.email}
                            name={application.name}
                            agentName={application.agentName}
                            phone={application.phone}
                            onAddMessage={(e)=>onAddMessage(e,index)}
                        />
                        :<ViewingLetter
                            statusOrDate={application.statusOrDate}
                            statusLetter={application.statusLetter}
                            timeActive={application.timeActive}
                            dateActive={application.timeActive}
                            name={application.name}
                            email={application.email}
                            agentName={application.agentName}
                            theme={application.theme}
                            messages={application.message}
                            onAddMessage={(e)=>onAddMessage(e,index)}
                        />
                })
            }
        </div>
    );
};

export default ViewingApplication;