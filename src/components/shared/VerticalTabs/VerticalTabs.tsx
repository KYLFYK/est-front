import React, { useState } from "react";
import Typography from "../Typography/Typography";
import { useRouter } from "next/router";
import { searchNamePage } from "../../../utils/routes";
import classNames from "classnames";

import css from "./VerticalTabs.module.scss";

export interface ITabItem {
  title: string;
  Component: JSX.Element;
}

interface Props {
  tabs: any
  className?: string
  link?: boolean
  storybook?: boolean
  classNameBody?: any
  classNameMenu?: any
  classNameInfo?: any
}

const VerticalTabs: React.FC<Props> = ({ tabs, className, link, classNameBody, classNameMenu, classNameInfo }) => {
  const router = useRouter();
  // search index ( tabs - title - color ) : number
  const searchColor = tabs
    .map((tab: any, index: number) =>
      searchNamePage(tab.title) === (router ? router.asPath.substr(1) : "/")
        ? index
        : 0
    )
    .sort()
    .pop();

  const tabsVision = tabs.filter(
    (tab: any) =>
      searchNamePage(tab.title) === (router ? router.asPath.substr(1) : "/")
  );

  const [active, setActive] = useState<number>(searchColor ? searchColor : 0);
  const tabsUrl = tabs.map((tab: any) => searchNamePage(tab.title));

  const movePage = (page: number) => {
    if (link) {
      router.push(tabsUrl[page]);
    }
    setActive(page);
  };

  return (
    <div className={`${css.body} ${classNameBody ? classNameBody : ''}`}>
      <MenuUser
        active={active}
        onActive={movePage}
        classNameMenu={classNameMenu}
        menu={tabs.map((tab: any) => tab.title)}
      />
      <div className={`${css.information} ${classNameInfo ? classNameInfo : ''}`}>
        {link === undefined
          ? tabsVision.length > 0 && tabsVision[0].Component
          : tabs[active].Component}
      </div>
    </div>
  );
};

type MenuUserType = {
  onActive: (num: number) => void
  menu: Array<string>
  active?: number
  link?: boolean
  classNameMenu?: any
};

export const MenuUser: React.FC<MenuUserType> = ({
  active = 0,
  onActive,
  menu,
  link,
  classNameMenu,
}) => {
  const router = useRouter();

  return (
    <div className={`${css.menu} ${classNameMenu ? classNameMenu : ''}`}>
      {menu.map((name, index) => {
        return (
          <div
            key={index}
            className={css.menuItem}
            style={{
              color:
                (router ? router.asPath : "/") === searchNamePage(name)
                  ? "#C5A28E"
                  : "",

            }}
            onClick={() => onActive(index)}
          >
            <Typography
              size={"default"}
              color={
                link !== undefined
                  ? router.pathname.substr(1, 15) === searchNamePage(name)
                    ? "nude"
                    : "default"
                  : name === menu[active]
                  ? "nude"
                  : "default"
              }
              weight="bold"
            >
              {name}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalTabs;
