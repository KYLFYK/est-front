import React, {FC, KeyboardEvent, useEffect, useState} from 'react';
import Typography from "../../../../../../shared/Typography/Typography";
import classNames from "classnames";
import css from './MyMessages.module.scss'
import {BaseInput} from "../../../../../../shared/BaseInput/Input";

type myMessagesType = {
    idChat: string
    nameObject: string
    unreadMessages: number
    totalAreaObject: string
    priceObject: string
    city: string
    street: string
    nameOwner: string
    statusActive: boolean,
    subjectMessage: string
}

type myMessagesAType = Array<myMessagesType>

const myMessages: myMessagesAType = [
    {
        idChat: '1',
        nameObject: '2-эт. коттедж',
        unreadMessages: 0,
        totalAreaObject: '300 м2',
        priceObject: '7 000 000 Р',
        city: 'г.Санкт-Петербург',
        street: 'ул.Ленина 18',
        nameOwner: 'Герман Тиньков',
        statusActive: true,
        subjectMessage: 'Заявка на просмотр',
    },
    {
        idChat: '2',
        nameObject: '2-эт. коттедж',
        unreadMessages: 5,
        totalAreaObject: '200 м2',
        priceObject: '555 000 000 Р',
        city: 'г.Санкт-Петербург',
        street: 'ул.Ленина 38',
        nameOwner: 'Galj Vaheshova',
        statusActive: false,
        subjectMessage: 'Покупка дома',
    },
    {
        idChat: '3',
        nameObject: '3-эт. коттедж',
        unreadMessages: 15,
        totalAreaObject: '400 м2',
        priceObject: '8 000 000 Р',
        city: 'г.Санкт-Петербург г.Санкт-Петербург г.Санкт-Петербург',
        street: 'ул.Ленина 28',
        nameOwner: 'Robo-cob',
        statusActive: true,
        subjectMessage: 'Аренда дома',
    },
]

type messagesType = {
    idRoom: string,
    messagesRoom: Array<{
        date: string,
        messages: Array<{from:string, text: string, time: string }>
    }>
}


const today = new Date();
const date = today.toISOString().substring(0, 10).split('-').reverse().join('.')
// time
const timeIso = today.toISOString().substring(11, 16).split('-').reverse().join('.')
const timeHour =timeIso.split(':')[0]
const timeMin =timeIso.split(':')[1]
const time3UTC =+timeHour+3+":"+timeMin

const messages1: messagesType = {
    idRoom: '1',
    messagesRoom: [
        {
            date: '18.10.2021',
            messages: [
                {from:'id',text: 'HelloHelloHelloHe', time:'17:58'},
                {from:'id',text: 'Hello2', time: '17:58'},
                {from:'id', text: 'Hello1', time: '18:00'}
            ]
        },
        {
            date:  '18.10.2021',
            messages: [
                {from:'1',text: 'Hello', time: '17:58'},
                {from:'1',text: 'Hello2', time: '17:58'},
                {from:'1', text: 'Hello1', time: '18:00'}
            ]
        },
        {
            date:  '18.10.2021',
            messages: [
                {from:'1',text: 'Hello', time: '17:58'},
                {from:'1',text: 'Hello2', time: '17:58'},
                {from:'1', text: 'Hello1', time: '18:00'}
            ]
        },


    ]
}
const messages2: messagesType = {
    idRoom: '2',
    messagesRoom: [
        {
            date: '18.10.2021',
            messages: [
                {from:'1',text: 'salyt', time: '17:58'},
                {from:'1',text: 'salyt', time: '17:59'},
                {from:'1',text: 'salyt', time: '18:00'}
            ]
        },
        {
            date: '19.10.2021',
            messages: [
                {from:'1',text: 'salyt', time: '17:58'},
                {from:'1',text: 'salyt', time: '17:59'},
                {from:'1',text: 'salyt', time: '18:00'}
            ]
        },
        {
            date: '20.10.2021',
            messages: [
                {from:'1',text: 'salyt', time: '17:58'},
                {from:'1',text: 'salyt', time: '17:59'},
                {from:'1',text: 'salyt', time: '18:00'}
            ]
        },


    ]
}
const messages3: messagesType = {
    idRoom: '3',
    messagesRoom: [
        {
            date: '18.10.2021',
            messages: [
                {from:'1',text: 'bb', time: '17:58'},
                {from:'1',text: 'bb', time: '17:59'},
                {from:'1',text: 'bb', time: '18:00'}
            ]
        },
        {
            date: '19.10.2021',
            messages: [
                {from:'1',text: 'bb', time: '17:58'},
                {from:'1',text: 'bb', time: '17:59'},
                {from:'1',text: 'bb', time: '18:00'}
            ]
        },
        {
            date: '20.10.2021',
            messages: [
                {from:'1',text: 'bb', time: '17:58'},
                {from:'1',text: 'bb', time: '17:59'},
                {from:'1',text: 'bb', time: '18:00'}
            ]
        },
    ]
}

