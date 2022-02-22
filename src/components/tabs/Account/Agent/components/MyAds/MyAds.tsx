import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import Active from "./component/Active/Active";
import Archive from "./component/Archive/Archive";
import Drafts from "./component/Drafts/Drafts";
import Statistics from "./component/Statistics/Statistics";

const MyAds = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Активные", Component: <Active  />},
            {title: "Архив", Component: <Archive />},
            {title: "Черновики", Component: <Drafts />},
            /*{title: "Статистика", Component: <Statistics />},*/
        ]}/>
    );
};

export default MyAds;