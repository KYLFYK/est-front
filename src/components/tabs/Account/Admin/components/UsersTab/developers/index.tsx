import React, { FC, useEffect } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "../agency/AgentCard";
import { observer } from "mobx-react-lite";
import { DevelopersListStore } from "../../../../../../../mobx/role/admin/cabinet/developers";

import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

export const DevelopersTab: FC = observer(() => {
  const hrefPrefix = "/developers/";

  const { list, loaded, uploadList, errorOnLoad } = DevelopersListStore;

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
            title={agent.developerName}
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
