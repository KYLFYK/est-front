import React, { FC } from "react";
import { PageFilter } from "../../common/PageFilter";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import { AdItem, IObject } from "./AdItem";

import styles from "./AgencyTab.module.scss";

const elems: IObject[] = [
  {
    name: "Аренда, 3-этажный коттедж, 600 м²",
    address: "Крым, Ялта",
    headerElems: [
      {
        key: "Агент:",
        value: "Виталий Панкратов",
      },
      {
        key: "Дата публикации:",
        value: "31.08.2021",
      },
    ],
    footerMainElems: [
      {
        key: "Цена",
        value: "10 000 000 ₽",
      },
      {
        key: "Тип объекта",
        value: "Коттедж",
      },
      {
        key: "Жилая площадь",
        value: "100 м²",
      },
      {
        key: "Этажность",
        value: "3 этажа",
      },
      {
        key: "Бассейн",
        value: "Есть",
      },
      {
        key: "Гараж",
        value: "50 м²",
      },
      {
        key: "Терраса",
        value: "20 м²",
      },
    ],
  },
  {
    name: "Аренда, 1-комнатная квартира в центре Сочи",
    address: "Сочи, улица Ленина, дом 36",
    textButton: "Опубликовать",
    headerElems: [
      {
        key: "Агент:",
        value: "Виталий Панкратов",
      },
      {
        key: "Изменено:",
        value: "31.08.2021",
      },
    ],
    footerMainElems: [
      {
        key: "Цена",
        value: "15 000 000 ₽",
      },
      {
        key: "Тип объекта",
        value: "Квартира",
      },
      {
        key: "Жилая площадь",
        value: "100 м²",
      },
      {
        key: "Комнат",
        value: "1",
      },
      {
        key: "Площадь",
        value: "40 м²",
      },
      {
        key: "ЖК",
        value: "Знаменский",
      },
      {
        key: "Этаж",
        value: "1/18",
      },
      {
        key: "Тип дома",
        value: "Кирпичный",
      },
    ],
  },
  {
    name: "Продажа, Участок в Троицком 30 соток, 600 м²",
    address: "Троицкое, микрорайон Ясная Поляна",
    textButton: "Восстановить",
    headerElems: [
      {
        key: "Агент:",
        value: "Виталий Панкратов",
      },
      {
        key: "В архиве с:",
        value: "31.08.2021",
      },
    ],
    footerMainElems: [
      {
        key: "Цена",
        value: "5 000 000 ₽",
      },
      {
        key: "Тип объекта",
        value: "Участок",
      },
      {
        key: "Площадь",
        value: "30 соток",
      },
      {
        key: "Статус",
        value: "ИЖС",
      },
      {
        key: "Строения",
        value: "Нет",
      },
      {
        key: "Коммуникации",
        value: "Есть",
      },
    ],
  },
];

export const AgencyTab: FC = () => {
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
