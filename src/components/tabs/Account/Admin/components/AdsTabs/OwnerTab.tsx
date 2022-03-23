import React, { FC, useEffect } from "react";
import { PageFilter } from "../common/PageFilter";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { AdItem } from "./agency/AdItem";
import { OwnersListStore } from "../../../../../../mobx/role/admin/ads/owners";
import moment from "moment";
import { observer } from "mobx-react-lite";

import styles from "./agency/AgencyTab.module.scss";

export const OwnerTab: FC = observer(() => {
  const { loaded, errorOnLoad, list, uploadList } = OwnersListStore;

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, errorOnLoad, uploadList]);

  return list !== null ? (
    <div className={styles.wrapper}>
      <PageFilter buttonText={"Добавить объект"} />
      <FilterSearch />
      <div className={styles.list}>
        {list.map((el, index) => (
          <AdItem
            name={el.name}
            address={el.address}
            markedAsDeleted={false}
            footerMainElems={[
              {
                key: "Показов в поиске",
                value: el.impressions,
              },
              {
                key: "Просмотров",
                value: el.views,
              },
              {
                key: "Избранное",
                value: el.favorites,
              },
            ]}
            headerElems={
              el.isDraft
                ? [
                    {
                      key: "Черновик",
                      value: "",
                    },
                  ]
                : el.isPublished
                ? [
                    {
                      key: "Дата обновления:",
                      value: moment(el.updateAt).format("DD.MM.YYYY"),
                    },
                    {
                      key: "Дата публикации:",
                      value: moment(el.publishedAt).format("DD.MM.YYYY"),
                    },
                  ]
                : [
                    {
                      key: "В архиве с:",
                      value: moment(el.archivedAt).format("DD.MM.YYYY"),
                    },
                  ]
            }
            footerButton={
              el.isPublished
                ? "Продвинуть"
                : el.isArchived
                ? "Восстановить"
                : "Архивировать"
            }
            key={index}
          />
        ))}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
