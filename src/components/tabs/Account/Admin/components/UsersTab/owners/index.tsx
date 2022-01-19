import React, { FC } from "react";
import { PageFilter } from "../../common/PageFilter";
import { OwnerCard } from "./OwnerCard";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

import avatar from "../../../../../../../Pics/persons/exampleAvatar.png";

const ownersList = [
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "1",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "2",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "3",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "4",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "5",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "6",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "7",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    id: "8",
  },
];

export const OwnersTab: FC = () => {
  const hrefPrefix = "/owners/";

  return (
    <div className={commonStyles.wrapper}>
      <PageFilter />
      <div className={styles.wrapper}>
        {ownersList.map((elem, index) => (
          <OwnerCard
            key={index}
            avatar={elem.img}
            id={elem.id}
            name={elem.name}
            email={elem.email}
            phone={elem.phone}
            hrefPrefix={hrefPrefix}
          />
        ))}
      </div>
    </div>
  );
};
