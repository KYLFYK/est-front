import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import MyMessages from "./MyMessages/MyMessages";

const Messages = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Мои сообщения", Component: <MyMessages />},
            {title: "Архив", Component: <MyMessages archive={true}/>},
        ]}/>
    );
};

export default Messages;