import React, { FC, useEffect } from "react";
import { PageFilter } from "../../common/PageFilter";
import { AgentCard } from "../agency/AgentCard";
import { observer } from "mobx-react-lite";
import { DevelopersListStore } from "../../../../../../../mobx/role/admin/users/developers";

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
        {list.map((developer, index) => (
          <AgentCard
            key={index}
            hrefPrefix={hrefPrefix}
            description={
              developer.description ? developer.description : "Не указано"
            }
            title={developer.developerName}
            imgUrl={developer.imgUrl}
            id={developer.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
