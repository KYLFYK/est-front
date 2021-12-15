import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";

const MyObjects = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Активные", Component: <div />},
            {title: "Черновики", Component: <div />},
            {title: "Архив", Component: <div />},
        ]}/>
    );
};

export default MyObjects;