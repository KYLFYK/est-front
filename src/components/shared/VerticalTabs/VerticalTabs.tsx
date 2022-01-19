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
  tabs: ITabItem[];
  className?: string;
  link?: boolean;
  storybook?: boolean;
}

const VerticalTabs: React.FC<Props> = ({ tabs, className, link }) => {
  const router = useRouter();
  // search index ( tabs - title - color ) : number
  const searchColor = tabs
    .map((tab, index) =>
      searchNamePage(tab.title) === (router ? router.asPath.substr(1) : "/")
        ? index
        : 0
    )
    .sort()
    .pop();

  const tabsVision = tabs.filter(
    (tab) =>
      searchNamePage(tab.title) === (router ? router.asPath.substr(1) : "/")
  );

  const [active, setActive] = useState<number>(searchColor ? searchColor : 0);
  const tabsUrl = tabs.map((tab) => searchNamePage(tab.title));

  const movePage = (page: number) => {
    if (link) {
      router.push(tabsUrl[page]);
    }
    setActive(page);
  };

  return (
    <div className={css.body}>
      <MenuUser
        active={active}
        onActive={movePage}
        menu={tabs.map((tab) => tab.title)}
      />
      <div className={classNames(css.information, className)}>
        {link === undefined
          ? tabsVision.length > 0 && tabsVision[0].Component
          : tabs[active].Component}
      </div>
    </div>
  );
};

type MenuUserType = {
  onActive: (num: number) => void;
  menu: Array<string>;
  active?: number;
  link?: boolean;
};

export const MenuUser: React.FC<MenuUserType> = ({
  active = 0,
  onActive,
  menu,
  link,
}) => {
  const router = useRouter();

  return (
    <div className={css.menu}>
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
                    : "tertiary"
                  : name === menu[active]
                  ? "nude"
                  : "tertiary"
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
