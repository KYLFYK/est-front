import React, { FC, useEffect } from "react";
import { PageFilter } from "../../common/PageFilter";
import { OwnerCard } from "./OwnerCard";
import { OwnersListStore } from "../../../../../../../mobx/role/admin/users/owners";
import { observer } from "mobx-react-lite";

import avatar from "../../../../../../../Pics/persons/exampleAvatar.png";
import commonStyles from "../../../AdminRoleStyles.module.scss";
import styles from "../agency/agency.module.scss";

export const OwnersTab: FC = observer(() => {
  const hrefPrefix = "/owners/";
  const { list, loaded, errorOnLoad, uploadList } = OwnersListStore;

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList, list]);

  return (
    <div className={commonStyles.wrapper}>
      <PageFilter />
      <div className={styles.wrapper}>
        {list?.map((elem, index) => (
          <OwnerCard
            key={index}
            avatar={avatar}
            id={elem.id}
            name={`${elem.firstName} ${elem.lastName}`}
            email={elem.email}
            phone={elem.phoneHumber}
            hrefPrefix={hrefPrefix}
          />
        ))}
      </div>
    </div>
  );
});
