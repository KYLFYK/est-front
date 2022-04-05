import React, { FC, useEffect, useState } from "react";
import { SearchOffice } from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import Typography from "../../../../../../shared/Typography/Typography";
import { GlassIcon } from "../../../../../../../icons/InputIcon/GlassIcon";
import { IObject } from "../../../../../../../mobx/role/agent/ads/AgentAds";
import { MyAdsItem } from "./MyAdsItem";
import css from "./Active.module.scss";
import { ObjectTypes } from "../../../../../../../utils/interfaces/objects";
import Scroll from "../../../../../../shared/Scroll/Scroll";

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

export const ObjTypeToRu: (type: IObjType) => string = (type) => {
  switch (type) {
    case "buy":
      return "Покупка";
    case "sale":
      return "Продажа";
    case "rent":
      return "Аренда";
  }
};

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
  const [textFilter, setTextFilter] = useState("");
  const [sort, setSort] = useState("default");

  let sortedData: any = [];
  if (sort === "high") {
    sortedData = [
      ...objects.sort((a: any, b: any) => (a.price > b.price ? 1 : -1)),
    ];
  }
  if (sort === "low") {
    sortedData = [
      ...objects.sort((a: any, b: any) => (a.price < b.price ? 1 : -1)),
    ];
  }
  if (sort === "default") {
    sortedData = [...objects];
  }

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

  const onChange = (e: any) => {
    setTextFilter(e.target.value);
  };

  return (
    <div>
      <SearchOffice
        type={menu}
        inputIcon={<GlassIcon />}
        inputIconPlacement={"right"}
        placeholder={"Поиск..."}
        value={textFilter}
        onChange={onChange}
        className={`${css.placeholder} ${css.altPadding}`}
      />
      <FilterSearch sort={sort} setSort={setSort} />
      <Scroll height={'440'}>
        {sortedData?.length > 0 ? (
          sortedData
            ?.filter((d: any) =>
              d.name.toLowerCase().includes(textFilter.toLowerCase())
            )
            .map((home: any, id: number) => (
              <MyAdsItem
                key={id}
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
        </Scroll>
    </div>
  );
};

export default MyAdsContainer;
