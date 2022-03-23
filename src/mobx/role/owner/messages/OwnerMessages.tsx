import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";

class OwnerMessagesStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = {
        messages: [
            {
                idChat: '1',
                urlObject: 'google.com',
                urlAgent: 'google.com',
                urlUser: 'google.com',
                nameObject: '2-эт. коттедж',
                unreadMessages: 0,
                totalAreaObject: '300 м2',
                priceObject: '7 110 000 Р',
                city: 'г.Санкт-Петербург',
                street: 'ул.Ленина 18',
                nameOwner: 'Герман Тиньков',
                statusActive: true,
                subjectMessage: 'Заявка на просмотр',
            },
            {
                idChat: '2',
                urlObject: 'google.com',
                urlAgent: 'google.com',
                urlUser: 'google.com',
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
                urlObject: 'google.com',
                urlAgent: 'google.com',
                urlUser: 'google.com',
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
        ],
        idRoom: '1',
        messagesRooms: [
            {
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
            },
            {
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
            },
            {
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
            },
        ],
        dateMessages:[
            [
                {date: '18.10.2021'},
                {date: '19.10.2021'},
                {date: '20.10.2021'}
            ]

        ]
    }

    fetch(id: string) {

    }

    get() {
        return JSON.parse(JSON.stringify({...this.initialData}))
    }
}

const StoreContext = createContext<OwnerMessagesStore>(new OwnerMessagesStore());

const StoreProvider: FC<{ store: OwnerMessagesStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreOwnerMessages = () => {
    return useContext(StoreContext);
};

export {OwnerMessagesStore, StoreProvider, useStoreOwnerMessages};