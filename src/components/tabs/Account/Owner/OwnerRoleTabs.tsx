import React from 'react';
import VerticalTabs from "../../../shared/VerticalTabs/VerticalTabs";
import PersonalAccount from "./components/PersonalAccount/PersonalAccount";
import Favourites from "./components/Favourites/Favourites";
import SavedSearches from "./components/SavedSearches/SavedSearches";
import Message from "./components/Message/Message";
import Notification from "./components/Notification/Notification";
import MyObjects from "./components/MyObjects/MyObjects";
import CheckingObject from "./components/CheckingObject/CheckingObject";

const personalAccount = {
        firstName:'Иван',
        secondName:'Иванов',
        dateBirth:'10.12.1994',
        phone:'+7 999 888 66 11',
        email:'ivanov@estatum.com',
        password:'lsadf21kf',
        image:'https://wallbox.ru/resize/800x480/wallpapers/main2/201728/14997845035964e5370c9756.49539791.jpg'
}

const mySearchMoc=[
    {id:'1',nameObject:'Покупка, 3-этажный коттедж, Крым, до 10 000 000 Р',locations:'Крым, Ялта', ads:100,alertStatus:'none'},
    {id:'2',nameObject:'Аренда, 2-комнатная квартира, Спб, до 40 000 Р',locations:'СПб, м.Лесная', ads:0,alertStatus:'day'},
]

const OwnerRoleTabs = () => {
    return (
        <VerticalTabs
            tabs={[
                { title: "Личный кабинет", Component: <PersonalAccount personalAccount={personalAccount} /> },
                { title: "Избранное", Component: <Favourites /> },
                { title: "Сохранённые поиски", Component: <SavedSearches mySearch={mySearchMoc} /> },
                { title: "Сообщения", Component: <Message /> },
                { title: "Уведомления", Component: <Notification /> },
                { title: "Мои объекты", Component: <MyObjects /> },
                { title: "Проверка объекта", Component: <CheckingObject /> },
            ]}
        />
    )
};

export default OwnerRoleTabs;