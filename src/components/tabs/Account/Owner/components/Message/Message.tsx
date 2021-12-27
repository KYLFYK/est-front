import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import MyMessages from "../../../Agent/components/Messages/MyMessages/MyMessages";

const Message = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Чат продажи", Component: <MyMessages  />},
            {title: "Чат покупки", Component: <MyMessages  />},
            {title: "Архив", Component: <MyMessages archive={true} />},
        ]}/>
    );
};

export default Message;