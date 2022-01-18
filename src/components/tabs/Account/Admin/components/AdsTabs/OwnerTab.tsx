import React, { FC } from "react";
import { PageFilter } from "../common/PageFilter";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { AdItem, IObject } from "./agency/AdItem";

import styles from "./agency/AgencyTab.module.scss";

const elems: IObject[] = [
  {
    name: "2-этажный коттедж, 300 м²",
    address: "г. Санкт-Петербург, ул. Ленина 18",
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
    headerElems: [
      {
        key: "Дата обновления:",
        value: "31.08.2021",
      },
      {
        key: "Дата публикации:",
        value: "21.08.2021",
      },
    ],
    footerButton: "Продвинуть",
  },
  {
    name: "3-комнатная квартира в Москве, 80 м²",
    address: "г. Москва, Лефортово, ул. Воскова 90",
    footerMainElems: [
      {
        key: "Показов в поиске",
        value: "30",
      },
      {
        key: "Просмотров",
        value: "5",
      },
      {
        key: "Избранное",
        value: "2",
      },
    ],
    headerElems: [
      {
        key: "Черновик",
        value: "",
      },
    ],
    footerButton: "Архивировать",
  },
  {
    name: "Участок на окраине Омска, 30 соток",
    address: "г. Омск, ул. 17-ая линия 60",
    footerMainElems: [
      {
        key: "Показов в поиске",
        value: "0",
      },
      {
        key: "Просмотров",
        value: "10",
      },
      {
        key: "Избранное",
        value: "1",
      },
    ],
    headerElems: [
      {
        key: "В архиве с:",
        value: "29.08.2021",
      },
    ],
    footerButton: "Восстановить",
  },
];

export const OwnerTab: FC = () => {
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
