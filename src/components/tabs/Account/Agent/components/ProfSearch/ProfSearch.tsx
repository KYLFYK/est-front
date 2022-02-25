import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import Search from "./profSearch/ProfSearch";

const ProfSearch = () => {
    return (
        <HorizontalTabs tabs={[
            {title: "Профпоиск", Component: <Search  />},
            /*{title: "Мои поиски", Component: <div ><h2>Мои поиски</h2></div>},
            {title: "Избранные объекты", Component: <div ><h2>Избранные объекты</h2></div>},*/
        ]}/>
    );
};

export default ProfSearch;