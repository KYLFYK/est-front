import React, {useEffect, useState} from 'react';
import Typography from '../Typography/Typography';

import classNames from "classnames";
import css from './VerticalTabs.module.scss'
import {useRouter} from "next/router";
import {searchNamePage} from "../../../utils/routes";
interface ITabItem {
    title: string,
    Component: JSX.Element
}
interface Props {
    tabs: ITabItem[]
    className?:string
}

const VerticalTabs: React.FC<Props> = ({tabs,className}) => {

    const tabsUrl = tabs.map(tab=>searchNamePage(tab.title))

    const router = useRouter()
    const movePage = (page:number) => {
        router.push(tabsUrl[page])
    }
    const tabsVision = tabs.filter(tab=>searchNamePage(tab.title) === router.asPath.substr(1,15))

    return (
        <div className={css.body}>
            <MenuUser  onActive={movePage} menu={tabs.map((tab) => tab.title)} />
            <div className={classNames(css.information,className)}>
                {
                    tabsVision[0].Component
                }
            </div>
        </div>
    );
};


type MenuUserType = {
    onActive: (num: number) => void
    menu: Array<string>
}

const MenuUser: React.FC<MenuUserType> = ({  onActive, menu }) => {
    const router = useRouter()

    useEffect(()=>{
    },[router.pathname])

    return (
        <div className={css.menu}>
            {
                menu.map((name, index) => (
                    <div
                        key={index}
                        className={css.menuItem}
                        style={{ color: router.asPath === searchNamePage(name) ? '#C5A28E' : '' }}
                        onClick={() => onActive(index)}
                    >
                        <Typography size={'default'} color={router.pathname.substr(1,15) === searchNamePage(name) ? 'nude' : 'tertiary'} weight="bold">
                            {name}
                        </Typography>
                    </div>
                ))
            }
        </div>
    );
};

export default VerticalTabs;