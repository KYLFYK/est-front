import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import MyMessages from "./MyMessages/MyMessages";

const Messages = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Мои сообщения", Component: <MyMessages />},
            {title: "Архив", Component: <div ><h2>Архив</h2></div>},
        ]}/>
    );
};

export default Messages;