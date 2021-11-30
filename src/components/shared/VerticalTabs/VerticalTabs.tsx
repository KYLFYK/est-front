import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import css from './VerticalTabs.module.scss'
import classNames from "classnames";

interface ITabItem {
    title: string,
    Component: JSX.Element
}
interface Props {
    tabs: ITabItem[]
    className?:string
}

const VerticalTabs: React.FC<Props> = ({tabs,className}) => {
    const [active, setActive] = useState<number>(1)
    return (
        <div className={css.body}>
            <MenuUser active={active} onActive={setActive} menu={tabs.map((tab) => tab.title)} />
            <div className={classNames(css.information,className)}>
                {
                   tabs[active].Component
                }
            </div>

        </div>
    );
};


type MenuUserType = {
    active: number
    onActive: (num: number) => void
    menu: Array<string>
}

const MenuUser: React.FC<MenuUserType> = ({ active, onActive, menu }) => {

    return (
        <div className={css.menu}>
            {
                menu.map((name, index) => (
                    <div
                        key={index}
                        className={css.menuItem}
                        style={{ color: active === index ? '#C5A28E' : '' }}
                        onClick={() => onActive(index)}
                    >
                        <Typography size={'default'} color={active === index ? 'nude' : 'tertiary'} weight="bold">
                            {name}
                        </Typography>
                    </div>
                ))
            }
        </div>
    );
};


export default VerticalTabs;