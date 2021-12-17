import { FC } from "react";
import { MenuItem } from "./components/MenuItem";

import styles from "./VerticalMenu.module.scss";

export interface IMenuItem {
  url: string;
  text: string;
  active?: boolean;
  markerCount?: number;
}

export type IMenuItemsData = IMenuItem[];

interface Props {
  menuItems: IMenuItemsData;
}

export const VerticalMenu: FC<Props> = ({ menuItems }) => {
  return (
    <div className={styles.wrapper}>
      {menuItems.map((el, index) => (
        <MenuItem key={index} data={el} />
      ))}
    </div>
  );
};
