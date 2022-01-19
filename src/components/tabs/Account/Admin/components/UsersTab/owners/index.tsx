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
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
  {
    email: "ivanivanov@inbox.ru",
    phone: "+7 999 249 86 49",
    name: "Иван Иванов",
    img: avatar,
    link: "/",
  },
];

export const OwnersTab: FC = () => {
  return (
    <div className={commonStyles.wrapper}>
      <PageFilter />
      <div className={styles.wrapper}>
        {ownersList.map((elem, index) => (
          <OwnerCard
            key={index}
            avatar={elem.img}
            link={elem.link}
            name={elem.name}
            email={elem.email}
            phone={elem.phone}
          />
        ))}
      </div>
    </div>
  );
};
