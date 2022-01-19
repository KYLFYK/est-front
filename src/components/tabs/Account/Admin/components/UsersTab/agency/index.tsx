import React, { FC } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "./AgentCard";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "./agency.module.scss";

const AgencyList = [
  {
    id: "1",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "2",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "3",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "4",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "5",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "6",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "7",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
  {
    id: "8",
    description: "Агенство элитной недвижимости",
    title: "Deal",
    img: undefined,
  },
];

export const AgencyTab: FC = () => {
  const hrefPrefix = "/agencies/";

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
