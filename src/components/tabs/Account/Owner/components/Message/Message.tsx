import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";

const Message = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Чат продажи", Component: <div />},
            {title: "Чат покупки", Component: <div />},
            {title: "Спам", Component: <div />},
            {title: "Архив", Component: <div />},
        ]}/>
    );
};

export default Message;