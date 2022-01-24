import React, { FC, useEffect } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "./AgentCard";
import { observer } from "mobx-react-lite";
import { AgencyListStore } from "../../../../../../../mobx/role/admin/users/agencies";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "./agency.module.scss";

export const AgencyTab: FC = observer(() => {
  const hrefPrefix = "/agencies/";

  const { list, loaded, uploadList, errorOnLoad } = AgencyListStore;

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList]);

  return list !== null ? (
    <div className={commonStyles.wrapper}>
      <PageFilter />
      <div className={styles.wrapper}>
        {list.map((agent, index) => (
          <AgentCard
            key={index}
            hrefPrefix={hrefPrefix}
            description={agent.description}
            title={agent.agencyName}
            imgUrl={agent.imgUrl}
            id={agent.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
