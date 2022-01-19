import React, { FC } from "react";
import { PageFilter } from "../common/PageFilter";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { AdItem, IObject } from "./agency/AdItem";

import styles from "./agency/AgencyTab.module.scss";

const elems: IObject[] = [
  {
    name: "3-этажный коттедж, 600 м²",
    address: "Крым, Ялта",
    additionalSmall: true,
    footerMainElems: [
      {
        key: "Показов в поиске",
        value: "0",
      },
      {
        key: "Просмотров",
        value: "506",
      },
      {
        key: "Избранное",
        value: "9",
      },
    ],
    footerElems: [
      {
        key: "Дата обновления:",
        value: "31.08.2021",
      },
      {
        key: "Дата публикации:",
        value: "21.08.2021",
      },
    ],
  },
  {
    name: "3-этажный коттедж, 600 м²",
    address: "Крым, Ялта",
    additionalSmall: true,
    altHeadKeys: true,
    headerElems: [
      {
        key: "Продан",
        value: "10 000 000 ₽",
      },
    ],
    footerMainElems: [
      {
        key: "Показов в поиске",
        value: "0",
      },
      {
        key: "Просмотров",
        value: "506",
      },
      {
        key: "Избранное",
        value: "9",
      },
    ],
    footerElems: [
      {
        key: "Дата обновления:",
        value: "31.08.2021",
      },
      {
        key: "Дата публикации:",
        value: "21.08.2021",
      },
    ],
  },
];

export const DeveloperTab: FC = () => {
  return (
    <div className={styles.wrapper}>
      <PageFilter buttonText={"Добавить объект"} />
      <FilterSearch />
      <div className={styles.list}>
        {elems.map((element, index) => (
          <AdItem {...element} key={index} />
        ))}
      </div>
    </div>
  );
};