const dateMessage1 = [
    {date: '18.10.2021'},
    {date: '19.10.2021'},
    {date: '20.10.2021'}
]
const dateMessage2 = [
    {date: '18.10.2021'},
    {date: '19.10.2021'},
    {date: '20.10.2021'}
]
const dateMessage3 = [
    {date: '18.10.2021'},
    {date: '19.10.2021'},
    {date: '20.10.2021'}
]
const dateMessage=[dateMessage1,dateMessage2,dateMessage3]
const arrayMessage: Array<messagesType> = [messages1, messages2, messages3]

type MyMessagesType={
    archive?:boolean
}

const MyMessages :FC<MyMessagesType> = ({archive=false}) => {

    const id = '2' // userId

    const [active, setActive] = useState<number>(0) // vision click chat
    const [chat, setChat] = useState<messagesType>(arrayMessage[active])
    debugger
    const [dMessage, setDMessage] = useState(dateMessage[active])
    const [messageValue, setMessageValue] = useState<string>('')
    console.log(active)
    const [activeChat, setActiveChat] = useState<myMessagesType>(myMessages[active])

    useEffect(()=>{
        setDMessage(dateMessage[active])
    },[active])

    const choiceChat = (id: string, index: number) => {
        const newMessages = arrayMessage.filter(t => t.idRoom === id)
        myMessages[index].unreadMessages = 0   // переделать на id - после подключения данных с сервера
        setActive(index)
        setActiveChat(myMessages[index])
        setChat(newMessages[0])
    }

    const lengthZero = (e: number) => {
        if (e.toString().length > 1) return e
        return '0' + e
    }


    const addDescription = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log(messageValue)
            const date = new Date
            const day = date.getDate()
            const year = date.getFullYear()
            const month = date.getMonth()
            const minutes = date.getMinutes()
            const hours = date.getHours()

            const dateMock = `${lengthZero(day)}.${lengthZero(month + 1)}.${lengthZero(year)}`

            const time = `${lengthZero(hours)}:${lengthZero(minutes)}`

            const search = dMessage.map((t, index) => t.date === dateMock ? index : '-').filter(t => t !== '-')
            if (search.length > 0) {
                const a = {text: messageValue, time: time ,from:'1'}
                const ind: any = search[0]
                arrayMessage[active].messagesRoom[ind].messages.push(a)
                const mS = dMessage
                mS.push({date: dateMock})
            } else {
                const search = dMessage.map((t, index) => t.date === dateMock ? index : '-').filter(t => t !== '-')
                if (search.length > 0) {
                    const a = {text: messageValue, time: time,from:'1'}
                    const ind: any = search[0]
                    arrayMessage[active].messagesRoom[ind].messages.push(a)
                    // messages1.messages[active].message.push({value: messageValue, time: time})
                    setActiveChat(myMessages[active])
                } else {
                    const mS = dMessage
                    mS.push({date: dateMock})
                    setDMessage(mS)
                    arrayMessage[active].messagesRoom.push(
                        {date: dateMock, messages: [{text: messageValue, time: time,from:'1'}]}
                    )
                    setActiveChat(myMessages[active])
                }

            }
            setMessageValue('')
        }
    }
    const addMessage = () => {
        const date = new Date
        const day = date.getDate()
        const year = date.getFullYear()
        const month = date.getMonth()
        const minutes = date.getMinutes()
        const hours = date.getHours()
        const messageTest = {
            message: messageValue,
            date: `${lengthZero(day)}.${lengthZero(month + 1)}.${lengthZero(year)}`,
            time: `${lengthZero(hours)}:${lengthZero(minutes)}`
        }
        console.log(messageTest)
        setMessageValue('')
    }

    const recover = (active:number) =>{
        console.log(active,'recover')
    }

    return (
        <div className={css.column}>
            <div>
                {
                    myMessages.map((mess, index) => (
                        <div key={index} className={classNames(css.borderInfo, active === index && css.activeBorder)}
                             onClick={() => choiceChat(mess.idChat, index)}>
                            <div style={{display: 'flex'}}
                                 title={`${mess.nameObject}, ${mess.totalAreaObject}, ${mess.priceObject}`}>
                                <Typography className={css.textLength}>
                                    {mess.nameObject}, {mess.totalAreaObject}, {mess.priceObject}
                                </Typography>
                                <div className={css.iconPosition}>
                                    {
                                        mess.unreadMessages !== 0
                                        && <>
                                            <div style={{left: mess.unreadMessages > 9 ? "12px" : '10px'}} className={css.iconMessageNumber}>
                                                {mess.unreadMessages}
                                            </div>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8.5" cy="8.5" r="8.5" fill="#F2F2F2"/>
                                            </svg>
                                        </>
                                    }
                                </div>
                            </div>
                            <div title={`${mess.city}, ${mess.street}`}>
                                <Typography
                                    weight={"light"}
                                    className={classNames(css.textMargin, css.textLength)}
                                >
                                    {mess.city}, {mess.street}
                                </Typography>
                            </div>

                            <Typography weight={"light"} color={"tertiary"}>
                                {mess.nameOwner}
                            </Typography>
                        </div>
                    ))
                }
            </div>

            <div>
                <div className={css.df_jc}>
                    <div>
                        <div className={css.df_ai}>
                            <Typography>{activeChat.nameOwner}</Typography>
                            <div className={css.df_ml_c}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                                        fill="#C5A28E"/>
                                </svg>
                            </div>
                        </div>
                        <Typography
                            weight={"light"}
                            color={"tertiary"}
                            className={css.statusMargin}
                        >
                            {activeChat.statusActive ? 'На сайте' : 'Не в сети'}
                        </Typography>
                    </div>
                    <div className={css.df}>
                        <Typography>
                            Тема сообщения:
                        </Typography>
                        <Typography weight={"bold"} className={css.marginL_5}>
                            {activeChat.subjectMessage}
                        </Typography>
                    </div>
                </div>

                <div >
                    <div className={css.borderChat} >

                        {
                            chat.messagesRoom.map((mes, index) => (
                                <div key={index}>
                                    <div>
                                        <Typography
                                            weight={"light"}
                                            className={css.typographyCenter}
                                        >
                                            {mes.date}
                                        </Typography>
                                    </div>
                                    {
                                        mes.messages.map((m, index) => (
                                            <div key={index} style={{display:"flex", flexDirection:m.from ==id ? 'row' :'row-reverse'}}>
                                                <div className={css.borderChatMessage}>
                                                    <Typography>{m.text}</Typography>
                                                    <Typography
                                                        weight={"light"}
                                                        className={css.marginTopTime}
                                                    >
                                                        {m.time}
                                                    </Typography>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div style={{marginRight:!archive? '6px':'2px'}}>
                    {
                        !archive?
                        <BaseInput
                            value={messageValue}
                            onChange={e => setMessageValue(e.currentTarget.value)}
                            className={css.baseButton}
                            onKeyDown={e => addDescription(e)}
                            icon={

                                <div>
                                    <svg style={{cursor: 'pointer'}} onClick={addMessage} width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.01 6.03L11.52 9.25L4 8.25L4.01 6.03ZM11.51 14.75L4 17.97V15.75L11.51 14.75ZM2.01 3L2 10L17 12L2 14L2.01 21L23 12L2.01 3Z"
                                            fill="#E0E0E0"/>
                                    </svg>
                                </div>
                            }
                        />
                            :
                            <div onClick={()=>recover(active)} className={css.recoverText}>
                                <Typography color={"nude"}>
                                    Восстановить чат
                                </Typography>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default MyMessages;