import React, { FC } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "../agency/AgentCard";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

const AgencyList = [
  {
    id: "1",
    description: "Девелоперская компания",
    title: "Брусника",
    img: undefined,
  },
  {
    id: "2",
    description: "Девелоперская компания",
    title: "Брусника",
    img: undefined,
  },
  {
    id: "3",
    description: "Девелоперская компания",
    title: "Брусника",
    img: undefined,
  },
  {
    id: "4",
    description: "Девелоперская компания",
    title: "Брусника",
    img: undefined,
  },
  {
    id: "5",
    description: "Инвестиционная строительная компания",
    title: "EMAAR",
    img: undefined,
  },
  {
    id: "6",
    description: "Инвестиционная строительная компания",
    title: "EMAAR",
    img: undefined,
  },
  {
    id: "7",
    description: "Инвестиционная строительная компания",
    title: "EMAAR",
    img: undefined,
  },
  {
    id: "8",
    description: "Инвестиционная строительная компания",
    title: "EMAAR",
    img: undefined,
  },
];

export const DevelopersTab: FC = () => {
  const hrefPrefix = "/developers/";

  return (
    <div className={commonStyles.wrapper}>
      <PageFilter />
      <div className={styles.wrapper}>
        {AgencyList.map((agent, index) => (
          <AgentCard
            key={index}
            hrefPrefix={hrefPrefix}
            description={agent.description}
            title={agent.title}
            imgUrl={agent.img}
            id={agent.id}
          />
        ))}
      </div>
    </div>
  );
};
