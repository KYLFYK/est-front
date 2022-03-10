import React, { FC, useEffect, useState } from "react";
import { SearchOffice } from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import Typography from "../../../../../../shared/Typography/Typography";
import { GlassIcon } from "../../../../../../../icons/InputIcon/GlassIcon";
import { IObject } from "../../../../../../../mobx/role/agent/ads/AgentAds";
import { MyAdsItem } from "./MyAdsItem";

import css from "./Active.module.scss";
import { ObjectTypes } from "../../../../../../../utils/interfaces/objects";

export const searchColor = (status: string) => {
  switch (status) {
    case "Забронирован":
      return "nude";
    case "Свободна":
      return "green";
    case "Продан":
      return "tertiary";
    case "Архив":
      return "tertiary";
    default:
      return "tertiary";
  }
};
type ActiveType = {
  menu?: "active" | "archive" | "draft";
  objects: IObject[];
  deleteObject?: (id: number, type: ObjectTypes) => void;
  restoreObject?: (id: number, type: ObjectTypes) => void;
};

export type IObjType = "rent" | "sale" | "buy";

export const getObjType: (type: IObjType) => string = (type) => {
  switch (type) {
    case "rent":
      return "Аренда";
    case "sale":
      return "Продажа";
    case "buy":
      return "Покупка";
  }
};

const MyAdsContainer: FC<ActiveType> = ({
  menu,
  objects,
  deleteObject,
  restoreObject,
}) => {
  const [maxCardWidth, setMaxCardWidth] = useState<number | "unset">("unset");

  useEffect(() => {
    const listener = () => {
      const wrapper = document.querySelector(".VerticalTabs_body__3JNyP");
      const menu = document.querySelector(".VerticalTabs_menu__3NuQg");

      if (wrapper && menu) {
        setMaxCardWidth(wrapper.clientWidth - menu.clientWidth - 80);
      }
    };

    listener();

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <div>
      <SearchOffice
        type={menu}
        inputIcon={<GlassIcon />}
        inputIconPlacement={"right"}
        placeholder={"Поиск..."}
        className={`${css.placeholder} ${css.altPadding}`}
      />
      <FilterSearch />
      {objects.length > 0 ? (
        objects.map((home) => (
          <MyAdsItem
            key={home.id}
            home={home}
            maxCardWidth={maxCardWidth}
            menu={menu}
            deleteObject={deleteObject}
            restoreObject={restoreObject}
          />
        ))
      ) : (
        <div
          style={{
            marginTop: 40,
          }}
        >
          <Typography
            color={"default"}
            weight={"bold"}
            className={css.paddingRight_5}
          >
            Нет объявлений
          </Typography>
        </div>
      )}
    </div>
  );
};

export default MyAdsContainer;
