import React, {useState} from 'react';
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
    idChat: string,
    messages: Array<{
        date: string,
        message: Array<{ value: string, time: string }>
    }>
}
const messages1: messagesType = {
    idChat: '1',
    messages: [
        {
            date: '20.10.2021',
            message: [{value: 'Hello', time: '17:58'}, {value: 'Hello2', time: '17:59'}, {
                value: 'Hello1',
                time: '18:00'
            }]
        },
        {
            date: '19.10.2021',
            message: [{value: 'Hello', time: '17:58'}, {value: 'Hello2', time: '17:59'}, {
                value: 'Hello1',
                time: '18:00'
            }]
        },
        {
            date: '18.10.2021',
            message: [{value: 'Hello', time: '17:58'}, {value: 'Hello2', time: '17:59'}, {
                value: 'Hello1',
                time: '18:00'
            }]
        },
    ]
}
const messages2 = {
    idChat: '2',
    messages: [
        {
            date: '20.10.2021',
            message: [{value: 'salyt', time: '17:58'}, {value: 'salyt', time: '17:59'}, {value: 'salyt', time: '18:00'}]
        },
        {
            date: '19.10.2021',
            message: [{value: 'salyt', time: '17:58'}, {value: 'salyt', time: '17:59'}, {value: 'salyt', time: '18:00'}]
        },
        {
            date: '18.10.2021',
            message: [{value: 'salyt', time: '17:58'}, {value: 'salyt', time: '17:59'}, {value: 'salyt', time: '18:00'}]
        },
    ]
}
const messages3 = {
    idChat: '3',
    messages: [
        {
            date: '20.10.2021',
            message: [{value: 'bb', time: '17:58'}, {value: 'bb', time: '17:59'}, {value: 'bb', time: '18:00'}]
        },
        {
            date: '19.10.2021',
            message: [{value: 'bb', time: '17:58'}, {value: 'bb', time: '17:59'}, {value: 'bb', time: '18:00'}]
        },
        {
            date: '18.10.2021',
            message: [{value: 'bb', time: '17:58'}, {value: 'bb', time: '17:59'}, {value: 'bb', time: '18:00'}]
        },
    ]
}

const arrayMessage: Array<messagesType> = [messages1, messages2, messages3]

const MyMessages = () => {

    const [active, setActive] = useState<number>(0) // vision click chat
    const [chat, setChat] = useState<messagesType>(messages1)

    const [ messageValue, setMessageValue]=useState<string>('')

    const [activeChat, setActiveChat] = useState<myMessagesType>(myMessages[active])

    const choiceChat = (id: string, index: number) => {
        const newMessages = arrayMessage.filter(t => t.idChat === id)
        myMessages[index].unreadMessages = 0   // переделать на id - после подключения данных с сервера
        setActive(index)
        setActiveChat(myMessages[index])
        setChat(newMessages[0])
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
                                <div style={{marginLeft: "5px", height: "17px", display: 'flex'}}>
                                    {
                                        mess.unreadMessages !== 0
                                        && <>
                                            <div style={{
                                                position: 'relative',
                                                left: mess.unreadMessages > 9 ? "12px" : '10px',
                                                top: '4px',
                                                fontSize: '8px',
                                                color: '#9495A7'
                                            }}>
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
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Typography>{activeChat.nameOwner}</Typography>
                            <div style={{display: 'flex', marginLeft: '8px', cursor: 'pointer'}}>
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
                    <div style={{display: 'flex'}}>
                        <Typography>Тема сообщения: </Typography>
                        <Typography weight={"bold"}>{activeChat.subjectMessage}</Typography>
                    </div>
                </div>

                <div className={css.borderChat}>
                    {
                        chat.messages.map((mes, index) => (
                            <div key={index}>
                                <div>
                                    <Typography weight={"light"}
                                                className={css.typographyCenter}>{mes.date}</Typography>
                                </div>
                                {
                                    mes.message.map((m, index) => (
                                        <div key={index} className={css.borderChatMessage}>
                                            <Typography>{m.value}</Typography>
                                            <Typography weight={"light"}
                                                        className={css.marginTopTime}>{m.time}</Typography>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }

                </div>
                <div style={{marginRight:'1px'}}>
                    <BaseInput
                        value={messageValue}
                        onChange={e=>setMessageValue(e.currentTarget.value)}

                        className={css.baseButton}/>
                </div>

            </div>
        </div>
    );
};

export default MyMessages;