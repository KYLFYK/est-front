import React from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import css from './location.module.scss'
import Country from "./Country";
import City from "./City";
import Region from "./Region";
import Editing from "../Editing/Editing";
const Location = () => {
    return (
        <HorizontalTabs
            wrapperClassName={css.wrapper}
            tabs={[
            // { title: "Страны", Component: <Country/> },
            { title: "Списки", Component: <Editing/> },
            { title: "Города", Component: <City/> },
            { title: "Регионы", Component: <Region/> },
        ]} />
    );
};

export default Location;