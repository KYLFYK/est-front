import React, { FC, useEffect } from "react";
import { PageFilter } from "../common/PageFilter";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import { AdItem } from "./agency/AdItem";
import { DevelopersListStore } from "../../../../../../mobx/role/admin/ads/developers";
import moment from "moment";
import { observer } from "mobx-react-lite";

import styles from "./agency/AgencyTab.module.scss";

export const DeveloperTab: FC = observer(() => {
  const { loaded, uploadList, list, errorOnLoad } = DevelopersListStore;

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      uploadList();
    }
  }, [loaded, uploadList, errorOnLoad]);

  return list !== null ? (
    <div className={styles.wrapper}>
      <PageFilter buttonText={"Добавить объект"} />
      <FilterSearch />
      <div className={styles.list}>
        {list.map((element, index) => (
          <AdItem
            name={element.name}
            address={element.address}
            additionalSmall
            altHeadKeys={Boolean(element.sellingPrice) && element.sold}
            key={index}
            headerElems={
              element.sellingPrice && element.sold
                ? [
                    {
                      key: "Продан",
                      value: `${element.sellingPrice} ₽`,
                    },
                  ]
                : undefined
            }
            footerMainElems={[
              {
                key: "Показов в поиске",
                value: element.impressions,
              },
              {
                key: "Просмотров",
                value: element.views,
              },
              {
                key: "Избранное",
                value: element.favorites,
              },
            ]}
            footerElems={[
              {
                key: "Дата обновления:",
                value: moment(element.updateAt).format("DD.MM.YYYY"),
              },
              {
                key: "Дата публикации:",
                value: moment(element.publishedAt).format("DD.MM.YYYY"),
              },
            ]}
          />
        ))}
      </div>
    </div>
  ) : (
    <>Loading</>
  );
});
