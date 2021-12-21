import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import MyObjectActive from "./MyObjectActive/MyObjectActive";
import MyObjectArchives from "./MyObjectArchives/MyObjectArchives";
import MyObjectDraft from "./MyObjectDraft/MyObjectDraft";
import MyObjectApplications from "./MyObjectApplications/MyObjectApplications";
import css from './MyObject.module.scss'

const MyObjects = () => {
    return (
        <HorizontalTabs wrapperClassName={css.wrapper} tabs={[
            {title: "Активные", Component: <MyObjectActive />},
            {title: "Черновики", Component: <MyObjectArchives />},
            {title: "Архив", Component: <MyObjectDraft />},
            {title: "Заявки", Component: <MyObjectApplications />},
        ]}/>
    );
};

export default MyObjects;